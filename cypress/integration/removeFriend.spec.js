context("Unfriend", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("has the right App title", () => {
    cy.title().should("contain", "Internationals");
    cy.get(
      ":nth-child(1) > :nth-child(4) > .makeStyles-profileButton-6"
    ).click();
    cy.get(
      ":nth-child(1) > :nth-child(3) > .makeStyles-unfriendButton-64"
    ).click();
  });
});
