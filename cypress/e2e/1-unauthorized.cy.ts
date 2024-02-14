import { ROUTES, THE_GENIUS_PROGRAM_CONTENT } from "../../src/lib";

const rootPath = "http://localhost:5173/";

describe("navigation", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.visit(rootPath);
  });

  describe("the brand logo", () => {
    it("navigates home", () => {
      cy.get("[alt=Home").click();
      cy.location("pathname").should("eq", "/");
    });
  });
  describe("the about us link", () => {
    it("navigates home", () => {
      const item = THE_GENIUS_PROGRAM_CONTENT.navBar.items[0];
      cy.contains(item.label).click();
      cy.location("pathname").should("eq", item.to);
    });
  });
  describe("the registration link", () => {
    it("navigates to registration", () => {
      const item = THE_GENIUS_PROGRAM_CONTENT.navBar.items[1];
      cy.contains(item.label).click();
      cy.location("pathname").should("eq", item.to);
    });
  });
  describe("the the members page link", () => {
    it("navigates to registration if use is unauthorized", () => {
      const item = THE_GENIUS_PROGRAM_CONTENT.navBar.items[2];
      cy.contains(item.label).click();
      cy.location("pathname").should("eq", ROUTES.REGISTER);
    });
  });
  describe("authorization", () => {
    it("navigates to registration if use is unauthorized", () => {
      const item = THE_GENIUS_PROGRAM_CONTENT.navBar.items[2];
      cy.contains(item.label).click();
      cy.location("pathname").should("eq", ROUTES.REGISTER);
    });
  });
  describe("hamburger menu", () => {
    beforeEach(() => {
      cy.get('[aria-label="Toggle navigation"]').click();
    });

    it("", () => {});
  });
});
