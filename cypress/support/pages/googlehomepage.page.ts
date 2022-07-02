import { googleHomepageIds } from "../testids/googlehomepage.ids";

class GoogleHomepagePage {
    
    get searchbar() {
        return cy.get(googleHomepageIds.searchfield);
    }

    get searchbutton() {
        return cy.xpath(googleHomepageIds.searchbutton);
    }

    enterKeyword(keyword:string) {
        cy.get(googleHomepageIds.searchfield).type(keyword);
    } 

}

export const googleHomepage = new GoogleHomepagePage();