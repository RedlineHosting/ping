import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: '*', // allow access from all origins
  methods: ['GET']
}))

app.get('/ping', (req, res) => {
  console.log(`[PING] HTTP GET request from ${req.ip} (${req.hostname})`)

  res.send('Pong')
})

app.listen(9091, () => {
  console.log(`[PING] Listening on ::9091`)
})
