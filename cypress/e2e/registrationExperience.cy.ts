import { ROUTES, THE_GENIUS_PROGRAM_CONTENT } from "../../src/lib";

const rootPath = "http://localhost:5173";

describe("registration", () => {
  it("navigates home", () => {
    cy.viewport("iphone-6");
    cy.visit(rootPath + ROUTES.REGISTER);
    // cy.get("[alt=Home").click();
    // cy.location("pathname").should("eq", "/");
  });
});
