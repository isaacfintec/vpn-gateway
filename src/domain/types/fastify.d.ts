import { FastifyInstance } from 'fastify'

export interface FastifyInstanceExt extends FastifyInstance {
  config?: {
    apiKey: string
  }
}
