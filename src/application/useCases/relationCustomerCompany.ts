import MexiService from '../../infrastructure/services/mexi.service'

export default function relationCustomerCompany(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.relationCustomerCompany(params)
}