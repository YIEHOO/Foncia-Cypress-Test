import { fonciaHomepageIds } from "../testids/fonciahomepage.ids";

class FonciaHomepagePage {
    
    get header() {
        return cy.get(fonciaHomepageIds.headerblock);
    }

    get search() {
        return cy.get(fonciaHomepageIds.searchblock);
    }

    get suggestions() {
        return cy.get(fonciaHomepageIds.suggestionsblock);
    }

    get footer() {
        return cy.get(fonciaHomepageIds.footerblock);
    }

    get cookiesbanner() {
        return cy.xpath(fonciaHomepageIds.cookiesblock);
    }

    clickacceptcookiesbutton() {
        cy.xpath(fonciaHomepageIds.cookiesacceptbutton).click();
    }

    clickprojectbutton() {
        cy.get(fonciaHomepageIds.projectdroplist).click();
    }

    clicktypebutton() {
        cy.get(fonciaHomepageIds.typedroplist).click();
    }

    // Based on the project type we will select one element
    pickproject(project : string) {
        if (project=='Louer') {
            cy.xpath(fonciaHomepageIds.projectoptionrental).click();
        } else if (project=='Acheter') {
            {
                cy.xpath(fonciaHomepageIds.projectoptionpurchase).click();
            }
        } else {
            cy.xpath(fonciaHomepageIds.projectoptionnewpurchase).click();
        }
    }

    // Based on the type of property we will select one element
    picktype(type : string) {
        if (type=='Appartement') {
            cy.xpath(fonciaHomepageIds.typeoptionapartement).click();
        }
        if (type=='Maison') {
            cy.xpath(fonciaHomepageIds.typeoptionmainson).click();
        }
        if (type=='Terrain') {
            cy.xpath(fonciaHomepageIds.typeoptionland).click();
        }
        if (type=='Stationnement') {
            cy.xpath(fonciaHomepageIds.typeoptionparkingspace).click();
        }
    }

    enterprice(price : string) {
        cy.get(fonciaHomepageIds.pricefield).type(price);
    }

    entercity(city : string) {
        cy.get(fonciaHomepageIds.cityfield).type(city);
        cy.get(fonciaHomepageIds.citydroplist).click();
    }

    clicksearchbutton() {
        cy.xpath(fonciaHomepageIds.searchbutton).click();
    }
    
}

export const fonciaHomepage = new FonciaHomepagePage();