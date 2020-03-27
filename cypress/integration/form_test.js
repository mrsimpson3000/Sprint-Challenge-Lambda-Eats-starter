/* eslint-disable no-undef */
describe("Testing the form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3004");
  });
  it("Add text to inputs and check some checkboxes and submit form", function() {
    cy.get("#order").click();
    cy.get("#name")
      .type("Simpson")
      .should("have.value", "Simpson");
    cy.get("#pizzaSize")
      .select("X-Large")
      .should("have.value", "X-Large");
    cy.get("#sauce")
      .select("Light")
      .should("have.value", "Light");
    cy.get("#pepperoni")
      .check()
      .should("be.checked");
    cy.get("#sausage")
      .check()
      .should("be.checked");
    cy.get("#grilledChicken")
      .check()
      .should("be.checked");
    cy.get("#submitButton").click();
  });
});
