Cypress.Commands.add('SignIn', () => {
  cy.visit('/#/login?_k=6fvoh1')

  //verifies the title of the website
  cy.title().should('eq', 'Conduit')

  //verify the location of the current URL
  //Check whether the protocol is HTTPS
  cy.location('protocol')
          .should('eq', 'https:')

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
  //   .click()

  //Assertion to ensure that we are on the right page
  //contains and get have a default timeout of 4 seconds
  //However an optional timeout can be specified
  cy.contains('Your Feed', { timeout: 10000 })
          .should('be.visible')
})
