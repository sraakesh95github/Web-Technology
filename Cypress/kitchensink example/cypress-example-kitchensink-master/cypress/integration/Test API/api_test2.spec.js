describe('API test', () => {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('programs')
        .then((htmlDocString) => {
          // "this" is still the test context object
        // console.log(htmlDocString);
          let parser = new DOMParser()
          let htmlDoc = parser.parseFromString(htmlDocString, 'text/html')
          // console.log(htmlDoc.nodeName);
          let dataTable = htmlDoc.getElementsByTagName('table')
          let rows = dataTable[0].children[1].children

          // console.log(rows)
          this.rowWiseData = rows
        })

    cy.visit('https://staging.asuonline.asu.edu/online-degree-programs/')
  })

  it('Test Graduate List', function () {
    // Get the list of graduate study program names
    // from the programs API
    // var rows = this.rowWiseData;
    // var graduateList = [];
    // for(var i=0; i < rows.length; i++) {
    //     var codeData = rows[i].children[2].textContent;
    //     let degreeType = rows[i].children[3].textContent;
    //     // console.log(degreeType);
    //     if(degreeType == "Graduate") {
    //         graduateList.push(codeData);
    //     }
    // }
    // console.log(graduateList);

    //Get the graduate studies list from the DOM
    cy.get('#category-list')
          .select('Graduate')
          .should('have.value', '.graduate')

    cy.get('section[class=\'container\']')
          .then((upperDiv) => {
            // var gradStudyNodes = upperDiv;
            for (let i = 0; i < upperDiv.length; i++) {
              console.log(upperDiv[i])
            }
          })
  })
})
