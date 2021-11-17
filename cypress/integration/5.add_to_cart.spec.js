import Dietly from "../page_objects/Dietly"

describe('add to cart', () => {
    
    it('add to cart', () => {

        Dietly.visitPage('https://dietly.pl/catering-dietetyczny-firma/catering2be')
        Dietly.clickButtonByContains('.catering-offer__diet-title','JUNIOR')
        Dietly.typeIntoField('.amount-carousel input','3')
        Dietly.clickButtonByContains('.button-success','Zamów ten zestaw')
        Dietly.clickButtonByGetWithEq('.calendar__day:not(.calendar__day--past)',0)
        Dietly.clickButtonByContains('.button-success','Dodaj do koszyka')
        Dietly.visibleAssertionByContains('.button-success','Przejdź do podsumowania')
        Dietly.visibleAssertionByContains('.box-step__title','Zamówienie')
    
    });

});