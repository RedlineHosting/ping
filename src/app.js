import express from 'express'

const app = express()

app.get('/ping', (req, res) => {
  console.log(`[PING] HTTP GET request from ${req.ip} (${req.hostname})`)

  res.send('Pong')
})

app.listen(9091, () => {
  console.log(`[PING] Listening on ::9091`)
})
