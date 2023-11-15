context('Using Cypress Fixtures', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {  // cant use arrow function here for "this"
      this.data = data;
      cy.log('THIS: ', this.data)
    })
  })

  it("uses fixture data in a network request", function(){
    cy.visit('commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Response:', res)
    }) 
  })

  it('pulls data from a fixture', () => {
    cy.fixture('example').then((data) => {
      cy.log('DATA: ', data)
    })
  })

  it('updates fixture data inline', () => {
    cy.fixture('example').then((data) => {
      data.email = 'updated@mail.com'
      cy.log('UPDATED: ', data)
    })
  })
})