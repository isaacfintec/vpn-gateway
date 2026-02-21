import getCURPUseCase from '../../application/useCases/getCURP'

export async function getCURP(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await getCURPUseCase(request.body, env)
  return response
}
