import https from 'https'
import axios, { Axios } from 'axios'

const TIMEOUT = 60000

interface ConfigEnv {
  qa: IConfig
  prod: IConfig
}
interface IConfig {
  email: string
  password: string
  accessToken: string
  token: string
}


const CONFIG: ConfigEnv = {
  qa: {
    email: process.env.QA_MEXI_USER_EMAIL,
    password: process.env.QA_MEXI_USER_PASSWORD,
    accessToken: process.env.QA_ACCESS_TOKEN,
    token: ''
  },
  prod: {
    email: process.env.PROD_MEXI_USER_EMAIL,
    password: process.env.PROD_MEXI_USER_PASSWORD,
    accessToken: process.env.PROD_ACCESS_TOKEN,
    token: ''
  }
}

export const BASE_URL = {
  SAFI: {
    qa: 'http://172.17.2.223:8081',
    prod: 'http://172.17.3.1:8081'
  },
  SAC: {
    qa: 'http://172.17.2.144:8080',
    prod: 'http://172.17.2.212:80'
  }
}

export type ApiType = keyof typeof BASE_URL

class httpMexiClient {
  http: Axios
  config: Record<string, unknown>
  env: string

  constructor(api: ApiType, env: string) {
    this.http = axios.create({
      baseURL: BASE_URL[api][env] || BASE_URL[api].qa,
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    this.config = CONFIG[env] || CONFIG.qa
    this.env = env
  }

  async post (url, body, options?: Record<string, unknown>) {
    try {

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)
      const response = await this.http.post(url, body, {
        signal: controller.signal,
        ...(options && { ...options })
      })
      clearTimeout(timeoutId)
      
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async get (url, options?: Record<string, unknown>) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)
    const response = await this.http.get(url, {
      signal: controller.signal,
      ...(options && { ...options })
    })
    clearTimeout(timeoutId)

    return response.data
  }

  async auth(params?: { email: string, password: string  }) {
    const body = {
      auth:{
        email: params?.email || this.config.email,
        password: params?.password || this.config.password
      }
    }

    const response = await this.post('/api/v1/user_token', body, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const config = CONFIG[this.env] as IConfig
    config.token = response.jwt

    return response
  }
}

export default httpMexiClient
