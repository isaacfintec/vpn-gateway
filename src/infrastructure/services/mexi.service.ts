import httpMexiClient, { ApiType } from '../config/httpMexiClient'
import { retry, handleAPIError, getQueryStringParams } from './utils'

// SESSION TOKEN PERSISTENCE
let USER_TOKEN = ''

export default class MexiService {
  http: httpMexiClient

  constructor(api: ApiType, env?: string) {
    this.http = new httpMexiClient(api, env)
  }

  /** ********************************
   ************** SAC ***************
   ***********************************/

  _prequalifier(params) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.http.config.token}`
    }

    return this.http.post('/api/v1/prequalifier/', params, { headers })
  }

  _validateCustomerExistence(params) {
    const stringParams = getQueryStringParams(params)
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.http.config.token}`
    }

    return this.http.get(`/api/v1/customers/validate?${stringParams}`, { headers })
  }

  async prequalifier(params) {
    const self = this
    try {
      const operation = self._prequalifier.bind(self, params)
      return await retry(operation, {
        retries: 2,
        onFail: () => self.http.auth()
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async validateCustomerExistence(params) {
    const self = this
    try {
      const operation = self._validateCustomerExistence.bind(self, params)
      return await retry(operation, {
        retries: 2,
        onFail: () => self.http.auth()
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  /** ********************************
   ************** SAFI ***************
   ***********************************/

  async creditReport(params) {
    try {
      return await this.http.post('/microfinws/circuloCredito/reporteDeCreditoConFicoScore', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async customerRegistration(params) {
    try {
      return await this.http.post('/microfinws/customer/customerRegistration', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async destinationAccounts(params) {
    try {
      return await this.http.post('/microfinws/account/destinationAccounts', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async relationCustomerCompany(params) {
    try {
      return await this.http.post('/microfinws/nomina/relationCustomerCompany', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async savingsAccountAuthorization(params) {
    try {
      return await this.http.post('/microfinws/account/savingsAccountAuthorization', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditSimulator(params) {
    try {
      return await this.http.post('/microfinws/origination/v1/creditSimulator', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequest(params) {
    try {
      return await this.http.post('/microfinws/origination/creditRequest', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async additionalServices(params) {
    try {
      return await this.http.post('/microfinws/origination/additionalServices', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async socioEconomicInformation(params) {
    try {
      return await this.http.post('/microfinws/origination/socioEconomicInformation', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async reference(params) {
    try {
      return await this.http.post('/microfinws/origination/reference', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async paymentCapacity(params) {
    try {
      return await this.http.post('/microfinws/nomina/paymentCapacity', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequestFile(params) {
    try {
      return await this.http.post('/microfinws/origination/creditRequestFile', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async instructionsDispersion(params) {
    try {
      return await this.http.post('/microfinws/origination/instructionsDispersion', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequestFree(params) {
    try {
      return await this.http.post('/microfinws/origination/creditRequestFree', params, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async customersInquiry(customerId) {
    try {
      return await this.http.get(`/microfinws/customer/customersInquiry/${customerId}`, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequestInquiry(creditRequestNumber) {
    try {
      return await this.http.get(`/microfinws/origination/creditRequestInquiry/${creditRequestNumber}`, {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        }
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequestDataAgreement(queryParams) {
    try {
      return await this.http.get('/microfinws/origination/creditRequestDataAgreement', {
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        },
        params: queryParams
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async cancelCreditRequest(params) {
    try {
      return await this.http.post('/microfinws/credit/cancelCreditRequest', params,{
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        },
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async credit(params) {
    try {
      return await this.http.post('/microfinws/credit/credit', params,{
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        },
      })
    } catch (error) {
      handleAPIError(error)
    }
  }

  async creditRequestAuthorization(params) {
    try {
      return await this.http.post('/microfinws/origination/creditRequestAuthorization', params,{
        headers: {
          'Content-Type': 'application/json',
          autorizacion: this.http.config.accessToken
        },
      })
    } catch (error) {
      handleAPIError(error)
    }
  }
}
