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

 describe("Testing the differents Links and the API call", function () {
    //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the clicked in the links and testing the api call

    //In this moment not is possible probe the links and the API Call.

    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-5').click() 
    })

    it('Select the "Links"  button', function () {

        Utility.checkingUrl("/" + "links")

        cy.get('#linkWrapper').should('be.visible').contains('Following links will open new tab')
        cy.get('#simpleLink').should('be.visible').contains('Home')
        cy.get('#linkWrapper').should('be.visible').contains('Following links will send an api call')


    })

    it('Click in "Home" Text and verify will open in a new tab', function () {

        cy.get('#simpleLink').click()

    })


})