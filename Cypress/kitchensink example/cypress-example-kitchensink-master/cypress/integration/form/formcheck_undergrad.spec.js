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
      .select('Undergraduate')
      .should('have.value', 'Undergraduate')

    cy.get('#interest-area')
      .select('Geographical sciences and urban planning')
      .should('have.value', 'Geographical sciences and urban planning')

    cy.get('#program')
      .select('Geography (BA)')
      .should('have.value', '5a24a067-0492-4c86-bfe1-2c48f21222d4')

    cy.get('.btn.font-weight-bold.py-space-xxs.px-space-md.btn-secondary')
      .click()

    cy.get('#asuo-rfi')
      .contains('First name')
  })
})
