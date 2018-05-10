describe("Home Page", () => {
  it("Shows placeholder text...for now", () => {
    cy.visit("/");
    cy.get(".center").contains("The waviest of surf photos/gifs.");
  });
});