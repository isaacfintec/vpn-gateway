import MexiService from '../../infrastructure/services/mexi.service'

export default function creditRequest(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequest(params)
}