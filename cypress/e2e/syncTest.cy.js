context("Testing async commands on Actions page", () => {
  it("types into an email field", () => {
    cy.visit("/commands/actions");
    cy.findByPlaceholderText("Email").type("test@email.com");
    cy.wait(5000).then(() => {
      // .then() makes non cypress action run synchronously
      // You could run api calls in a synchronous fasion so they dont run asynchronously
      console.log("test is finished");
    })
     
    
  });
});
