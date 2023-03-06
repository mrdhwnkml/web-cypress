Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import loginPage from '../../fixtures/model/Login/login'

describe('Login Dashboard', () => {
  beforeEach(() => {
    cy.visit('https://demo.testfire.net/', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    })
  })

  it('Input Valid Username and Password should be success', () => {
    cy.xpath('//*[contains(text(),"Sign In")]').click()
    cy.get(loginPage.usernameInput).type(userData.email)
    cy.get(loginPage.passwordInput).type(userData.password)
    cy.get(loginPage.loginBtn).click()
    cy.url().should('include', '/bank/main.jsp')
  })
  it('Input invalid Username and Password should be fail', () => {
    cy.xpath('//*[contains(text(),"Sign In")]').click()
    cy.get(loginPage.usernameInput).type(userData.name)
    cy.get(loginPage.passwordInput).type(userData.password)
    cy.get(loginPage.loginBtn).click()
    cy.xpath("//span[@id='_ctl0__ctl0_Content_Main_message']").should("include.text","Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")
  })
  it('Input Username and invalid Password should be fail', () => {
    cy.xpath('//*[contains(text(),"Sign In")]').click()
    cy.get(loginPage.usernameInput).type(userData.email)
    cy.get(loginPage.passwordInput).type(userData.name)
    cy.get(loginPage.loginBtn).click()
    cy.xpath("//span[@id='_ctl0__ctl0_Content_Main_message']").should("include.text","Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")
  })
  it('Not input Username and Password should be fail', () => {
    cy.xpath('//*[contains(text(),"Sign In")]').click()
    cy.get(loginPage.usernameInput)
    cy.get(loginPage.passwordInput)
    cy.get(loginPage.loginBtn).click()
    cy.on('window:alert',(txt)=>{
    expect(txt).to.equal('You must enter a valid username');
    })
  })
})
