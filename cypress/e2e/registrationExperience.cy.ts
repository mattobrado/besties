import { ROUTES, THE_GENIUS_PROGRAM_CONTENT } from "../../src/lib";

const rootPath = "http://localhost:5173";

describe("registration", () => {
  it("navigates home", () => {
    cy.viewport("iphone-6");
    cy.visit(rootPath + ROUTES.REGISTER);
    cy.get("#beginRegistration").click();
    cy.get("input").type("5555555");
    cy.get('button[type="submit"]').click();
  });
});
