import Dietly from "../page_objects/Dietly"

describe('minimal order days', () => {
    
    it('minimal order days', () => {

        Dietly.visitPage('https://dietly.pl/catering-dietetyczny-firma/catering2be')
        Dietly.clickButtonByContains('.catering-offer__diet-title','JUNIOR')
        Dietly.typeIntoField('.amount-carousel input','2')
        Dietly.clickButtonByContains('.button-success','Zamów ten zestaw')
        Dietly.clickButtonByGetWithEq('.calendar__day:not(.calendar__day--past)', 0)
        Dietly.checkIfButtonIsDisabled('.button-success','Dodaj do koszyka')
        Dietly.visibleAssertionByContains('.caution-message','Minimalny okres zamówienia to 3 dni.')

        
    });

});