/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'
// import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database is connected successfully')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
    process.exit(1)
  })
}
main()

process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})
