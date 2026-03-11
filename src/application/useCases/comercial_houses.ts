import MexiService from '../../infrastructure/services/mexi.service'

export default function commercial_houses(params, env) {
  const mexiService = new MexiService('SAC', env)
  return mexiService.commercial_houses(params)
}
