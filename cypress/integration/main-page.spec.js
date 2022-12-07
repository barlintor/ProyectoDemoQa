/// <reference types="Cypress" />

/**
 * @desc Testing the demoqa Main Page        
 * @link npx cypress run--spec "cypress/integration/main-page.spec.js"
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */


 import { General } from "../page-object/viewtab.po";
 import * as Utility from "../page-object/utility.po"

 const verifyingMenuList = (probe, header) =>{ 
     cy.get('.category-cards').contains(probe).click({force:true})
     cy.get(General.headerPrincipal).contains(header)
     cy.get('.element-list-collapse').should('not.exist')
 }
  
 describe("Probe main page to DemoQa", function () { 
     
    
    beforeEach(function () {  //The BeforeEach will ALWAYS be executed after each of the test cases.
 
        cy.visit('https://demoqa.com');
    })
    it('Enter in DemoQa main page', function () {
        //Enter in Demoqa Page, and verify  that must be show all the sections 

        cy.get('.category-cards').contains('Elements').should('be.visible')
        cy.get('.category-cards').contains('Forms').should('be.visible')
        cy.get('.category-cards').contains('Alerts, Frame & Windows').should('be.visible')
        cy.get('.category-cards').contains('Widgets').should('be.visible')
        cy.get('.category-cards').contains('Interactions').should('be.visible')
        cy.get('.category-cards').contains('Book Store Application').should('be.visible')

    })

    it('Click the "Elements" button', function () {
        //Enter in Demoqa Page, and select the "Elements" button

        verifyingMenuList('Elements', 'Elements')
        Utility.checkingUrl("/" + "elements")

    })

    it('Click the "Forms" button', function () {
        //Enter in Demoqa Page, and select the "Forms" button

        verifyingMenuList('Forms', 'Forms')
        Utility.checkingUrl("/" + "forms")

    })

    it('Click the "Alerts, Frame & Windows" button', function () {
        //Enter in Demoqa Page, and select the "Alerts, Frame & Windows" button

        verifyingMenuList('Alerts, Frame & Windows', 'Alerts, Frame & Windows')
        Utility.checkingUrl("/" + "alertsWindows")

    })

    it('Click the "Widgets', function () {
        //Enter in Demoqa Page, and select the "Widgets" button

        verifyingMenuList('Widgets', 'Widgets')
        Utility.checkingUrl("/" + "widgets")

    })

    it.only('Click the "Interactions', function () {
        //Enter in Demoqa Page, and select the "Interactions" button

        verifyingMenuList('Interactions', 'Interactions')
        Utility.checkingUrl("/" + "interaction")

    })

    it('Click the "Book Store Application', function () {
        //Enter in Demoqa Page, and select the "Book Store Application" button

        verifyingMenuList('Book Store Application','Book Store' )
        Utility.checkingUrl("/" + "books")

    })
    it('Click on "ToolsQA" header', function () {
        //Enter in Demoqa Page, and select the "Book Store Application" button

        cy.get('[src="/images/Toolsqa.jpg"]').click()
        cy.url('https://demoqa.com/')

    })

    

     
 
 
 })