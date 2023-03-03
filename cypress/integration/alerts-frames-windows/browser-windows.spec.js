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
        
   })

    it("Enter in DemoQa main page", function () {
        verifyingMenuList()
        Utility.checkingUrl("/" + "alertsWindows")
    })

    it("Select 'Browser Windows' button", function () {

        cy.get('.menu-list').contains('Browser Windows').click({force:true}) 
        cy.get(General.headerPrincipal).contains('Browser Windows')
        Utility.checkingUrl("/" + "browser-windows")

        cy.get('#tabButton').contains('New Tab')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')

        cy.get('#windowButton').contains('New Window')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
        
        cy.get('#messageWindowButton').contains('New Window Message')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it.only("Click in 'New Tab' button", function () {

        cy.get('.menu-list').contains('Browser Windows').click({force:true})  
        /*cy.get('#tabButton').contains('New Tab')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .click()
        cy.url().should('https://demoqa.com/sample') */
        
        /*cy.get('#tabButton')
            .invoke("remove attr" , "target")
            .click()    es la manera mas facil */ 

    })

    it("Click in 'New Window' button", function () {

        cy.get('.menu-list').contains('Browser Windows').click({force:true}) 
        cy.get('#windowButton').contains('New Window')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .click()
           //Investing on open the new  page
    })

    it("Click in 'New Window Message' button", function () {

        cy.get('.menu-list').contains('Browser Windows').click({force:true}) 
        cy.get('#messageWindowButton').contains('New Window Message')
            .should('be.visible')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .click()
           //Investing on open the new message when open a new page
    })
})