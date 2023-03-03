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

describe("Testing the autocomplete widgets", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       Utility.checkingUrl("/" + "widgets")
       cy.get('.menu-list').contains('Auto Complete').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "auto-complete")
    })

    it("Select 'Auto Complete' button", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
        cy.get(General.buttonsWidgets.autocompleteSingle).should('be.visible')
    })

    it("Select 'Auto Complete' button", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .contains('Type multiple color names')
        cy.get(General.buttonsWidgets.autocompleteSingle).should('be.visible')
            .contains('Type single color name')
    })

    it("Fill the first field with the letter 'a' where select the first option", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
            
        cy.get(General.buttonsWidgets.letterBinFirstOption).each(function($ele, index, $list){

            if($ele.text().includes('Black')){
                cy.wrap($ele).click()
            }
            else{
                cy.log($ele.text()) //In this case use the function for the future use
            }
        })
        
    })

    it("Fill the first field with the letter 'a' where after deleted the word", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
            
        cy.get(General.buttonsWidgets.letterBinFirstOption).contains('Black')
            .click()    //Help
        
    })

    it("Fill the first field with  the letter 'a' where select  differents color ", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
            
        cy.get(General.buttonsWidgets.letterBinFirstOption).contains('Black')
            .click()  
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
        cy.get(General.buttonsWidgets.colorMagentaInFirstOption).contains('Magenta')
            .click()
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
        cy.get(General.buttonsWidgets.colorAquaInFirstOption).contains('Aqua')
            .click() 
        
    })

    it("Fill the first field with  the letter 'a' where deleted all colors ", function () {
        
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
            
        cy.get(General.buttonsWidgets.letterBinFirstOption).contains('Black')
            .click()  
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
        cy.get(General.buttonsWidgets.colorMagentaInFirstOption).contains('Magenta')
            .click()
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('be.visible')
            .type('a')
        cy.get(General.buttonsWidgets.colorAquaInFirstOption).contains('Aqua')
            .click() 
        
        cy.get('.auto-complete__indicator').click()
        cy.get(General.buttonsWidgets.autocompleteMultiple).should('have.value', '');
    })
    
    it("Fill the second field with the letter 'c' where select the first option", function () {
        
        cy.get(General.buttonsWidgets.autocompleteSingle).should('be.visible')
            .type('c')            
        cy.get(General.buttonsWidgets.letterBinSecondOption).contains('Black')
            .click()  
        
    })

    it.only("Fill in the second field with the letter 'c' where after we will write another letter", function () {
        
        cy.get(General.buttonsWidgets.autocompleteSingle).should('be.visible')
            .type('c')            
        cy.get(General.buttonsWidgets.letterBinSecondOption).contains('Black')
            .click()          
        cy.get(General.buttonsWidgets.autocompleteSingle).should('be.visible')
            .type('m')
        cy.get(General.buttonsWidgets.letterBinSecondOption).contains('Magenta')
            .click() 
        
    })
})