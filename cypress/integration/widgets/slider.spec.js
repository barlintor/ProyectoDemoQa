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
const currentValue  = 25;
const targetValue =50;
const increment =1;
const steps =  (targetValue - currentValue) / increment;
const rightArrow = '{rightarrow}'.repeat(steps);


const verifyingMenuList = () => {
    cy.get('.category-cards').contains('Widgets').click({ force: true })
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
        cy.get('.menu-list').contains('Slider').click({ force: true })

    })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "slider")
    })

    it("Select 'Slider' button", function () {
        cy.get(General.headerPrincipal).contains('Slider')
        cy.get('#sliderContainer').should('be.visible')
        cy.get('#sliderValue').should('be.visible')
    })

    it("Move the slider button to the finish", function () {

        cy.get('.range-slider')
            .invoke('val', 100)
            .trigger('change')
        cy.get('#sliderValue').invoke('val', 100).trigger('change')  //HELP THIS isn't the correct form, but is ok
    })

    it.only("Move the slider button to the middle", function () {

        cy.get('.range-slider')
            .invoke('val', 50)
            .trigger('change')
            .click({ force: true })
        cy.get('#sliderValue').click()
        //cy.get('#sliderValue').invoke('val', 50).trigger('change')  //HELP THIS isn't the correct form, but is ok
        //cy.get('[type=range]').type(rightArrow)     VERIFY THAT
    
    
    })

    it("Move the slider button under 0", function () {

        cy.get('.range-slider')
            .invoke('val', -15)
            .trigger('change')
        cy.get('#sliderValue').invoke('val', -15).trigger('change')  //HELP THIS isn't the correct form, but is ok
        //In this case, the box displays the number "-15" should not be displayed
    })


})