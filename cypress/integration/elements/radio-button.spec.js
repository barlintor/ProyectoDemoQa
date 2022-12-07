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

 describe("Testing the 'Radio Box' button functionality", function () {
    //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Radio Box" button throught the selection the buttons


    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-2').click()

    })

    it('Select the "Radio Button" ', function () {

       Utility.checkingUrl("/" + "radio-button")
        cy.get(General.headerPrincipal).contains('Radio Button')

        cy.get('input[type="radio"]')
            .should('have.length', 3)   //verify that this field contain three elements

        cy.get('.custom-control-label').contains('Yes').should('be.visible')
        cy.get('.custom-control-label').contains('Impressive').should('be.visible')
        cy.get('.custom-control.disabled').contains('No').should('be.visible')

    })

    it('Select the "Radio Button" and select  the option "Yes" ', function () {

        cy.get('#yesRadio').click({force: true}) //It does not allow clicked if i don't execute the force:true
        cy.get('.mt-3').contains('You have selected Yes').should('be.visible')
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')

    })

    it('Select the "Radio Button" and select  the option "Impressive" ', function () {

        cy.get('#impressiveRadio').click({force: true})
        cy.get('.mt-3').contains('You have selected Impressive').should('be.visible')
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')

    })

    it('Select the "Radio Button" and select  the option "No"', function () {

        cy.get('.custom-control.disabled').contains('No').click()
            .should('have.class', 'disabled')
            .and('be.visible')

    })
})