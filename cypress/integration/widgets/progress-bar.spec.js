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
//const ariaValueNow = '[aria-valuenow=]';
const pbar = (value) => {
    const ariaValueNow = '[aria-valuenow="'+value+'"]'
    if(cy.get(General.buttonsWidgets.progressBar).find(ariaValueNow) ){ 
        cy.get(General.buttonsWidgets.startStopButton).click()
    }
}

const pbarcompleted = (value) => {
    const ariaValueNow = '[aria-valuenow="'+value+'"]'
    if(cy.get(General.buttonsWidgets.progressBar).find(ariaValueNow) ){
        cy.get(General.buttonsWidgets.resetButton).click()
    }
}
describe("Testing the accordian widgets", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       Utility.checkingUrl("/" + "widgets")
       cy.get('.menu-list').contains('Progress Bar').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "progress-bar")
    })

    it.only("Select 'Progress Bar' button", function () {
        cy.get(General.headerPrincipal).contains('Progress Bar')
        cy.get('#progressBarContainer').should('be.visible')
        cy.get(General.buttonsWidgets.progressBar).should('be.visible')
        cy.clickNewButton(General.buttonsWidgets.startStopButton,'Start') 
    })

    it("Click in start button durant five(5) seconds", function () {

        cy.clickNewButton(General.buttonsWidgets.startStopButton,'Start')
        cy.get(General.buttonsWidgets.startStopButton).click()
        pbar(25)
        cy.wait(6000)

    })

    it("Click in start button until be complete", function () {

        cy.clickNewButton(General.buttonsWidgets.startStopButton,'Start')
        cy.get(General.buttonsWidgets.startStopButton).click()
        cy.wait(20000)
        pbarcompleted(100)
         
    })

    it("Click in reset button after be complete bar", function () {

        cy.clickNewButton(General.buttonsWidgets.startStopButton,'Start')
        cy.get(General.buttonsWidgets.startStopButton).click()
        cy.wait(15000)
        pbarcompleted(100)
        cy.get(General.buttonsWidgets.progressBar).contains(0)

    })

    

    
})