import MexiService from '../../infrastructure/services/mexi.service'

export default function socioEconomicInformation(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.socioEconomicInformation(params)
}