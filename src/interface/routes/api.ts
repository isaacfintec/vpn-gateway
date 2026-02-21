import { FastifyInstance } from 'fastify'
import usersRoutes from './users'
import creditRoutes from './credit'
import { healtCheck } from '../../interface/controllers'

export default async function apiRoutes(fastify: FastifyInstance) {
  fastify.register(usersRoutes, { prefix: '/users' })
  fastify.register(creditRoutes, { prefix: '/credit' })

  fastify.get('/healthcheck', async (request, reply) => {
    const response = await healtCheck.exec(request.query)
    reply.status(200).send(response)
  })
}
