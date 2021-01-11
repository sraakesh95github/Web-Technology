/// <reference types="cypress" />

// https://on.cypress.io/interacting-with-elements

const listError = {
  description: 'Test description',
  solution: 'Test solutionr',
}

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://staging.asuonline.asu.edu/online-degree-programs/')
  })

  it('Read from program_list.json for undergrad', () => {
    // https://on.cypress.io/type
    // cy.get('#degree-type').should('have.value', 'Select a degree type')

    cy.get('#category-list')
      .scrollIntoView()
      .should('be.visible')
      .select('Undergraduate')
      .should('have.value', '.undergraduate')

    cy.get('.container')
    cy.readFile('program_list.json')
      .its('undergradList')
      .each((str, i, arr) => {
        cy.contains(str)
      })

    cy.wait(2000)
  })

  it('Read from program_list.json for grad', () => {
    // https://on.cypress.io/type
    // cy.get('#degree-type').should('have.value', 'Select a degree type')

    cy.get('#category-list')
    .scrollIntoView()
    .should('be.visible')
    .select('Graduate')
    .should('have.value', '.graduate')

    cy.get('.container')
    cy.readFile('program_list.json').its('gradList')
      .each((str, i, arr) => {
        cy.contains(str)
      })

    cy.wait(2000)
  })

  // it('Read from programs API', () => {
  //     // https://on.cypress.io/type
  //     cy.visit('https://asuonline.asu.edu/lead-submissions-v3.3/programs')
  //     cy.get('#page-wrapper')
  // })
})
