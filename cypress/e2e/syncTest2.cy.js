context("Testing async commands on Actions page", () => {
  it("types into an email field", () => {
    cy.visit("/commands/actions");
    cy.findByPlaceholderText("Email").type("test@email.com");
    cy.wait(5000).then(() => {
      // .then() makes non cypress asychronos promise to fetch data
      // You can run api calls in a synchronous fasion so they dont run asynchronously
      // so they can finish then do the cy. operations

      fetch("https://api.spacexdata.com/v3/missions")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  });
});
