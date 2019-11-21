context("Search International", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("has the right App title", () => {
    cy.title().should("contain", "Internationals");
    cy.get(".List__InputStyled-lqya46-1").type("man");
    cy.get(".List__ClearButtonStyled-lqya46-5").click();
  });
});
