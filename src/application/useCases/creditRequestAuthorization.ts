import MexiService from '../../infrastructure/services/mexi.service'

export default function creditRequestAuthorization(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequestAuthorization(params)
}