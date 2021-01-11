/// <reference types="cypress" />

// https://on.cypress.io/interacting-with-elements

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://staging.asuonline.asu.edu/online-degree-programs/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Fill out form RFI', () => {
    // https://on.cypress.io/type
    // cy.get('#degree-type').should('have.value', 'Select a degree type')

    cy.contains('I agree')
      .click()

    cy.scrollTo('top')

    cy.get('#programs-search')
      .type('anthropo')
      .should('be.visible')

    cy.get('#fixed-apply-bar')
      .contains('Request Info')
      .should('be.visible')
      .click()
  })
})
