/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 * @link npx cypress run--spec "cypress/integration/elements.spec.js"
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */

 import { General } from "../../page-object/viewtab.po";
 import * as Utility from "../../page-object/utility.po";

 const { waitForDebugger } = require("inspector");
 const { get } = require("lodash");

 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Elements').click({force:true})
     cy.get(General.headerPrincipal).contains('Elements')
     cy.get('.element-list-collapse').should('not.exist')
 }

 describe("Testing the functionability the diferents buttons", function () {
    //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Buttons" button by clicking on the different buttons

    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-4').click() 
    })

    it('Select the "Buttons" button', function () {
        
        Utility.checkingUrl("/" + "buttons")
        
        cy.get(General.headerPrincipal).contains('Buttons')
        cy.get(General.buttonsElements.dobleClickButton).should('be.visible')
        cy.get(General.buttonsElements.rightClickButton).should('be.visible')
        cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').should('be.visible') //Problemas por confundir con el primero

    })

    it('Click "Double Click Me" Button  only one time', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons') //skrt
        cy.get(General.buttonsElements.dobleClickButton).click()
        cy.get('#doubleClickMessage').should('not.exist')
    })

    it('Click "Double Click Me" Button  two times', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons') //skrt
        cy.get(General.headerPrincipal).contains('Buttons')
        cy.get(General.buttonsElements.dobleClickButton).dblclick()
        cy.get('#doubleClickMessage').contains('You have done a double click')
            .should('be.visible')

    })

    it('Click "Right Click Me" Button  only one time', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons')
        cy.get(General.buttonsElements.rightClickButton).click()
        cy.get('#rightClickMessage').should('not.exist')

    })

    it('Click "Right Click Me" Button  two time', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons')
        cy.get(General.buttonsElements.rightClickButton).dblclick()
        cy.get('#rightClickMessage').should('not.exist')

    })

    it('Click the "Right Click Me" button with the right click', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons')
        cy.get(General.buttonsElements.rightClickButton).rightclick()
        cy.get('#rightClickMessage').contains('You have done a right click')
            .should('be.visible')

    })

    it('Click the "Click Me" button with the right click', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons')
        cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').rightclick()
        cy.get('#dynamicClickMessage').should('not.exist')      //the diference in "not.exist" and "not.be.visible" how his name says the first is used when the element not exist in page in this moment what he  called, and the second yes exist but not is visible in the moment

    })

    it('Click "Click Me" Button  ', function () {

        cy.url().should('eq', 'https://demoqa.com/buttons')
        cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').click() //Verify this
        cy.get('#dynamicClickMessage').contains('You have done a dynamic click')
            .should('be.visible')

    })

})