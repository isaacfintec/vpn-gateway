import MexiService from '../../infrastructure/services/mexi.service'

export default function creditConsolidationExt(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.creditConsolidationExt(params)
}
