/// <reference types="cypress" />

// https://on.cypress.io/interacting-with-elements

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://asuonline.asu.edu/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Fill out form RFI', () => {
    // https://on.cypress.io/type
    // cy.get('#degree-type').should('have.value', 'Select a degree type')

    cy.get('#degree-type')
      .scrollIntoView()
      .should('be.visible')

    cy.get('#degree-type')
      .select('Graduate')
      .should('have.value', 'Graduate')

    cy.get('#interest-area')
      .children()
      .should('contain', 'Art and design')
      .and('contain', 'History')
  })
})
