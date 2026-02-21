import app from '../infrastructure/app'
import { normalizePort } from './utils/functions'

const PORT = normalizePort(process.env.PORT || '8080')

/**
 * APP global events
 */

app.setNotFoundHandler((req, reply) => {
  reply.status(404).send({
    statusCode: 404,
    error: 'Not Found',
    message: `The requested resource ${req.url} was not found`,
    timestamp: new Date().toISOString()
  })
})

app.setErrorHandler((error, req, reply) => {
  console.log({ error })
  let statusCode = error.statusCode || 500
  let message = error.message || 'Server Error'

  if (error.validation) {
    statusCode = 400
    message = 'Validation Error'
  }

  reply.status(statusCode).send({
    success: false,
    error: message
  })
})

app.listen({ port: PORT, host: '0.0.0.0' }, () => {
  console.info(`Server running on port ${PORT}`)
})

/**
 * PROCESS global events
 */

process.on('uncaughtException', e => {
  console.info(e)
  process.exit(1)
})

process.on('unhandledRejection', e => {
  console.info(e)
  process.exit(1)
})
