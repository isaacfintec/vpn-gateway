import axios, { AxiosError } from 'axios'
import pRetry from 'p-retry'

import API_ERROR from '../../config/ApiError'

type TOperation = () => Promise<unknown>

interface IOptions {
  retries: number
  onFail: () => Promise<unknown>
}

export function retry (operation: TOperation, options: IOptions) {
  return pRetry(operation, {
    retries: options.retries,
    onFailedAttempt: async (error: any) => {
      console.log({ error: error?.response?.data || error?.message })
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        await options.onFail()
      }
    }
  })
}

export const handleAPIError = (error: Error | AxiosError) => {
  console.log('API error')
  console.log(error)

  if ('response' in error) {
    const err = error?.response
    throw new API_ERROR({ statusCode: err?.status, message: `${err?.statusText}: ${JSON.stringify(err?.data)}` })
  }
  throw new API_ERROR({ statusCode: 500, message: error?.message })
}

export const getQueryStringParams = (params) => {
  const queryParams = Object.entries(params)
  let recordParams = []
  for (const [key, value] of queryParams) {
    if (!!value) recordParams.push(`${key}=${value}`)
  }
  return recordParams.join('&')
}
