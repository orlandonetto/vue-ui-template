import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const { get } = cy;

Given("I access the home page", () => {
  cy.visit("/");
});

Then("I see the example message in the title", () => {
  cy.contains("h3", "Vue.js");
});

When("I click in the button for add value in count", () => {
  get("[data-test-count-value]").invoke("text").as("countValue");
  get("[data-test-count-btn]").click();
});
Then("the value must be added", () => {
  get("@countValue").then(($count) => {
    const newCountValue = Number($count) + 1;

    get("[data-test-count-value]")
      .invoke("text")
      .should("equal", String(newCountValue));
  });
});
