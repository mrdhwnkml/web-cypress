Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />

import '../../support/login/login'
import userPage from '../../fixtures/model/User/user'

describe('Sign Out', () => {
  beforeEach(() => {
    cy.loginDashboard()
  })

  it('User sign out should be succes', function () {
    cy.xpath("//a[@id='LoginLink']").click()
    cy.url().should('include', '/index.jsp')
  })
})
