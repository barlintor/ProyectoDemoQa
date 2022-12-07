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

 describe("Testing the buttons with dynamic properties", function () {
 
    //Let's go to the "https://demoqa.com/" page and check the functionality of the "Dynamic Properties" button and verify the diferents properties the buttons

    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-8').click()

    })

    it("Select the 'Dynamic Properties'  button", function () {

        Utility.checkingUrl("/" + "dynamic-properties")
        cy.get(General.headerPrincipal).contains('Dynamic Properties')
        cy.get('#enableAfter').should('be.visible')
        cy.get('#colorChange').should('be.visible')
            .and('have.css', 'color', 'rgb(255, 255, 255)')


    })

    it("Verify that after 5 second change the 'Color Change' button text color", function () {

        cy.wait(5000)
        cy.get('#colorChange').should('be.visible')
            .and('have.css', 'color', 'rgb(220, 53, 69)')
    })

    it("Verify that after  5 second must be show the 'Visible After 5 Seconds' button", function () {

        cy.wait(5000)
        cy.get('#visibleAfter').should('be.visible')
    })

    it("Verify that before  5 second  in the 'Will enable 5 seconds' button  can't clicked", function () {
        cy.get('#enableAfter').should('be.visible').click({force: true})
    })

    it("Verify that after  5 second in the 'Will enable 5 seconds' button  we can clicked", function () {
        cy.wait(5000)
        cy.get('#enableAfter').should('be.visible').click({force: true})
    })

})