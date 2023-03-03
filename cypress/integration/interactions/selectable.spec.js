/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 * @link npx cypress run --spec "cypress/integration/widgets/tool-tips.spec.js"
 * //link npx cypress run --spec "cypress/integration/widgets/tool-tips.spec.js"
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */

import { General } from "../../page-object/viewtab.po";
import * as Utility from "../../page-object/utility.po";
import  * as Drag  from "../../page-object/draganddrop.po";

const { waitForDebugger } = require("inspector");
const { get } = require("lodash");

//const dataTransfer = new dataTransfer();


const verifyingMenuList = () =>{ 
    cy.get('.category-cards').contains('Interactions').click({force:true})
    cy.get(General.headerPrincipal).contains('Interactions')
    cy.get('.element-list-collapse').should('not.exist')
}

describe("Testing the accordian widgets", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       Utility.checkingUrl("/" + "interaction")
       cy.get('.menu-list').contains('Selectable').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "selectable")
    })

    it("Select 'Selectable' button", function () {
        
        cy.get('#demo-tab-list').should('be.visible')
        cy.get('#verticalListContainer').should('be.visible')
        cy.get('#verticalListContainer').within( ()=> {
            cy.contains('Cras justo odio').should('be.visible');
            cy.contains('Dapibus ac facilisis in').should('be.visible');
            cy.contains('Morbi leo risus').should('be.visible');
            cy.contains('Porta ac consectetur ac').should('be.visible');
            
        });
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid')
    })

    it("Select the first field", function () {
        
        cy.get('#demo-tab-list').should('be.visible')
        
        cy.get('#verticalListContainer').contains('Cras justo odio').should('be.visible').click()
            .should('have.css', 'background-color', 'rgb(0, 123, 255)')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            
    })

    it("Select the second and last fields", function () {
        
        cy.get('#demo-tab-list').should('be.visible')
        
        cy.get('#verticalListContainer').contains('Dapibus ac facilisis in').should('be.visible').click()
            .should('have.css', 'background-color', 'rgb(0, 123, 255)')
            .should('have.css', 'color', 'rgb(255, 255, 255)')

        cy.get('#verticalListContainer').contains('Porta ac consectetur ac').should('be.visible').click()
            .should('have.css', 'background-color', 'rgb(0, 123, 255)')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            
    })

    it("We select and deselect the third field", function () {
        
        cy.get('#demo-tab-list').should('be.visible')
        
        cy.get('#verticalListContainer').contains('Cras justo odio').should('be.visible').click()
            .click()                                         //Not passing anything
            .click()
         
    })

    it("Select the second  section 'Grid'", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        cy.get('#listContainer').should('be.visible')
        cy.get('#listContainer').within( ()=> {
            cy.contains('One').should('be.visible');
            cy.contains('Two').should('be.visible');
            cy.contains('Three').should('be.visible');
            cy.contains('Four').should('be.visible');
            cy.contains('Five').should('be.visible');
            cy.contains('Six').should('be.visible');
            cy.contains('Seven').should('be.visible');
            cy.contains('Eight').should('be.visible');
            cy.contains('Nine').should('be.visible');
            
        });
                
    })

    it("Select the first box", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        
        cy.get('#listContainer').contains('One').should('be.visible').click()
        .should('have.css', 'background-color', 'rgb(0, 123, 255)')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
                
    })

    it("Select the second and last box", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        
        cy.get('#listContainer').contains('Two').should('be.visible').click()
        .should('have.css', 'background-color', 'rgb(0, 123, 255)')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('#listContainer').contains('Nine').should('be.visible').click()
        .should('have.css', 'background-color', 'rgb(0, 123, 255)')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
                
    })

    it("Select all boxes", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        cy.get('#listContainer').should('be.visible')
        cy.get('#listContainer').within( ()=> {
            cy.contains('One').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Two').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Three').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Four').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Five').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Six').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Seven').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Eight').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
            cy.contains('Nine').should('be.visible').click()
                .should('have.css', 'background-color', 'rgb(0, 123, 255)')
                .should('have.css', 'color', 'rgb(255, 255, 255)')
        });
                
    })

    it("We select and deselect the third box", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        
        cy.get('#listContainer').contains('Three').should('be.visible').click()
            .should('have.css', 'background-color', 'rgb(0, 123, 255)')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('#listContainer').contains('Three').should('be.visible').click()
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(73, 80, 87)')
            
    })

    it.only("Select multiple times the second box", function () {
        
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid').click()
        
        cy.get('#listContainer').contains('Three').should('be.visible').click()
            .click()                                         //Not passing anything
            .click()
            
    })

})