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
    cy.get('.category-cards').contains('Widgets').click({force:true})
    cy.get(General.headerPrincipal).contains('Widgets')
    cy.get('.element-list-collapse').should('not.exist')
}

describe("Testing the accordian widgets", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       Utility.checkingUrl("/" + "widgets")
       cy.get('.menu-list').contains('Tabs').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "tabs")
    })

    it("Select 'Tabs' button", function () {
        cy.get(General.headerPrincipal).contains('Tabs')
        cy.get(General.buttonsWidgets.tabWhat).should('be.visible')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('be.visible')
        cy.get(General.buttonsWidgets.tabOrigin).should('be.visible')
        cy.get(General.buttonsWidgets.tabUse).should('be.visible')

    })

    it("Click in the second tab 'Origin'", function () {
        
        cy.get(General.buttonsWidgets.tabWhat).should('be.visible')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('be.visible')
            //.and('have.class', '.\\sfade tab-pane active show')
            .and('have.attr', 'aria-hidden', 'false')

        cy.get(General.buttonsWidgets.tabOrigin).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.tabOriginInformation).should('be.visible')
            .and('have.attr', 'aria-hidden', 'false')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('not.be.visible')
            .and('have.attr', 'aria-hidden', 'true')

    })

    it.only("Click in the thrid tab 'Use'", function () {
        
        cy.get(General.buttonsWidgets.tabWhat).should('be.visible')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('be.visible')
            //.and('have.class', '.\\sfade tab-pane active show')
            .and('have.attr', 'aria-hidden', 'false')

        cy.get(General.buttonsWidgets.tabUse).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.tabUseInformation).should('be.visible')
            .and('have.attr', 'aria-hidden', 'false')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('not.be.visible')
            .and('have.attr', 'aria-hidden', 'true')
        cy.get(General.buttonsWidgets.tabOriginInformation).should('not.be.visible')
            .and('have.attr', 'aria-hidden', 'true')

    })

    it.only("Click in the four tab 'More'", function () {
        
        cy.get(General.buttonsWidgets.tabWhat).should('be.visible')
        cy.get(General.buttonsWidgets.tabWhatInformation).should('be.visible')
            //.and('have.class', '.\\sfade tab-pane active show')
            .and('have.attr', 'aria-hidden', 'false')

        cy.get('#demo-tab-more').should('be.visible')
            .click({force: true})
        cy.get(General.buttonsWidgets.tabWhatInformation).should('be.visible')       //Nothing changes in this case
            .and('have.attr', 'aria-hidden', 'false')
    })

})