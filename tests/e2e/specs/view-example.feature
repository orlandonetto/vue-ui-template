Feature: View example in home page

  I want to view a exemple text in a home page

  Background: Opening the home page
    Given I access the home page

  Scenario: View sample text
    Then I see the example message in the title

  Scenario: Add count value
    When I click in the button for add value in count
    Then the value must be added