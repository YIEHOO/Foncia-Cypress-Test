import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Utility } from "../support/utility";
import { googleHomepage } from "../support/pages/googlehomepage.page";
import { googleResults } from "../support/pages/googleresults.page";
import { fonciaHomepage } from "../support/pages/fonciahomepage.page";
import { fonciaresults } from "../support/pages/fonciaresults.page";

const testData = require("../fixtures/data.json");

const url = new Utility().getBaseUrl();

// This will loop thru the list of data provided to test diffrent data sets
testData.forEach((testDataRow: any) => {
  const data = {
    project: testDataRow.Project,
    type: testDataRow.Type,
    price: testDataRow.Price,
    city: testDataRow.City
  };

  When("I visit {string}", () => {
    if (url !== undefined) {
      cy.visit(url);
    }
  });

  Then("I should see a search bar and a search button", () => {
    googleHomepage.searchbar
      .should('be.visible')
      .should('have.class','gLFyf gsfi');
    googleHomepage.searchbutton
      .should('be.visible')
      .should('have.value','Recherche Google');
  });

  When("I search for {string}", (keyword) => {
    googleHomepage.enterKeyword(keyword+"{ENTER}");
  });

  Then("I should see the results of my seached keyword with {string} at the top of the list", (link) => {
    googleResults.firstelement
      .should("contain", link);
  });

  When("I click on the first Google link", () => {
    googleResults.clickfirstlink();
  });

  Then("I should see the header the search block the promotional block the cookies banner and the footer", () => {
    fonciaHomepage.header
      .should('be.visible');
    fonciaHomepage.search
      .should('be.visible');
    fonciaHomepage.suggestions
      .should('be.visible');
    fonciaHomepage.cookiesbanner
      .should('be.visible');
    fonciaHomepage.footer
      .should('be.visible');
  });

  When(`I pick {string} property type {string} max price {string} city {string} and click on the button search`, () => {
    fonciaHomepage.clickacceptcookiesbutton();
    fonciaHomepage.clickprojectbutton();
    fonciaHomepage.pickproject(`${data.project}`);
    fonciaHomepage.clicktypebutton();
    fonciaHomepage.picktype(`${data.type}`);
    fonciaHomepage.enterprice(`${data.price}`);
    fonciaHomepage.entercity(`${data.city}`);
    fonciaHomepage.clicksearchbutton();
  });

  Then("I should see the results of properties related to my searched criterias", () => {
    fonciaresults.filter
      .should('be.visible');
    fonciaresults.checkprices(`${data.price}`);
    fonciaresults.checkcities(`${data.city}`);
  });
});