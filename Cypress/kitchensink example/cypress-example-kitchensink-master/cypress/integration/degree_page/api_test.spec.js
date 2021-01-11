describe('API test', () => {
  it('prograsms api', () => {
    cy.fixture('https://asuonline.asu.edu/lead-submissions-v3.3/programs').then((api) => {
      console.log(api[10])
    })
  })
})
