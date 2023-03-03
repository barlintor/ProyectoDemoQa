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
        cy.get('.menu-list').contains('Alerts').click({force:true})

        })

    it("Select 'Alerts' button", function () {

        cy.get('.menu-list').contains('Alerts').click({force:true})
        cy.get(General.headerPrincipal).contains('Alerts')
        Utility.checkingUrl("/" + "alerts") 

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('Click Button to see alert')
        cy.get('#alertButton').should('be.visible')
            //.contains('Click Me')

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, alert will appear after 5 seconds')
        cy.get(General.buttonsAlerts.fieldTimerAlertButton).should('be.visible')
            //.contains('Click Me')

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, confirm box will appear')
        cy.get(General.buttonsAlerts.confirmButton).should('be.visible')
            //.contains('Click Me')
        
        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            //.contains('Click Me')

    })

    it("Click in alert button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('Click Button to see alert')
        cy.get('#alertButton').should('be.visible')
            .click({force:true})        //Not showed the alert 
        
        cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('You clicked a button')})
        //cy.go('back')  da instrucciones en el buscador
        //cy.reload()  refresca la pagina
    })


    it("Click in second alert button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, alert will appear after 5 seconds')
        cy.clickNewButton(General.buttonsAlerts.fieldTimerAlertButton,'Click me')
        cy.get(General.buttonsAlerts.fieldTimerAlertButton).should('be.visible')
            .click({force:true})        //Not showed the alert
        cy.wait(5500) 
        
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('This alert appeared after 5 seconds')})
        
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert,'This alert appeared after 5 seconds')
    })

    it("Click on the second alert button where the alert should not be displayed", function () { //Pr

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, alert will appear after 5 seconds')
        cy.clickNewButton(General.buttonsAlerts.fieldTimerAlertButton,'Click me')
        cy.get(General.buttonsAlerts.fieldTimerAlertButton).should('be.visible')
            .click({force:true})        //Not showed the alert
        cy.wait(3000) 
        
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('This alert appeared after 5 seconds')}) //In this case, cypress show the alert, but not have must be displayed
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert,'This alert appeared after 5 seconds')
    })

    it("Click on the second alert button and before 5 seconds click in the 'Frames' button", function () { //Pr

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, alert will appear after 5 seconds')
        cy.clickNewButton(General.buttonsAlerts.fieldTimerAlertButton,'Click me')
        cy.get(General.buttonsAlerts.fieldTimerAlertButton).should('be.visible')
            .click({force:true})        //Not showed the alert

        cy.get('.menu-list').contains('Frames').click({force:true})
        cy.get(General.headerPrincipal).contains('Frames')  //When change the options in the left menu, not must be show the alert, but in this case is displayed
        
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('This alert appeared after 5 seconds')})
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert, 'This alert appeared after 5 seconds')
    })

    it("Click in thirth alert confirm button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, confirm box will appear')
        cy.clickNewButton(General.buttonsAlerts.confirmButton,'Click me')
        cy.get(General.buttonsAlerts.confirmButton).should('be.visible')
            .click({force:true})        //Not showed the alert
        
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Do you confirm action?')})
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert, 'Do you confirm action?')
        cy.on(General.buttonsAlerts.windowConfirm,(str)  => {expect (str).to.equal('Do you confirm action?'); //In this case use General.buttonsAlerts.windowConfirm for testing the application, but here not have necessary
        return;
        });
        cy.get('#confirmResult').contains('You selected Ok')
            .should('have.css', 'color', 'rgb(40, 167, 69)')

    })

    it("Click in alert confirm button and cancel confirmation", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, confirm box will appear')
        cy.clickNewButton(General.buttonsAlerts.confirmButton,'Click me')
        cy.get(General.buttonsAlerts.confirmButton).should('be.visible')
            .click({force:true})
        
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert, 'Do you confirm action?')
        cy.on(General.buttonsAlerts.windowConfirm,(str)  => {expect (str).to.equal('Do you confirm action?'); 
        return false;
        });
        cy.get('#confirmResult').contains('You selected Cancel')
            .should('have.css', 'color', 'rgb(40, 167, 69)')
        
    })

    it("Click in alert confirm button and after click in 'Frames' button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, confirm box will appear')
        cy.clickNewButton(General.buttonsAlerts.confirmButton,'Click me')
        cy.get(General.buttonsAlerts.confirmButton).should('be.visible')
            .click({force:true})
        
        cy.verifyWindowShow(General.buttonsAlerts.windowAlert, 'Do you confirm action?')
        cy.get('.menu-list').contains('Frames').click({force:true})
        cy.get(General.headerPrincipal).contains('Frames')                  //In this case show the case Frames, but not must be show this
        
    })

    it("Click in prompt box button with only letters", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.clickNewButton(General.buttonsAlerts.promptButton,'Click me')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            .click()  
        //HELP JESUS!!!!
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Please enter your name')})
        cy.window().then(function(p){cy.stub(p, "prompt").returns("Benigno");})
        

    })

    it("Click on the prompt box button where we fill the field with numbers only", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.clickNewButton(General.buttonsAlerts.promptButton,'Click me')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            .click({force:true})  
        //HELP JESUS!!!!
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Please enter your name')})
        cy.window().then(function(p){cy.stub(p, "prompt").returns("12458");})
        

    })

    it("Click on the prompt box button where we fill the field with code ascii only", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.clickNewButton(General.buttonsAlerts.promptButton,'Click me')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            .click({force:true})  
        //HELP JESUS!!!!
        //cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Please enter your name')})
        cy.window().then(function(p){cy.stub(p, "prompt").returns("</··$!=");})
    })

    it("Click in prompt box button where only selecting the 'Aceptar' button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.clickNewButton(General.buttonsAlerts.promptButton,'Click me')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            .click({force:true})  
        //HELP JESUS!!!!
        cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Please enter your name')})

    })

    it.only("Click in prompt box button where only selecting the 'Cancelar' button", function () {

        cy.get(General.buttonsAlerts.fieldCol).should('be.visible')
            .contains('On button click, prompt box will appear')
        cy.clickNewButton(General.buttonsAlerts.promptButton,'Click me')
        cy.get(General.buttonsAlerts.promptButton).should('be.visible')
            .click({force:true})  
        //HELP JESUS!!!!
        cy.on(General.buttonsAlerts.windowAlert,(str)  => {expect (str).to.equal('Please enter your name')})

    })

})
