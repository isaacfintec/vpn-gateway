import MexiService from '../../infrastructure/services/mexi.service'

export default function creditConsolidationInt(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditConsolidationInt(params)
}
