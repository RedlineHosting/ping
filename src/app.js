const { readFileSync } = require("fs")
const path = require('path')

const app = require('https').createServer({
  key: readFileSync(path.join('certs', 'key.pem')),
  cert: readFileSync(path.join('certs', 'cert.pem')),
})

const io = require('socket.io')(app, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const port = process.env.PORT || 9091

io.on('connection', (socket) => {
  socket.on('rping', (clientTimestamp) => {
    socket.emit('rpong', clientTimestamp)
    console.log(`[PING] WS ping from ${socket.handshake.address}`)
  })
})

app.listen(port, () => {
  console.log(`[PING] Listening on ::${port}`)
})
