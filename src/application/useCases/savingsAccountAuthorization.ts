import MexiService from '../../infrastructure/services/mexi.service'

export default function savingsAccountAuthorization(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.savingsAccountAuthorization(params)
}