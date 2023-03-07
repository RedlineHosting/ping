import { WebSocketServer } from 'ws'
import cors from 'cors'

const port = process.env.PORT || 9091

const wss = new WebSocketServer({ port })

// Create a middleware function to enable CORS
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
});

// Use the middleware function for all WebSocket connections
wss.on('connection', (ws, req) => {
  // Apply the CORS middleware to the request object
  corsMiddleware(req, null, () => {
    ws.on('message', () => {
      ws.send('Pong')
      ws.close()

      console.log(`[PING] WS ping from ${req.socket.remoteAddress}`)
    })
  })
})

console.log(`[PING] Listening on ::${port}`)
