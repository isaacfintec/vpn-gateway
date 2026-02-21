import Fastify from 'fastify'
import helmet from '@fastify/helmet'
import decorators from './plugins/decorators'
import schemaValidation from './schemas/inputs'
import hooks from './plugins/hooks'
import apiRoutes from '../interface/routes/api'
import { FastifyInstanceExt } from '../domain/types/fastify'

const app: FastifyInstanceExt = Fastify({
  logger: true
})

decorators(app)
hooks(app)
schemaValidation(app)

app.register(helmet)
app.register(apiRoutes, { prefix: '/api/v1' })

export default app
