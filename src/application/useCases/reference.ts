import MexiService from '../../infrastructure/services/mexi.service'

export default function reference(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.reference(params)
}