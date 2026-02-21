import ClientHttp from '../config/httpClient'

export default class CecobanService {
  http: ClientHttp

  constructor(env) {
    this.http = new ClientHttp(env)
  }

  async getCURP(params) {
    const response = await this.http.post('/SIVI.API/ObtenerCURP', params)
    return response
  }
}
