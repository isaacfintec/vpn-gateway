import MexiService from '../../infrastructure/services/mexi.service'

export default function customersInquiry(customerId, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.customersInquiry(customerId)
}