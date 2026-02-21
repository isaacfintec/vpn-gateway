import MexiService from '../../infrastructure/services/mexi.service'

export default function creditSimulator(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditSimulator(params)
}