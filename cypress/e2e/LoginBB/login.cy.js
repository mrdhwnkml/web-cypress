Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import userData from '../../fixtures/data/user.json'
import invalidData from '../../fixtures/data/profile.json'
import loginPage from '../../fixtures/model/Login/login'

describe('Login Dashboard', () => {
  beforeEach(() => {
    cy.visit('https://belajar-bareng.onrender.com/', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    })
  })

  it('Input invalid Username and Password should be fail', () => {
    cy.get('[data-testid="username-input"]').type('belajarbareng')
    cy.get('[data-testid="password-input"]').type('belajarbareng1')
    cy.get('[data-testid="login-button"]').click()

    cy.get('[data-testid="toast-item-error-login"]').should('be.visible')
  })
})
