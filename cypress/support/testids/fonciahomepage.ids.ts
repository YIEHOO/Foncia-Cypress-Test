class FonciaHomepageIds {
    public headerblock = '.header';
    public searchblock = '.research-bar-tabs';
    public suggestionsblock = ".suggestion";
    public cookiesblock = '//app-foncia-cookie-banner[@class="ng-star-inserted"]';
    public footerblock = '.footer';
    public cookiesacceptbutton = '//button[@class="p-button p-button-secondary ng-star-inserted"]';

    public projectdroplist = '#projectToggle';
    public typedroplist = '#propertyToggle';
    public pricefield = '#price';
    public cityfield = '#city';
    public searchbutton = '(//button[@class="p-button p-button-help ng-star-inserted"])[1]';
    public projectoptionpurchase = '(//p-radiobutton[@name="project"])[1]';
    public projectoptionrental = '(//p-radiobutton[@name="project"])[2]';
    public projectoptionnewpurchase = '(//p-radiobutton[@name="project"])[3]';
    public typeoptionapartement = '(//p-checkbox[@name="type"])[1]';
    public typeoptionmainson = '(//p-checkbox[@name="type"])[2]';
    public typeoptionland = '(//p-checkbox[@name="type"])[3]';
    public typeoptionparkingspace = '(//p-checkbox[@name="type"])[4]';
    public citydroplist = '#pr_id_6_list > :nth-child(1)';
}
  
export const fonciaHomepageIds = new FonciaHomepageIds();