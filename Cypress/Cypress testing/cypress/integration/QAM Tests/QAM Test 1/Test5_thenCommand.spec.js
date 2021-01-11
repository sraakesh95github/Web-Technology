// Commands used:
// 1. first()
// 2. last()
// 3. eq(index)
// 4. children

const { all } = require('cypress/types/bluebird')
const cypress = require('cypress')

// Tests performed:
// 1. create a post
// 2. favourite the first post among all
// 3. Refresh the page
// 4. Unfavorite the post
// 5. Write configurations within the test File
// 6. Write the configurations within the cypress.json

describe('Create a post and mark and unmark as favourite', function () {
  //Step 1 for login
  it('Sign in', function () {
    cy.SignIn()
  })

  // Step 2 create a post
  it('Create a post', function () {
    // cy.contains("New Post")
    //   .click()

    cy.get('ul.navbar-nav')
          .children()
          .contains('New Post')
          .click()

    //verify if the URL contains the text '#/editor'
    cy.hash()
          .should('include', '#/editor')

    cy.location('hash')
          .should('include', '#/editor')

    cy.get('form')
          .within(($form) => {
            //Fill in the required details
            cy.get('input')
              .first()
              .type('New article')

            cy.get('textarea')
              .eq(1)
              .type('This is a test article to test the cypress environment')

            cy.get('input')
              .last()
              .type('This is the description of this test article')

            cy.get('.btn')
              .contains('Publish Article')
              .click()
          })

    //verify a substring of the URL
    cy.url()
          .should('include', '#/article')
  })

  // Step 3 create a post
  it('Mark and Unmark as favorite', function () {
    cy.get('.nav-link')
          .contains('sraakesh')
          .click()

    cy.contains('My Articles')
          .should('be.visible')

    //like a particular article
    cy.get('.ion-heart')
          .first()
          .click()
          .wait(1500)

    cy.contains('Favorited Articles')
          .should('be.visible')
          .click()
          .wait(1500)

    //ensure that we are on the correct page
    cy.url()
          .should('include', 'favorites')

    //unlike the particular article
    cy.get('.btn-primary')
          .first()
          .then(($fav) => {
            const favCount = $fav.text()

            expect(parseInt(favCount)).to.eq(1)
          })
          .click()
          .wait(1500)

    //Perform a browser reload on the current page
    cy.reload()

    cy.contains('No articles are here... yet.')
          .should('be.visible')

    //This command is used to click on the browser buttons
    //or performs operations from the browser
    cy.go('back')
    //cy.go(-1)
    //cy.go('forward')
    //cy.go(1)
  })
})
