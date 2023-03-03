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
       cy.get('.menu-list').contains('Menu').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "menu")
    })

    it("Select 'Menu' button", function () {

        cy.get(General.headerPrincipal).contains('Menu')
        cy.get(General.buttonsWidgets.showMenu)
            .find('li')
            .children()
            .contains('Main Item 1')
        cy.get(General.buttonsWidgets.showMenu)
            .find('li')
            .children()
            .contains('Main Item 2')
        cy.get(General.buttonsWidgets.showMenu)
            .find('li')
            .children()
            .contains('Main Item 3')

    })

    it("Click in 'Main Item 1'", function () {

        cy.get(General.buttonsWidgets.showMenu)
            .find('li')
            .children()
            .contains('Main Item 1')
            .trigger('mouseover')
            .click()

    })

    it.only("Click in 'Main Item 2'", function () {

        cy.get(General.buttonsWidgets.showMenu)
            .find('li')
            .children()
            .contains('Main Item 2')
            .trigger('mouseenter')
            .invoke("show")
            .click()
        cy.get(General.buttonsWidgets.showMenu)
            .find('a')
            .contains('Sub Item')                   //HELP Jesus
            .invoke("show")
       


    })

   
   
})