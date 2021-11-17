import Dietly from "../page_objects/Dietly"

describe('cookies test', () => {
    
    it('cookies test', () => {
        Dietly.visitPage('/')
        Dietly.visibleAssertionByGet('.cookieConsent')
        Dietly.clickButtonByGet('#rcc-confirm-button')
        Dietly.cookieCheck('.cookieConsent',100)
    });

});
