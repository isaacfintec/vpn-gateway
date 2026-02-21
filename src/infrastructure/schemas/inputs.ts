import { FastifyInstanceExt } from '../../domain/types/fastify'

export default function (fastify: FastifyInstanceExt) {
  fastify.addSchema({
    $id: 'getCURPInput',
    type: 'object',
    properties: {
      Nombre: { type: 'string' },
      ApellidoPaterno: { type: 'string' },
      ApellidoMaterno: { type: 'string' },
      Sexo: { type: 'string' },
      FechaNacimiento: { type: 'string' },
      ClaveEntidadFederativa: { type: 'string' }
    },
    required: [
      'Nombre',
      'ApellidoPaterno',
      'Sexo',
      'FechaNacimiento',
      'ClaveEntidadFederativa'
    ]
  })
}
