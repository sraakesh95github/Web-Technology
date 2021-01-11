describe('Form test', () => {
  it('Can fill the form', () => {
    cy.visit('https://vuetifyjs.com/en/components/forms/')
    cy.get('#v-sheet.theme--light.rounded-0')

    cy.get('.input-853')
        .type('Raakesh SS')
        .should('have.value', 'Raakesh SS')

    cy.get('.input-853')
        .type('rsures14')
        .should('have.value', 'rsures14')

    cy.get('.input-859')
        .select('Mind you if I ask some silly question?')
        .should('have.value', 'Mind you if I ask some silly question?')

    cy.get('form').submit()
  })
})
