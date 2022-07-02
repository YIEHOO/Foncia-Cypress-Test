Feature: As a user I want to access Foncia from Google and search for an appartement
  Scenario: visting Google homepage
    When I visit "https://google.com"
    Then I should see a search bar and a search button

  Scenario: searching for Foncia
    When I search for "Foncia"
    Then I should see the results of my seached keyword with "fr.foncia.com" at the top of the list

  Scenario: access Foncia homepage
    When I click on the first Google link
    Then I should see the header the search block the promotional block the cookies banner and the footer

  Scenario: search for a property
    When I pick "rental" property type "Apartement" max price "1500" city "Paris" and click on the button search
    Then I should see the results of properties related to my searched criterias