export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV').toString(); //Get the value of evnironment variable i.e ENV
        if (envi == 'production' || envi == '') //Check the value
            return "https://www.google.com"; //return desired url
        else if (envi == 'staging')
            return "https://www.google.fr";
        else if (envi == 'preprod')
            return "http://www.google.it";
    }
}