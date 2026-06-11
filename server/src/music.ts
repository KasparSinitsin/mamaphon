import { requireAuth } from './middleware'
import { Router, Request, Response } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'
import { Track } from '@mamaphon/shared'


const router: Router = Router()
const MUSIC_DIR = join(__dirname, '..', 'music')

router.get('/music', requireAuth, (_req: Request, res: Response) => {
  const files = readdirSync(MUSIC_DIR)
    .filter(f => f.endsWith('.mp3'))

  const tracks: Track[] = files.map(filename => {
    const [artist, title] = filename
      .replace('.mp3', '')
      .split(' - ')

    return {
      filename,
      artist: artist?.trim() ?? 'Unknown',
      title: title?.trim() ?? filename
    }
  })

  res.json(tracks)
})

export default router