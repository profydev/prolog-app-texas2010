import packageJson from "package.json";

describe("footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("footer should be exist", () => {
    cy.getByData("footer").should("exist");
  });

  it("footer links should be exist", () => {
    const linksText = ["Docs", "API", "Help", "Community"];

    cy.getByData("footer-links")
      .should("exist")
      .find("a")
      .each((element, index) => {
        cy.wrap(element).should("have.text", linksText[index]);
      });
  });

  it("logo img should be exist", () => {
    cy.getByData("footer-logo")
      .should("exist")
      .find("img")
      .should("have.attr", "src", "/icons/logo-small.svg");
  });

  it("Verison should be exist and show a number", () => {
    cy.getByData("package-version")
      .should("exist")
      .should("contain.text", packageJson.version);
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("footer elements order must be correct", () => {
      cy.getByData("package-version").should("have.css", "order", "0");
      cy.getByData("footer-links").should("have.css", "order", "2");
      cy.getByData("footer-logo").should("have.css", "order", "3");
    });
  });
});
