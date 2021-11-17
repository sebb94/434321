export default class Dietly {


    static intercept(method,url,alias){
        cy.intercept(method, url).as(alias)
    }

    static visitPage(value){
        cy.visit(value)
    }

    static responseStatusCheck(alias,status){
        cy.wait("@"+alias).its('response.statusCode').should('eq', status)

    }

    static typeIntoField(selector,value){
        cy.get(selector).clear().type(value)
    }

    static clickButtonByContains(selector, value){
        cy.contains(selector, value).click()
    }

    static clickButtonByGet(selector,){
        cy.get(selector).click()
    }

    static clickButtonByGetWithEq(selector,eq){
        cy.get(selector).eq(eq).click()
    }

    static urlValidation(value){
        cy.url().should('contain', value)
    }

    static visibleAssertionByContains(selector,value){
        cy.contains(selector,value).should('be.visible')
    }

    static visibleAssertionByGet(selector){
        cy.get(selector).should('be.visible')
    }

    static containAssertionByGet(selector,value){
        cy.get(selector).should('contain', value)

    }

    static checkIfButtonIsDisabled(selector,value){
        cy.contains(selector,value).should('be.disabled')

    }

    static notContainAssertionByGet(selector,value){
        cy.get(selector).should('not.contain',value)
    }

    static foundAndClickElementInParentItem(selectorToSearch,textToSearch,parentSelector,elementToClickText){
        cy.wait(1500).contains(selectorToSearch,textToSearch).parents(parentSelector).contains(elementToClickText).click()
    }

    static cookieCheck(selector,wait){
        cy.wait(wait).then(a =>{
            if(Cypress.$(selector).is(":visible")){
                expect(true).to.be.equal(false)
            }else{
                expect(true).to.be.equal(true)
            }
        })  
    }

    static matchImageSnapshot(selector){
        cy.get(selector).toMatchImageSnapshot()
    }

}