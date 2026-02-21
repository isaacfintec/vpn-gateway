import MexiService from '../../infrastructure/services/mexi.service'

export default function credit(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.credit(params)
}