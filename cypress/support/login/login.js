Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../fixtures/model/Login/login'

Cypress.Commands.add('loginDashboard', function (users = userData) {
    const tryLogin = (index = 0) => {
    const cred = users[index]
    
    if (!cred) {
      throw new Error('Semua credential gagal login')
    }

  cy.visit('https://demo.testfire.net/')
  cy.xpath('//*[contains(text(),"Sign In")]').click()
  cy.get(loginPage.usernameInput).type(cred .email)
  cy.get(loginPage.passwordInput).type(cred.password)
  cy.get(loginPage.loginBtn).click()

  cy.url().then((url) => {
      if (url.includes('/bank/main.jsp')) {
        cy.log(`Login success with user: ${cred.email}`)
        return
      }
  cy.log(`Login gagal untuk: ${cred.email}, coba next credential`)
      tryLogin(index + 1)
    })
  }

  tryLogin(0)

})
