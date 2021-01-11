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

    cy.get('#first-name')
      .scrollIntoView()
      .should('be.visible')

    cy.get('#first-name')
      .type('Raakesh')
      .should('have.value', 'Raakesh')

    cy.get('#last-name')
      .type('Sureshkumar')
      .should('have.value', 'Sureshkumar')

    cy.get('#email')
      .type('rsures14@asu.edu')
      .should('have.value', 'rsures14@asu.edu')

    cy.get('#email')
      .clear()
      .type('raakesh95')
      .should('have.class', 'form-control is-invalid')

    //Enter the phone number and check for the updated
    //on the entry field
    cy.get('#asuonline_phone_number')
      .type('423383907')
    //   .should('have.value', '(423) 383-907')

    cy.get('.btn.font-weight-bold.py-space-xxs.px-space-md.btn-secondary')
      .should('be.disabled')
  })
})
