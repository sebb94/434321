import Dietly from "../page_objects/Dietly"

describe('edit cart', () => {
    
    it('edit cart', () => {

        Dietly.visitPage('https://dietly.pl/catering-dietetyczny-firma/catering2be')
        Dietly.clickButtonByContains('.catering-offer__diet-title','JUNIOR')
        Dietly.typeIntoField('.amount-carousel input','3')
        Dietly.clickButtonByContains('.button-success','Zamów ten zestaw')
        Dietly.clickButtonByGetWithEq('.calendar__day:not(.calendar__day--past)',0)
        Dietly.clickButtonByContains('.button-success','Dodaj do koszyka')
        Dietly.visibleAssertionByContains('.button-success','Przejdź do podsumowania')
        Dietly.visibleAssertionByContains('.box-step__title','Zamówienie')
        Dietly.foundAndClickElementInParentItem('.box-step p','-JUNIOR-','.shopping-cart-item','Zmień dietę')
        Dietly.clickButtonByContains('.diet-card__name','-MAMA-')
        Dietly.clickButtonByContains('.diet-card__name','5 POSIŁKÓW')
        Dietly.clickButtonByContains('.steps-page__item','2300')
        Dietly.clickButtonByContains('.button-success','Następny krok')
        Dietly.clickButtonByContains('.button-success','Zapisz zmiany')
        Dietly.visibleAssertionByContains('.button-success','Przejdź do podsumowania')
        Dietly.visibleAssertionByContains('.box-step__title','Zamówienie')
        Dietly.visibleAssertionByContains('.box-step p','-MAMA-')
        Dietly.notContainAssertionByGet('.box-step p','-JUNIOR-')

    });


});