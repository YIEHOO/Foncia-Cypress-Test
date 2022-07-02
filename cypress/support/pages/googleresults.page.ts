import { googleResultsIds } from "../testids/googleresults.ids";

class GoogleResultsPage {

    get firstelement(){
        return cy.xpath(googleResultsIds.linkresults).first();
    }

    clickfirstlink(){
        cy.xpath(googleResultsIds.linkresults).first().click();
    }
}

export const googleResults = new GoogleResultsPage();