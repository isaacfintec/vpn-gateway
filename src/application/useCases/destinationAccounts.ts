import MexiService from '../../infrastructure/services/mexi.service'

export default function destinationAccounts(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.destinationAccounts(params)
}