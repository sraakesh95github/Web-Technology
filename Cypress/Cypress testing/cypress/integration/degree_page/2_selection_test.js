// let num1 = [3, 4, 5]
// let num2 = [4, 3, 7]
// let result_expect = [3, 4]

context('Actions', () => {

    function arrayEqual(a, b) {
        let result_arr = []
        let index = 0
        if(Array.isArray(a) && Array.isArray(b))
            a.forEach((val1) => {
                // console.log(val)
                b.forEach((val2) => {
                    if(val1 === val2) {
                        console.log(val1)
                        result_arr[index] = val1
                        index ++
                    }
                }
            })
        console.log(result_arr)
        return result_arr
    }

before(() => {
    cy.visit('https://staging.asuonline.asu.edu/online-degree-programs/')

    cy.readFile('program_list.json')
      .then((json) => {
        this.data = json
      })
})

it('Check for existing degree programs (Undergrad and History)', () => {
    cy.get('#interest-list')
      .select('History')
      .should('have.value', '.history')
      .get('#category-list')
      .select('Undergraduate')
      .should('have.value', '.undergraduate')
      
    // cy.readFile('program_list.json')
    //   .its('interestHistory', 'undergradList')
    //   .then((interestHistory, undergradList) => {
    //     arrayEqual(interestHistory, undergradList).forEach((val, index) => {
    //         cy.contains(val)
    //       })
    //   })

    // cy.readFile('program_list.json')
    //   .its('gradList')
    //   .then((gradList) => {
    //       let lst2 = []
    //       gradList.forEach((val, index) => {
    //         lst2[index] = val
    //       })
    //   })

      .get('.container')
      .then(() => {

    //         let json = cy.readFile('program_list.json')
    //         // const json = '{"lst1": [1, 2, 3], "lst2": [2, 1, 4]}'
    //         console.log("This is the JSON")
    //         console.log(json.toString())
    //         const obj = JSON.parse(json.toString())
            let lst1 = this.data.undergradList
            let lst2 = this.data.interestHistory

            arrayEqual(lst1, lst2).forEach((val, index) => {
                console.log(val)
                cy.contains(val)
            }
    //     })
    // })
})

// describe('Check for equality of array elements', () => {
//     function arrayEqual(a, b) {
//         let result_arr = []
//         let index = 0
//         if(Array.isArray(a) && Array.isArray(b))
//             a.forEach((val1) => {
//                 // console.log(val)
//                 b.forEach((val2) => {
//                     if(val1 === val2) {
//                         console.log(val1)
//                         result_arr[index] = val1
//                         index ++
//                     }
//                 }
//             })
//         console.log(result_arr)
//         return result_arr
//     }

//     it.only('Returns true if both the arrays have equal values', () => {
//         arrayEqual(num1, num2).forEach((val, index) => {
//             expect(val).equals(result_expect[index])
//         }
//     })
//     })
})

it('Check for existing degree programs (Grad and History)', () => {
    // cy.get('#interest-list')
    //   .select('History')
    //   .should('have.value', '.history')
    
    cy.get('#category-list')
      .select('Graduate')
      .should('have.value', '.graduate')
      .get('#interest-list')
      .select('History')
      .should('have.value', '.history')
      .get('.container')
      .then(() => {

            let lst1 = this.data.undergradList
            let lst2 = this.data.interestHistory

            arrayEqual(lst1, lst2).forEach((val, index) => {
                console.log(val)
                cy.contains(val)
                  .should('be.visible')
            }
    })
})
