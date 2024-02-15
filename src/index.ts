import express from 'express'
import { logger } from './utils'

const app = express()
const port = process.env.port ?? 3000

app.listen(port, () => {
  logger.info('App listening on port 3000')
})
