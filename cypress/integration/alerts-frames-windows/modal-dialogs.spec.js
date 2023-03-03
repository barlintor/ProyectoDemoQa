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
    cy.get('.category-cards').contains('Alerts, Frame & Windows').click({force:true})
    cy.get(General.headerPrincipal).contains('Alerts, Frame & Windows')
    cy.get('.element-list-collapse').should('not.exist')
}

describe("Testing the Alerts, Frames and Windows", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       cy.get('.menu-list').contains('Modal Dialogs').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "modal-dialogs")
    })

    it("Select 'Modal Dialogs' button", function () {

        cy.get(General.buttonsAlerts.fieldSmallModal).should('be.visible')
        cy.clickNewButton(General.buttonsAlerts.fieldSmallModal,'Small modal')
        cy.get(General.buttonsAlerts.fieldLargeModal).should('be.visible')  
        cy.clickNewButton(General.buttonsAlerts.fieldLargeModal,'Large modal') 
    })

    it.only("Click in 'Small modal' button", function () {

        cy.get(General.buttonsAlerts.fieldSmallModal).should('be.visible')
            .contains('Small modal')
            .click()

        cy.get(General.buttonsAlerts.fieldModalContent).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalHeader).should('be.visible')
            .contains('Small Modal')
        cy.get(General.buttonsAlerts.closeButton).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalBody).should('be.visible')
            .contains('This is a small modal. It has very less content')
        cy.get('#closeSmallModal').should('be.visible')
            .contains('Close')
            .click()
    })

    it("Click on the 'Small modal' button that we will close with the symbol", function () {

        cy.get(General.buttonsAlerts.fieldSmallModal).should('be.visible')
            .contains('Small modal')
            .click()

        cy.get(General.buttonsAlerts.fieldModalContent).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalHeader).should('be.visible')
            .contains('Small Modal')
        cy.get(General.buttonsAlerts.fieldModalBody).should('be.visible')
            .contains('This is a small modal. It has very less content')
        cy.get('#closeSmallModal').should('be.visible')
            .contains('Close')
        cy.get(General.buttonsAlerts.closeButton).should('be.visible')
            .click()
    })

    it("Click in 'Large modal' button", function () {

        cy.get(General.buttonsAlerts.fieldLargeModal).should('be.visible')
            .contains('Large modal')
            .click()

        cy.get(General.buttonsAlerts.fieldModalContent).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalHeader).should('be.visible')
            .contains('Large Modal')
        cy.get(General.buttonsAlerts.closeButton).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalBody).should('be.visible')
        cy.get('#closeLargeModal').should('be.visible')
            .contains('Close')
            .click()
    })

    it("Click on the 'Large modal' button that we will close with the symbol", function () {

        cy.get(General.buttonsAlerts.fieldLargeModal).should('be.visible')
            .contains('Large modal')
            .click()

        cy.get(General.buttonsAlerts.fieldModalContent).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalHeader).should('be.visible')
            .contains('Large Modal')
        cy.get(General.buttonsAlerts.closeButton).should('be.visible')
        cy.get(General.buttonsAlerts.fieldModalBody).should('be.visible')
        cy.get('#closeLargeModal').should('be.visible')
            .contains('Close')
        cy.get(General.buttonsAlerts.closeButton).should('be.visible')
            .click()
    })
    
    
})