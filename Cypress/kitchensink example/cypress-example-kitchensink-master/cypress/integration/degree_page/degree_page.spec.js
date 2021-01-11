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

    cy.get('#programs-search')
      .type('anthropo')
      .wait(1500)
      .clear()
      .type('applie')
      .wait(1500)
      .clear()
      .type('Biochem')
      .wait(1500)
      .clear()
      .type('business')
      .wait(1500)
      .clear()
      .type('advocacy')
      .wait(1500)
  })
})
