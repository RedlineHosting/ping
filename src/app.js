import { WebSocketServer } from 'ws'

const port = process.env.PORT || 9091

const wss = new WebSocketServer({ port })

wss.on('connection', (ws, req) => {
  ws.on('message', () => {
    ws.send('Pong')
    ws.close()

    console.log(`[PING] WS ping from ${req.socket.remoteAddress}`)
  })
})

console.log(`[PING] Listening on ::${port}`)
