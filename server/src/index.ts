import 'dotenv/config'
import express from 'express'
import { createServer } from 'http'
import { WebSocketServer } from 'ws'
import authRouter from './auth'
import { join } from 'path'
import musicRouter from './music'
import { requireAuth } from './middleware'

const app = express()
app.use(express.json())
app.use(authRouter)
app.use('/music/files', requireAuth, express.static(join(__dirname, '..', 'music')))
app.use(musicRouter)

const server = createServer(app)
const wss = new WebSocketServer({ server })

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT ?? 3001

server.listen(PORT, () => {
  console.log(`Mamaphon server running on port ${PORT}`)
})

