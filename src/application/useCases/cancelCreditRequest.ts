import MexiService from '../../infrastructure/services/mexi.service'

export default function cancelCreditRequest(params, env) {
  const mexiService = new MexiService('SAFI', env)
  return mexiService.cancelCreditRequest(params)
}