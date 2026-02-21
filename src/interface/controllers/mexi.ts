import authUseCase from '../../application/useCases/auth'
import creditReportUseCase from '../../application/useCases/creditReport'
import prequalifierUseCase from '../../application/useCases/prequalifier'
import customerRegistrationUseCase from '../../application/useCases/customerRegistration'
import destinationAccountsUseCase from '../../application/useCases/destinationAccounts'
import relationCustomerCompanyUseCase from '../../application/useCases/relationCustomerCompany'
import savingsAccountAuthorizationUseCase from '../../application/useCases/savingsAccountAuthorization'
import creditSimulatorUseCase from '../../application/useCases/creditSimulator'
import creditRequestUseCase from '../../application/useCases/creditRequest'
import additionalServicesUseCase from '../../application/useCases/additionalServices'
import socioEconomicInformationUseCase from '../../application/useCases/socioEconomicInformation'
import referenceUseCase from '../../application/useCases/reference'
import paymentCapacityUseCase from '../../application/useCases/paymentCapacity'
import creditRequestFileUseCase from '../../application/useCases/creditRequestFile'
import instructionsDispersionUseCase from '../../application/useCases/instructionsDispersion'
import creditRequestFreeUseCase from '../../application/useCases/creditRequestFree'
import validateCustomerExistenceUseCase from '../../application/useCases/validateCustomerExistence'
import customersInquiryUseCase from '../../application/useCases/customersInquiry'
import creditRequestAuthorizationUseCase from '../../application/useCases/creditRequestAuthorization'
import creditUseCase from '../../application/useCases/credit'
import cancelCreditRequestUseCase from '../../application/useCases/cancelCreditRequest'
import creditRequestInquiryUseCase from '../../application/useCases/creditRequestInquiry'
import creditRequestDataAgreementUseCase from '../../application/useCases/creditRequestDataAgreement'

export async function creditReport(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditReportUseCase(request.body, env)
  return response
}

export async function prequalifier(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await prequalifierUseCase(request.body, env)
  return response
}

export async function customerRegistration(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await customerRegistrationUseCase(request.body, env)
  return response
}

export async function destinationAccounts (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await destinationAccountsUseCase(request.body, env)
  return response
}

export async function relationCustomerCompany (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await relationCustomerCompanyUseCase(request.body, env)
  return response
}

export async function savingsAccountAuthorization (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await savingsAccountAuthorizationUseCase(request.body, env)
  return response
}

export async function creditSimulator (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditSimulatorUseCase(request.body, env)
  return response
}

export async function creditRequest (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditRequestUseCase(request.body, env)
  return response
}

export async function additionalServices (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await additionalServicesUseCase(request.body, env)
  return response
}

export async function socioEconomicInformation (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await socioEconomicInformationUseCase(request.body, env)
  return response
}

export async function reference (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await referenceUseCase(request.body, env)
  return response
}

export async function paymentCapacity (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await paymentCapacityUseCase(request.body, env)
  return response
}

export async function creditRequestFile (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditRequestFileUseCase(request.body, env)
  return response
}

export async function instructionsDispersion (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await instructionsDispersionUseCase(request.body, env)
  return response
}

export async function creditRequestFree (request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditRequestFreeUseCase(request.body, env)
  return response
}

export async function validateCustomerExistence (request, _reply) {
  const env = request.params?.env || 'qa'
  const query = request.query
  const response = await validateCustomerExistenceUseCase({ ...query }, env)
  return response
}

export async function auth(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await authUseCase(request.body, env)
  return response
}

export async function customersInquiry(request, _reply) {
  const { customerId, env } = request.params
  const response = await customersInquiryUseCase(customerId, env || 'qa' )
  return response
}

export async function creditRequestAuthorization(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditRequestAuthorizationUseCase(request.body, env)
  return response
}

export async function credit(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditUseCase(request.body, env)
  return response
}

export async function cancelCreditRequest(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await cancelCreditRequestUseCase(request.body, env)
  return response
}

export async function creditRequestInquiry(request, _reply) {
  const { creditRequestNumber, env } = request.params
  const response = await creditRequestInquiryUseCase(creditRequestNumber, env || 'qa')
  return response
}

export async function creditRequestDataAgreement(request, _reply) {
  const env = request.params?.env || 'qa'
  const response = await creditRequestDataAgreementUseCase(request.query, env || 'qa')
  return response
}
