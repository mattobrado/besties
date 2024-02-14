import { ROUTES } from "../../src/lib";

const rootPath = "http://localhost:5173";

describe("registration", () => {
  it("passes registration", () => {
    cy.viewport("iphone-6");
    cy.visit(rootPath + ROUTES.REGISTER);
    cy.get("#beginRegistration").click();
    cy.get("input").type("5555555");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);

    cy.get("#pinInput-0").type("5");
    cy.get("#pinInput-1").type("5");
    cy.get("#pinInput-2").type("5");
    cy.get("#pinInput-3").type("5");
    cy.get("#pinInput-4").type("5");
    cy.get("#pinInput-5").type("5");
    cy.wait(1000);

    cy.get("#editProfile")?.click();

    cy.get(":nth-child(1) > .chakra-radio__control").click();
    cy.get('button[type="submit"]').click();
    cy.get(":nth-child(7) > .chakra-radio__control").click();
    cy.get('button[type="submit"]').click();
    cy.get(":nth-child(4) > .chakra-radio__control").click();
    cy.get('button[type="submit"]').click();
    cy.get("#option-0").click();
    cy.get("#option-1").click();
    cy.get(":nth-child(1) > .chakra-radio__control").click();
    cy.get('button[type="submit"]').click();
    cy.get("#shortResponseInput").type("{selectAll} automated test answer");
    cy.get('button[type="submit"]').click();
    cy.get("#fullName").type("{selectAll} automated test user");
    cy.get("#email").type("{selectAll} automatedTestUser@fakeemail.com");
    cy.get("#bio").type("{selectAll} I am the automated test account");
    cy.get('button[type="submit"]').click();
    cy.get("#shortResponseInput").type("{selectAll} automated test answer");
    cy.get('button[type="submit"]').click();
    cy.get("#editProfile")?.click();
    cy.get("#logout")?.click();
  });
});
