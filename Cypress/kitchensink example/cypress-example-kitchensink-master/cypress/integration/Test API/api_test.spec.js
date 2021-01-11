describe('API test', () => {
  it('api test', function () {
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
          for (let i = 0; i < rows.length; i++) {
            let codeData = rows[i].children[2].textContent
            let degreeType = rows[i].children[3].textContent

            // console.log(degreeType);
            if (degreeType == 'Graduate') {
              console.log(codeData)
            }
          }
        })
  })
})
