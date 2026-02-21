import CecobanService from '../../infrastructure/services/cecoban.service'

export default function getCURP(params, env) {
  const cecobanService = new CecobanService(env)
  return cecobanService.getCURP(params)
}
