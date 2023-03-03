/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 * @link npx cypress run --spec "cypress/integration/widgets/tool-tips.spec.js"
 * //link npx cypress run --spec "cypress/integration/widgets/tool-tips.spec.js"
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
       cy.get('.menu-list').contains('Tool Tips').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "tool-tips")
    })

    it("Select 'Tool Tips' button", function () {

        cy.get(General.headerPrincipal).contains('Tool Tips')
        cy.get(General.buttonsWidgets.buttonHoverMe).should('be.visible')
            .and('have.css', 'background-color', 'rgb(40, 167, 69)')
            .and('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get(General.buttonsWidgets.textFieldToolTip).should('be.visible')
            .and('have.attr', 'placeholder', 'Hover me to see')
        cy.get(General.buttonsWidgets.textToolTopContainer).should('be.visible')
    })

    it("Mouse over  at  the button Green", function () {

        cy.get(General.buttonsWidgets.buttonHoverMe).should('be.visible')
            .and('have.css', 'background-color', 'rgb(40, 167, 69)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')

        cy.get(General.buttonsWidgets.buttonHoverMe).trigger('mouseover')
            //.should('have.css', 'color', 'rgb(33, 136, 56)')      //In this case, not is possible verify the color change
        cy.get(General.buttonsWidgets.hoverText).should('be.visible')
            .contains('You hovered over the Button')
    })

    it("Mouse over  at the text field that contain 'Hover me to see'", function () {

        cy.get(General.buttonsWidgets.textFieldToolTip).should('be.visible')
            .and('have.attr', 'placeholder', 'Hover me to see')

        cy.get(General.buttonsWidgets.textFieldToolTip).trigger('mouseover')
            //.should('have.css', 'color', 'rgb(33, 136, 56)')      //In this case, not is possible verify the color change
        cy.get(General.buttonsWidgets.hoverText).should('be.visible')   
            .contains('You hovered over the text field')
    })

    it("Mouse over the first marked letter in the text container", function () {

        cy.get(General.buttonsWidgets.textToolTopContainer).should('be.visible')
            .contains('Contrary')
            .trigger('mouseover')
        cy.get(General.buttonsWidgets.hoverText).should('be.visible')   
            .contains('You hovered over the Contrary')
        cy.get(General.buttonsWidgets.textToolTopContainer).contains('Contrary')
            .trigger('mouseout')
        cy.wait(2000)
        cy.get(General.buttonsWidgets.hoverText).should('not.exist')   
            
    })

    it("Mouse over the second marked letter in the text container", function () {

        cy.get(General.buttonsWidgets.textToolTopContainer).should('be.visible')
            .contains('1.10.32')
            .trigger('mouseover')
        cy.get(General.buttonsWidgets.hoverText).should('be.visible')   
            .contains('You hovered over the 1.10.32')
        cy.get(General.buttonsWidgets.textToolTopContainer).contains('1.10.32')
            .trigger('mouseout')
        cy.wait(2000)
        cy.get(General.buttonsWidgets.hoverText).should('not.exist') 
    })

    it.only("Probe",function(){

        cy.get('.vertical-list-container')


    })

   
})