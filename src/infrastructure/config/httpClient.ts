import https from 'https'
import axios, { Axios } from 'axios'

export const BASE_URLs = {
  // qa: 'https://148.250.10.42:50996', This line has been comment out due to mocking issues in the sandbox environment
  qa: 'https://148.250.128.19:50996',
  prod: 'https://148.250.128.19:50996'
}

const agent = new https.Agent({
  rejectUnauthorized: false,
  servername: "cecoban.mx"
})

class ClientHttp {
  http: Axios

  constructor(env) {
    this.http = axios.create({
      baseURL: BASE_URLs[env] || BASE_URLs.qa,
      httpsAgent: agent,
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  async post (url, body, options?) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)
    const response = await this.http.post(url, body, {
      signal: controller.signal,
      ...(options && { options })
    })
    clearTimeout(timeoutId)
    return response.data
  }
}

export default ClientHttp
