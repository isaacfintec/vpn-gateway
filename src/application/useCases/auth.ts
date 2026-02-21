import MexiService from '../../infrastructure/services/mexi.service'

export default function auth(params, env) {
  const mexiService = new MexiService('SAC', env)
  return mexiService.http.auth(params)
}
