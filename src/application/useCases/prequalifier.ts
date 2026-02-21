import MexiService from '../../infrastructure/services/mexi.service'

export default function prequalifier(params, env) {
  const mexiService = new MexiService('SAC', env)
  return mexiService.prequalifier(params)
}
