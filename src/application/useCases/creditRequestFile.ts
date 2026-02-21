import MexiService from '../../infrastructure/services/mexi.service'

export default function creditRequestFile(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequestFile(params)
}