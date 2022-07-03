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

    checkcookiespopup() {
        cy.get(googleHomepageIds.pagebody)
            .then($body => {
                if ($body.find(googleHomepageIds.cookiesacceptbutton).length) {
                    return googleHomepageIds.cookiesacceptbutton;
                }
                return googleHomepageIds.searchfield;
            })
            .then(selector => {
            cy.get(selector).click();
        });
    }

}

export const googleHomepage = new GoogleHomepagePage();