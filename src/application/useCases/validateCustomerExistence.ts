import MexiService from '../../infrastructure/services/mexi.service'

export default function validateCustomerExistence(params, env) {
  const mexiService = new MexiService('SAC', env)
  return mexiService.validateCustomerExistence(params)
}