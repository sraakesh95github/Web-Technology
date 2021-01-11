describe('Create a post and mark and unmark as favourite', function () {
  //Step 1 for login
  it('Sign in', function () {
    cy.visit('https://react-redux.realworld.io/#/login?_k=6fvoh1')

    //verifies the title of the website
    cy.title().should('eq', 'Conduit')

    //verify the location of the current URL
    //Check whether the protocol is HTTPS
    cy.location('protocol')
          .should('eq', 'https:')

    //Find the email address
    cy.get('input[type="email"]')
          .type('rsures14@asu.edu')
          .wait(1000)

    cy.get('input[type="password"]')
          .type('Testing1234')
          .wait(1000)

    cy.get('.btn')
          .contains('Sign in')
          .should('be.visible')
    //   .click()

    //Assertion to ensure that we are on the right page
    //contains and get have a default timeout of 4 seconds
    //However an optional timeout can be specified
    cy.contains('Your Feed', { timeout: 10000 })
          .should('be.visible')
  })

  // Step 2 create a post
  it('Create a post', function () {
    cy.contains('New Post')
          .click()

    //verify if the URL contains the text '#/editor'
    cy.hash()
          .should('include', '#/editor')

    cy.location('hash')
          .should('include', '#/editor')

    //Fill in the required details
    cy.get('input[placeholder="Article Title"]')
          .type('New article')

    cy.get('textarea[placeholder="Write your article (in markdown)"]')
          .type('This is a test article to test the cypress environment')

    cy.get('input[placeholder="What\'s this article about?"]')
          .type('This is the description of this test article')

    cy.get('.btn')
          .contains('Publish Article')
          .click()

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
    cy.get('.ion-heart')
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
