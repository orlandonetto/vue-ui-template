import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I access the home page", () => {
  cy.visit("/");
});

When("I see the example message in the title", () => {
  cy.contains("h3", "Vue.js");
});
