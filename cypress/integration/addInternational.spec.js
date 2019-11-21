context("Add International", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("has the right App title", () => {
    cy.title().should("contain", "Internationals");
    cy.get('[href = "/add"]').click();
    cy.get(".Add__AddButtonStyled-sc-71612c-6").click();
    cy.get(".Add__InputStyled-sc-71612c-1").type("Test name");
    cy.get(".Add__AddButtonStyled-sc-71612c-6").click();
  });
});
