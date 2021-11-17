import Dietly from "../page_objects/Dietly"

describe('Test', () => {

    it('search', () => {
        Dietly.intercept('GET','**/top-search**','search')
        Dietly.visitPage('/')
        Dietly.typeIntoField('#search-component-input','Dietific')
        Dietly.responseStatusCheck('search',200)
        Dietly.clickButtonByContains('#search-component-menu p','Dietific')
        Dietly.urlValidation('/catering-dietetyczny-firma/dietific')
        Dietly.containAssertionByGet('h1','Dietific catering')
    });

  

});