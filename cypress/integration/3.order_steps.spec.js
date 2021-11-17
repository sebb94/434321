import Dietly from "../page_objects/Dietly"

describe('order steps', () => {
    it('order steps', () => {

        Dietly.visitPage('https://dietly.pl/catering-dietetyczny-firma/catering2be')
        Dietly.clickButtonByContains('.catering-offer__diet-title','JUNIOR')
        Dietly.typeIntoField('.amount-carousel input','3')
        Dietly.clickButtonByContains('.button-success','Zamów ten zestaw')
        Dietly.clickButtonByGetWithEq('.calendar__day:not(.calendar__day--past)',0)
        Dietly.clickButtonByContains('.button-blank','Wstecz')
        Dietly.visibleAssertionByContains('.box-step__title','Wybierz swoją dietę')
        Dietly.visibleAssertionByContains('.button-success','Następny krok')
        Dietly.clickButtonByContains('.button-success','Następny krok')
        Dietly.visibleAssertionByContains('.box-step__title','Szczegóły zamówienia')

    });

});
  