import MexiService from '../../infrastructure/services/mexi.service'

export default function paymentCapacity(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.paymentCapacity(params)
}