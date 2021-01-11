/// <reference types="Cypress" />

describe('Login', function () {
  it('Sign in', function () {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6fvoh1')

    //Find the email address
    cy.get('input[type="email"]')
          .type('rsures14@asu.edu')
          .wait(1000)

    cy.get('input[type="password"]')
          .type('Testing1234')
          .wait(1000)

    cy.get('.btn')
          .contains('Sign in')
          .should('be.visible')
          .click()
  })
})
