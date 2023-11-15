context("Tests using UI Commands", () => {

  it("links to the actions page correctly", () => {
    cy.visit("/")
    cy.findAllByText("Actions").first().click({ force: true }); // link is hidden without {force: true}
    cy.url().should("include", "commands/actions")
  })

  it("lets you type in an input field", () => {
    cy.visit("/commands/actions")
    cy.findByPlaceholderText("Email").type("Test").should("have.value", "Test")
  })

  it("lets you clear an input field", () => {
    cy.visit("/commands/actions")
    cy.findByLabelText("Describe:").type("Test Description").should("have.value", "Test Description")
        .clear().should("have.value", "")
  })

  it("lets you check a checkbox", () => {
    cy.visit("/commands/actions")
    cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true}).should('be.checked')
  })







})