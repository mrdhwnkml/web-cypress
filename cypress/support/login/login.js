Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../fixtures/model/Login/login'

Cypress.Commands.add('loginDashboard', function () {
  cy.visit('https://demo.testfire.net/')
  cy.xpath('//*[contains(text(),"Sign In")]').click()
  cy.get(loginPage.usernameInput).type(userData.email)
  cy.get(loginPage.passwordInput).type(userData.password)
  cy.get(loginPage.loginBtn).click()
  cy.url().should('include', '/bank/main.jsp')
})
