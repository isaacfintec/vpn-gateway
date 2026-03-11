import { FastifyInstanceExt } from '../../domain/types/fastify'
import { mexi } from '../../interface/controllers'

export default async function creditAPI(fastify: FastifyInstanceExt) {
  // *************************************************************
  // ************************** GET ******************************
  // *************************************************************

  fastify.get('/:env/validateCustomerExistence', mexi.validateCustomerExistence)

  fastify.get('/:env/customersInquiry/:customerId', mexi.customersInquiry)

  fastify.get('/:env/creditRequestInquiry/:creditRequestNumber', mexi.creditRequestInquiry)

  fastify.get(
    '/:env/creditRequestDataAgreement', // query = enterpriseID={1}&idAgreement={1}
    mexi.creditRequestDataAgreement
  )

  fastify.get('/:env/commercial_houses', mexi.commercial_houses)

  // *************************************************************
  // ************************** POST *****************************
  // *************************************************************

  fastify.post('/:env/creditReport', mexi.creditReport)

  fastify.post('/:env/prequalifier', mexi.prequalifier)

  fastify.post('/:env/customerRegistration', mexi.customerRegistration)

  fastify.post('/:env/destinationAccounts', mexi.destinationAccounts)

  fastify.post('/:env/relationCustomerCompany', mexi.relationCustomerCompany)

  fastify.post('/:env/savingsAccountAuthorization', mexi.savingsAccountAuthorization)

  fastify.post('/:env/creditSimulator', mexi.creditSimulator)

  fastify.post('/:env/creditRequest', mexi.creditRequest)

  fastify.post('/:env/additionalServices', mexi.additionalServices)

  fastify.post('/:env/socioEconomicInformation', mexi.socioEconomicInformation)

  fastify.post('/:env/reference', mexi.reference)

  fastify.post('/:env/paymentCapacity', mexi.paymentCapacity)

  fastify.post('/:env/creditRequestFile', mexi.creditRequestFile)

  fastify.post('/:env/instructionsDispersion', mexi.instructionsDispersion)

  fastify.post('/:env/creditRequestFree', mexi.creditRequestFree)

  fastify.post('/:env/creditRequestAuthorization', mexi.creditRequestAuthorization)

  fastify.post('/:env/credit', mexi.credit)

  fastify.post('/:env/cancelCreditRequest', mexi.cancelCreditRequest)

  fastify.post('/:env/creditConsolidationInt', mexi.creditConsolidationInt)

  fastify.post('/:env/creditConsolidationExt', mexi.creditConsolidationExt)
}
