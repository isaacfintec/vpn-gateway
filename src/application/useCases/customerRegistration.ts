import MexiService from '../../infrastructure/services/mexi.service'

export default function customerRegistration(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.customerRegistration(params)
}