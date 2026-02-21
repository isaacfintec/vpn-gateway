import { FastifyInstanceExt } from '../../domain/types/fastify'
import { cecoban, mexi } from '../../interface/controllers'

export default async function identityValidation(fastify: FastifyInstanceExt) {
  fastify.post(
    '/:env/getCurp',
    { schema: { body: { $ref: 'getCURPInput#' } } },
    cecoban.getCURP
  )

  fastify.post(
    '/:env/auth',
    // { schema: { body: { $ref: 'getCURPInput#' } } },
    mexi.auth
  )
}
