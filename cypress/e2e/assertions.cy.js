context("Showing Assertions on Actions Page", () => {
  // beforeEach(() => {
  //     cy.visit("/")
  // })

  it("Shows and active class for the current page", () => {
    cy.visit("/commands/actions");
    cy.get(".dropdown-menu").find("li").eq(2).should("have.class", "active");
  });

  it("Should not have an active class on inactive pages", () => {
    cy.visit("/commands/actions");
    cy.get(".dropdown-menu")
      .find("li")
      .first()
      .should("not.have.class", "active")  // chaining
      .find("a")
      .should("have.attr", "href", "/commands/querying");
  });
});
