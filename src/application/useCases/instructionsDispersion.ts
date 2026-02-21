import MexiService from '../../infrastructure/services/mexi.service'

export default function instructionsDispersion(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.instructionsDispersion(params)
}