import MexiService from '../../infrastructure/services/mexi.service'
// GET
export default function creditRequestDataAgreement(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditRequestDataAgreement(params)
}