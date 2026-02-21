import MexiService from '../../infrastructure/services/mexi.service'

export default function additionalServices(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.additionalServices(params)
}