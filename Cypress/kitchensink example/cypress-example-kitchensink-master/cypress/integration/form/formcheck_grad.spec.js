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
      .should('contain', 'Social and behavioral sciences')
      .and('contain', 'Business')
      .and('contain', 'STEM')
      .and('contain', 'Health and wellness')
      .and('contain', 'Management')
      .and('contain', 'Science')
      .and('contain', 'Engineering')
      .and('contain', 'Sustainability')
      .and('contain', 'Law, criminal justice and public service')
      .and('contain', 'Computer science and technology')
      .and('contain', 'Communication and digital media')
      .and('contain', 'Architecture and construction')
      .and('contain', 'Education')
      .and('contain', 'Language')
      .and('contain', 'Humanities')
      .and('contain', 'Art and design')
      .and('contain', 'Entrepreneurship and innovation')
      .and('contain', 'Information technology')
      .and('contain', 'History')

    cy.get('#interest-area')
      .select('Health and wellness')
      .should('have.value', 'Health and wellness')

    cy.get('#program')
      .should('contain', 'Applied Prevention Science (Graduate Certificate)')

    cy.get('#program')
      .select('Nursing (MS)')
      .should('have.value', 'a30bf603-c554-4553-badc-140260bc908e')

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

    //Enter the phone number and check for the updated
    //on the entry field
    cy.get('#asuonline_phone_number')
      .type('4233839071')
      .should('have.value', '(423) 383-9071')

    //Click on the submit button to submit the form

    cy.get('.svg-inline--fa.fa-arrow-left.fa-w-14.fa-2x')
      .click()

    cy.get('#degree-type')
      .should('have.value', 'Graduate')

    cy.get('.btn.font-weight-bold.py-space-xxs.px-space-md.btn-secondary')
      .click()

    cy.get('.btn.font-weight-bold.py-space-xxs.px-space-md.btn-secondary')
    // .click()
  })
})
