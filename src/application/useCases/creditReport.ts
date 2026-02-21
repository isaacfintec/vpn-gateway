import MexiService from '../../infrastructure/services/mexi.service'

export default function creditReport(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditReport(params)
}
