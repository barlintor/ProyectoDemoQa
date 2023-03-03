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
       cy.get('.menu-list').contains('Frames').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "frames")
    })

    it("Select 'Frames' button", function () {

        cy.get('#frame1').should('be.visible')
        cy.get('#frame2Wrapper').should('be.visible')   
         
    })

    it("Verify that must be show the upper frames", function () {

        cy.get('#frame1').its('0.contentDocument.body').contains('This is a sample page')
            
    })

    it("Verify that must be show the lower frames ", function () {//PR

        cy.get('#frame2').its('0.contentDocument.body').contains('This is a sample page')
            
    })  

    it("Move the vertical scroll in the lower frames", function () {//PR

        cy.get('#frame2').scrollTo('0%', '100%', { ensureScrollable: false })
            
    })

    it.only("Move the horizontal scroll in the lower frames", function () {//PR

        cy.get('#frame2').scrollTo('0%', '100%',{ ensureScrollable: false })
            
    }) 
    
})