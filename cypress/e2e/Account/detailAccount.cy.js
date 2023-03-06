Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import '../../support/login/login'

describe('Detail Account User', () => {
  beforeEach(() => {
    cy.loginDashboard()
  })

  it('User get detail account information', function () {
    cy.xpath("//input[@id='btnGetAccount']").click()
    cy.url().should('include', '/bank/showAccount?listAccounts')
  })
})
