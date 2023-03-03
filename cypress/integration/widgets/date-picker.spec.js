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

describe("Testing the date picker widgets", function () {
   //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
   beforeEach(function () {

       cy.viewport(1500, 1500)

       cy.visit('https://demoqa.com');
       cy.once('uncaught:exception', () => false);         

       verifyingMenuList()
       Utility.checkingUrl("/" + "widgets")
       cy.get('.menu-list').contains('Date Picker').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "date-picker")
    })

    it("Select 'Date Picker' button", function () {

        cy.get(General.headerPrincipal).contains('Date Picker')
        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')

    })

    it("Write in the first field the new date without '/'", function () {

        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
            .clear()
            .type('1231997')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.dropdownFieldOfMonth).should('be.visible')
            .contains('January')
        cy.get(General.buttonsWidgets.dropdownFieldOfYears).should('be.visible')
            .contains('1900')
        cy.get('.react-datepicker__day--001')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('1')
        Utility.colorSelected('.react-datepicker__day--001')
    })  

    it("Write in the first field the new date with only numbers", function () {

        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
            .clear()
            .type('12/03/1990')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.dropdownFieldOfMonth).should('be.visible')
            .contains('December')
        cy.get(General.buttonsWidgets.dropdownFieldOfYears).should('be.visible')
            .contains('1990')
        cy.get('.react-datepicker__day--003')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('3')
        Utility.colorSelected('.react-datepicker__day--003')
        
    })
    
    it("Write in the first field the new date with only letters", function () {

        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
            .clear()
            .type('hola')
            //In this case the date change for the current date in the time to the run the test
    }) 
    
    it("Write in the first field the new old date", function () {

        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
            .clear()
            .type('07/15/1856')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.dropdownFieldOfMonth).should('be.visible')
            .contains('July')
        cy.get(General.buttonsWidgets.dropdownFieldOfYears).should('be.visible')
            .contains('1900')
        cy.get('.react-datepicker__day--015')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('15')
        Utility.colorSelected('.react-datepicker__day--015')
    })

    it("Write in the first field the new date with only symbols", function () {

        cy.get(General.buttonsWidgets.fieldDayMonthYear).should('be.visible')
            .clear()
            .type('+/.-/-;')
            
            //In this case the date change for the current date in the time to the run the test
    })

    it("Write in the second field the new date without '/'", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('551996')
            //In this case the date change for the current date in the time to the run the test
    })

    it("Write in the second field the new date with only numbers", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('05/05/1996')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.fieldMonthAndYear).should('be.visible')
            .contains('May 1996')
        cy.get(General.buttonsWidgets.dropdownfieldOfMonth2Option).should('be.visible')
            .contains('May')
        cy.get(General.buttonsWidgets.dropdownfieldOfYears2Option).should('be.visible')
            .contains('1996')
        cy.get('.react-datepicker__day--005')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('5')
        Utility.colorSelected('.react-datepicker__day--005')
        cy.get(General.buttonsWidgets.rightTimeList).should('be.visible')
            .contains('00:00')
            
    })

    it("Write in the second field the new date with only letters", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('four/july/twenty twenty one')
        
            //In this case the date change for the current date in the time to the run the test
    })

    it("Write in the second field the new old date", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('05/05/1720')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.fieldMonthAndYear).should('be.visible')
            .contains('May 1720')
        cy.get(General.buttonsWidgets.dropdownfieldOfMonth2Option).should('be.visible')
            .contains('May')
        cy.get(General.buttonsWidgets.dropdownfieldOfYears2Option).should('be.visible')
            .contains('1720')
        cy.get('.react-datepicker__day--005')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('5')
        Utility.colorSelected('.react-datepicker__day--005')
        cy.get(General.buttonsWidgets.rightTimeList).should('be.visible')
            .contains('00:00')
            
    })

    it("Write in the second field the new date and time", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('05/05/1950 14:00 PM')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.fieldMonthAndYear).should('be.visible')
            .contains('May 1950')
        cy.get(General.buttonsWidgets.dropdownfieldOfMonth2Option).should('be.visible')
            .contains('May')
        cy.get(General.buttonsWidgets.dropdownfieldOfYears2Option).should('be.visible')
            .contains('1950')
        cy.get('.react-datepicker__day--005')//001 its very important to be verify the content inside the box, in this case "1" 
            .contains('5')
        Utility.colorSelected('.react-datepicker__day--005')
        cy.get(General.buttonsWidgets.rightTimeList).should('be.visible')
            .contains('14:00')
            
    })

    it("Select the new date in the second field without write", function () {

        cy.get(General.buttonsWidgets.fieldDateAndTime).should('be.visible')
            .clear()
            .type('03/04/2025 13:00 PM')
        cy.get(General.buttonsWidgets.containerMonth).should('be.visible')
        cy.get(General.buttonsWidgets.fieldMonthAndYear).should('be.visible')
            .contains('March 2025')
        cy.get(General.buttonsWidgets.dropdownfieldOfMonth2Option).should('be.visible')
            .contains('March')
        cy.get(General.buttonsWidgets.dropdownfieldOfYears2Option).should('be.visible')
            .contains('2025')
        cy.get('.react-datepicker__day--004')//001 its very important to be verify the content inside the box, in this case "1" 
            .should('have.css', 'background-color', 'rgb(33, 107, 165)')
            .contains('4')
        cy.get(General.buttonsWidgets.rightTimeList).should('be.visible')
            .contains('13:00')
            
    })
    

    
})