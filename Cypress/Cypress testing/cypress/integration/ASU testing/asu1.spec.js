/// <reference types="Cypress" />

describe('Login', function () {
  //Selecting through the various options available at the home page
  it('Check available options', function () {
    cy.visit('https://test.asuonline.asu.edu/')

    cy.get('div[class="dropdown"]')
          .click()
          .contains('admission')
          .click()
          .wait(1500)

    cy.get('div[class="dropdown"]')
          .click()
          .contains('online degrees')
          .click()
          .wait(1500)

    cy.get('div[class="dropdown"]')
          .click()
          .contains('costs')
          .click()
          .wait(1500)

    cy.get('div[class="dropdown"]')
          .click()
          .contains('future sun devils')
          .click()
          .wait(1500)
  })

  it('Check Freshman admissions', function () {
    cy.visit('https://test.asuonline.asu.edu/')

    cy.get('div[class="dropdown"]')
        .click()
        .contains('admission')
        .click()

    cy.get('a[title="Freshman"]')
        .first()
        .click()
        .wait(1500)

    //verify a substring of the URL
    cy.url()
        .should('include', '/admission/freshman')
  })
})
