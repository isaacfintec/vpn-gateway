import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async function hooks(fastify: FastifyInstance) {
  fastify.addSchema({
    $id: 'commonSchema',
    type: 'object',
    properties: {
      hello: { type: 'string' }
    }
  })
}
