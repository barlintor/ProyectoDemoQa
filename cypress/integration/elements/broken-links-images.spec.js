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

 describe("Verify Valid/Invalid Image and links", function () {
    //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-6').click() 

    })

    it("Select the 'Broken Links - Images'", function () {

        Utility.checkingUrl("/" + "broken")
        
        cy.get(General.headerPrincipal).contains('Broken Links - Images')
        cy.get('p').contains('Valid image').should('be.visible')
        cy.get('p').contains('Broken image').should('be.visible')
        cy.get('p').contains('Valid Link').should('be.visible')
        cy.get('p').contains('Broken Link').should('be.visible')
    })

    it("Verify  the image is valid", function () {

        cy.get('p').contains('Valid image').should('be.visible')
        cy.get('[src="/images/Toolsqa.jpg"]').should('have.attr', 'src', '/images/Toolsqa.jpg')
    })

    it("Verify  the image is broken", function () {

        cy.get('p').contains('Broken image').should('be.visible')
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('have.attr', 'src', '/images/Toolsqa_1.jpg')//Pendiente de revision
    })

    it("Click in 'Click Here for Valid Link' Text and verify the page change ", function () {

        cy.get('p').contains('Valid Link').should('be.visible')
        cy.get('[href="http://demoqa.com"]').should('be.visible').click() //No deja ir a la otra pagina.
    })

    it("Click in 'Click Here for Broken Link' Text and verify the change page its  broken", function () {

        cy.get('p').contains('Broken Link').should('be.visible')
        cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').should('be.visible').click() //No deja ir a la otra pagina.
    })
})