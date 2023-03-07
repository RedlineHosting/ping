const app = require('http').createServer()
const io = require('socket.io')(app, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const port = process.env.PORT || 9091

io.on('connection', (socket) => {
  socket.on('ping', (clientTimestamp) => {
    socket.emit('pong', clientTimestamp)
    console.log(`[PING] WS ping from ${socket.handshake.address}`)
  })
})

app.listen(port, () => {
  console.log(`[PING] Listening on ::${port}`)
})
