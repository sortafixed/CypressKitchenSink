context("Testing async commands on Actions page", () => {
  it("types into an email field", () => {
    cy.visit("/commands/actions");
    cy.findByPlaceholderText("Email").type("test@email.com")
    //cy.wait(5000)
    console.log("test is finished") // this prints while test is still running so Async
  })

})