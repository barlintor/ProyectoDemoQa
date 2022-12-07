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

 describe("Testing the 'Check Box' button functionality", function () {
    //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Check Box" button throught the buttons
    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-1').click()

    })

    it('Select the "Check Box" button', function () {

        Utility.checkingUrl("/" + "checkbox")
        cy.get(General.headerPrincipal).contains('Check Box')
        cy.get('.rct-text').contains('Home')  
        cy.get('.rct-node-icon').should('have.css', 'color', 'rgb(51, 51, 204)')
        cy.get('.rct-icon-rct-icon-parent-open').should('not.exist')


    })

    it('Select the "Check Box" button and select  the unic option "Home"', function () {

        cy.get('#tree-node-home:checkbox').check({ force: true })
            .should('be.checked')

    })

    it('Verify that the submenus are checked', function () {

        cy.get('#tree-node-home:checkbox').check({ force: true })
            .should('be.checked')
        cy.get('.rct-collapse-btn').click()
        cy.get('#tree-node-desktop:checkbox').should('be.checked')
        cy.get('#tree-node-documents:checkbox').should('be.checked')
        cy.get('#tree-node-downloads:checkbox').should('be.checked')
        
    })


    it('Verify that the folder changes color when expanded', function () {

        cy.get('#tree-node-home:checkbox').check({ force: true })
            .should('be.checked')
        cy.get('.rct-collapse-btn').click()
        cy.get('.rct-icon-parent-open').should('be.visible').should('have.css', 'color', 'rgb(51, 51, 204)')
        cy.get('.rct-icon > rct-icon-parent-close').should('not.exist') //verify that the class does not exist.

    })

    it('Check that the folder changes color when collapsed', function () {

        cy.get('#tree-node-home:checkbox').check({ force: true })
            .should('be.checked')
        cy.get('.rct-collapse-btn').click()
        cy.get('.rct-icon-parent-open').should('be.visible')
        cy.get('.rct-icon-expand-open').click()
        cy.get('.rct-icon-parent-open').should('not.exist')

    })

})