import MexiService from '../../infrastructure/services/mexi.service'
// GET
export default function creditRequestInquiry(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequestInquiry(params)
}