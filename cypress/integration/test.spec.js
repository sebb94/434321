// describe('Test', () => {

//     it('test', () => {
//         cy.intercept('GET', '**/top-search**').as('search')
//         cy.visit('/')
//         cy.get('#search-component-input').clear().type('Dietific')
//         cy.wait('@search').its('response.statusCode').should('eq', 200)
//         cy.contains('#search-component-menu p', 'Dietific').click()
//         cy.url().should('contain', '/catering-dietetyczny-firma/dietific')
//         cy.get('h1').should('contain', 'Dietific catering')
//     });

  
//     it('add to cart', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('3')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('.button-success','Dodaj do koszyka').click()
//         cy.contains('.button-success','Przejdź do podsumowania').should('be.visible')
//         cy.contains('.box-step__title','Zamówienie').should('be.visible')

//     });

//     it('remove from cart', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('3')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('.button-success','Dodaj do koszyka').click()
//         cy.contains('.button-success','Przejdź do podsumowania').should('be.visible')
//         cy.contains('.box-step__title','Zamówienie').should('be.visible')
//         cy.contains('.box-step p','-JUNIOR-').parents('.shopping-cart-item').contains('Usuń dietę').click()
//         cy.contains('.custom-modal-another-catering__buttons > .button-primary', 'Usuń dietę').click()
//         cy.contains('.steps-page-basket__empty-basket-text','Wygląda na to, że nie masz żadnej diety w koszyku').should('be.visible')

//     });


//     it('order steps', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('3')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('Wstecz').click()
//         cy.contains('.box-step__title','Wybierz swoją dietę').should('be.visible')
//         cy.contains('.button-success','Następny krok').should('be.visible')
//         cy.contains('.button-success','Następny krok').click()
//         cy.contains('.box-step__title','Szczegóły zamówienia').should('be.visible')

//     });

//     it('edit cart', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('3')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('.button-success','Dodaj do koszyka').click()
//         cy.contains('.button-success','Przejdź do podsumowania').should('be.visible')
//         cy.contains('.box-step__title','Zamówienie').should('be.visible')
//         cy.contains('.box-step p','-JUNIOR-').parents('.shopping-cart-item').contains('Zmień dietę').click()
//         cy.contains('.diet-card__name','-MAMA-').click()
//         cy.contains('.diet-card__name','5 POSIŁKÓW').click()
//         cy.contains('.steps-page__item','2300').click()
//         cy.contains('.button-success','Następny krok').click()
//         cy.contains('.button-success','Zapisz zmiany').click()
//         cy.contains('.box-step p','-MAMA-').should('be.visible')
//         cy.get('.box-step p').should('not.contain','-JUNIOR-')
//     });


//     it('minimalny okres zamówienia 3 dni (junior)', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('2')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('.button-success','Dodaj do koszyka').should('be.disabled')
//         cy.contains('.caution-message','Minimalny okres zamówienia to 3 dni.').should('be.visible')
       
//     });


//     it('cookies test', () => {
//         cy.visit('https://dietly.pl/')
//         cy.get('.cookieConsent').should('be.visible')
//         cy.get('#rcc-confirm-button').click()

//         cy.wait(100).then(a =>{
//             if(Cypress.$('.cookieConsent').is(":visible")){
//                 expect(true).to.be.equal(false)
//             }else{
//                 expect(true).to.be.equal(true)
//             }
//         })  
//     });

//     it('visual regression', () => {
//         cy.visit('https://dietly.pl/catering-dietetyczny-firma/catering2be')
//         cy.contains('.catering-offer__diet-title','JUNIOR').click()
//         cy.get('.amount-carousel input').clear().type('3')
//         cy.contains('.button-success','Zamów ten zestaw').click()
//         cy.get('.calendar__day:not(.calendar__day--past)').eq(0).click()
//         cy.contains('.button-success','Dodaj do koszyka').click()
//         cy.contains('.button-success','Przejdź do podsumowania').should('be.visible')
//         cy.contains('.box-step__title','Zamówienie').should('be.visible')
//         cy.get('body').toMatchImageSnapshot()
//     });

// });