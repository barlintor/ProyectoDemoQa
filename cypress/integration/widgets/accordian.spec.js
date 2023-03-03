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
       cy.get('.menu-list').contains('Accordian').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "accordian")
    })

    it("Select 'Accordian' button", function () {

        cy.get(General.buttonsWidgets.fieldSectionHeading).should('be.visible')
        cy.get(General.buttonsWidgets.fieldSectionContent)
            .should('have.class', 'card-body')
            .and('be.visible')

        cy.get(General.buttonsWidgets.field2SectionHeading).should('be.visible')
        cy.get(General.buttonsWidgets.field2SectionContent)
            .should('have.class', 'card-body')
            .and('not.be.visible')
            
        cy.get(General.buttonsWidgets.field3SectionHeading).should('be.visible')
        cy.get(General.buttonsWidgets.field3SectionContent)
                .should('have.class', 'card-body')
                .and('not.be.visible')

    })
    it("Click the first text collapsed", function () {

        cy.get(General.buttonsWidgets.fieldSectionHeading).should('be.visible')
            .contains('What is Lorem Ipsum?')
            .click()
        cy.get(General.buttonsWidgets.fieldSectionContent)
            .should('have.class', 'card-body')
            .and('not.be.visible')
        
    })
    it("Click the second text collapsed", function () {

        cy.get(General.buttonsWidgets.field2SectionHeading).should('be.visible')
            .contains('Where does it come from?')
            .click()
        cy.get(General.buttonsWidgets.field2SectionContent)
            .should('have.class', 'card-body')
            .and('be.visible')
        cy.get(General.buttonsWidgets.fieldSectionContent)
            .should('have.class', 'card-body')
            .and('not.be.visible')
        
    })

    it("Click the third text collapsed", function () {

        cy.get(General.buttonsWidgets.field3SectionHeading).should('be.visible')
            .contains('Why do we use it?')
            .click()
        cy.get(General.buttonsWidgets.field3SectionContent)
            .should('have.class', 'card-body')
            .and('be.visible')
        cy.get(General.buttonsWidgets.fieldSectionContent)
            .should('have.class', 'card-body')
            .and('not.be.visible')
        
    })
    
})