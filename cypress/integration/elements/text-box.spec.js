/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 *
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */


 import { General } from "../../page-object/viewtab.po";
 //import * as Utility from "../page-object/utility.po";
 import * as Utility from "../../page-object/utility.po";


 //const { waitForDebugger } = require("inspector");
 //const { get } = require("lodash");
 
 const name = 'Joan Marti';
 const email = 'Email';
 const address = 'Tokyo-Japon';
 const numbers = '989875';
    
 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Elements').click({force:true})
     cy.get(General.headerPrincipal).contains('Elements')
     cy.get('.element-list-collapse').should('not.exist')
 }

 describe("Testing the 'Text Box' functionality by registering a user", function () { //ready
    //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Text Box" button throught register user the correctly form

    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-0').click()
        

    })

    it.only('Select the "Text Box" button', function () {
        //Select thee Text Box button, and verifing that exist the fields
        //cy.url().should('eq', 'https://demoqa.com/text-box')
        Utility.checkingUrl("/" + "text-box")

        cy.get('#userName-label').contains('Full Name').should('be.visible')    //In this case filling the field Full Name
        cy.get(General.userName).should('be.visible') //In this line verify that field is visible

        cy.get('#userEmail-label').contains(email).should('be.visible')
        cy.get(General.userEmail).should('be.visible')

        cy.get('#currentAddress-label').contains('Current Address').should('be.visible')
        cy.get(General.userCurrentAddress).should('be.visible')

        cy.get('#permanentAddress-label').contains('Permanent Address').should('be.visible')
        cy.get(General.userPermanentAddress).should('be.visible')


    })

    it('Select the "Text Box" button and filling  the field "Full Name" ', function () {


        cy.get(General.userName).click().type(name)
        cy.get(General.submitButton).click()
        cy.get('#name').should('be.visible').contains('Name:' + name)


    })


    it('Select the "Text Box" button and filling  the field "Full Name", in this case write a only numbers', function () {

        cy.get(General.userName).click().type('1564')
        cy.get(General.submitButton).click()
        cy.get('#name').should('be.visible').contains('Name:1564')

    })

    it('Select the "Text Box" button and sending empty name" ', function () {


        cy.get(General.userName).click().type(" ")
        cy.get(General.submitButton).click()
        cy.get('#name').should('be.visible').contains('Name: ')

    })

    it('Select the "Text Box" button and filling  the field "Email" ', function () {

        cy.get(General.userEmail).click().type('joanm@gmail.com')
        cy.get(General.submitButton).click()
        cy.get(General.emailField).should('be.visible').contains('Email:joanm@gmail.com')

    })

    it('Select the "Text Box" button and filling  the field "Email", in this case write a only numbers ', function () {

       cy.get(General.userEmail).click().type('1231412')
       cy.get(General.submitButton).click()
       /*cy.get('.field-error').should('have.css', 'border-top-color', 'rgb(255, 0, 0)') //This line checks that the email is spelled incorrectly
            .and('have.css', 'border-bottom-color', 'rgb(255, 0, 0)')
            .and('have.css', 'border-left-color', 'rgb(255, 0, 0)')
            .and('have.css', 'border-right-color', 'rgb(255, 0, 0)')*/
       Utility.errorCss ('.field-error')

       cy.get(General.emailField).should('not.exist') //This line checks that the result field  not exist


    })

    it('Select the "Text Box" button and filling  the field "Email"  without @', function () {

       cy.get(General.userEmail).click().type('joanmgmail.com')
       cy.get(General.submitButton).click()
       Utility.errorCss ('.field-error')
       cy.get(General.emailField).should('not.exist')


    })

    it('Select the "Text Box" button and filling  the field "Current Address" ', function () {

        cy.get(General.userCurrentAddress).click().type(address)
        cy.get(General.submitButton).click()

        cy.wait(6000) //This line wait 6 second for pass to the next function
        cy.get(General.notificationMessage).should('be.visible').contains('Current Address :Tokyo-Japon') //This line checks that the result field  spelled "Tokyo-Japon"

    })  

    it('Select the "Text Box" button and filling  the field "Current Address",  in this case write a only numbers" ', function () {

        cy.get(General.userCurrentAddress).click().type(numbers)
        cy.get(General.submitButton).click()
        cy.get(General.notificationMessage).should('be.visible').contains('Current Address :' + numbers)

    })

    it('Select the "Text Box" button and filling  the field "Permanent Address"  ', function () {

        cy.get(General.userPermanentAddress).click().type(address)
        cy.get(General.submitButton).click()
        cy.get(General.notificationMessage).should('be.visible').contains('Permananet Address :'+ address).should('be.visible')

    })

    it('Select the "Text Box" button and filling  the field "Permanent Address",  in this case write a only numbers', function () {

        cy.get(General.userPermanentAddress).click().type(numbers)
        cy.get(General.submitButton).click()
        cy.get(General.notificationMessage).should('be.visible').contains('Permananet Address :' + numbers)

    })

    it('Select the "Text Box" button and complete all the fields', function () {

        cy.get(General.userName).click().type(name)
        cy.get(General.userEmail).click().type('joanm@gmail.com')
        cy.get(General.userCurrentAddress).click().type(address)
        cy.get(General.userPermanentAddress).click().type(numbers)
        cy.get(General.submitButton).click()
        cy.get(General.notificationMessage).contains('Name:' + name)
        cy.get(General.notificationMessage).contains('Email:joanm@gmail.com')
        cy.get(General.notificationMessage).contains('Current Address :'+ address)
        cy.get(General.notificationMessage).contains('Permananet Address :' + numbers)

    })
})