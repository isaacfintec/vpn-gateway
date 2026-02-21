import MexiService from '../../infrastructure/services/mexi.service'

export default function creditRequestFree(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequestFree(params)
}