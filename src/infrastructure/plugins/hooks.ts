import { FastifyRequest, FastifyReply } from 'fastify'
import { FastifyInstanceExt } from '../../domain/types/fastify'

export default async function hooks(fastify: FastifyInstanceExt) {
  fastify.addHook(
    'onRequest',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const authorization = request.headers['authorization']
        // TODO: add APIKEY envar
        if (authorization !== fastify.config.apiKey)
          throw new Error('UNAUTHORIZED')
      } catch (error) {
        reply.status(401).send({ error: error.message })
      }
    }
  )
}
