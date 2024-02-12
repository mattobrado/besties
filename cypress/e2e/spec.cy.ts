import { THE_GENIUS_PROGRAM_CONTENT } from "../../src/lib";

describe("template spec", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:5173/");
  });

  describe("navigation", () => {
    it("passes", () => {
      cy.contains(THE_GENIUS_PROGRAM_CONTENT.navBar.items[0].label);
    });
  });
});
