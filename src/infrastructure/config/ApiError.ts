class API_ERROR extends Error {
  statusCode: number
  message: string
  constructor({ statusCode, message }) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export default API_ERROR
