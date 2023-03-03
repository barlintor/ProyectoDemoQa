/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 * @link npx cypress run--spec "cypress/integration/elements.spec.js"
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */

import { General } from "../../page-object/viewtab.po";
import * as Utility from "../../page-object/utility.po";
import { each } from "bluebird";

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
       cy.get('.menu-list').contains('Select Menu').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "select-menu")
        cy.get(General.headerPrincipal).contains('Select Menu')
    })

    it("Select 'Select Menu' button", function () {
        
        cy.get(General.buttonsWidgets.firstDropdownMenu).should('be.visible')
        cy.get(General.buttonsWidgets.dropdownSelectOne).should('be.visible')
        cy.get(General.buttonsWidgets.oldSelectMenu).should('be.visible')
        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
        cy.get('.row').contains('Select...')            //HELP JESUS, very that
        cy.contains('Select...').parent()
            .should('be.visible')
    })

    it("Click in 'Select  Value' dropdown", function () {
        
        cy.get(General.buttonsWidgets.firstDropdownMenu).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.headingGroup1Menu1).should('be.visible')
        cy.get(General.buttonsWidgets.option1Group1).should('be.visible')
            .contains('Group 1, option 1')
        cy.get(General.buttonsWidgets.option2Group1).should('be.visible')
            .contains('Group 1, option 2')
        cy.get(General.buttonsWidgets.headingGroup2Menu1).should('be.visible')
        cy.get(General.buttonsWidgets.option1Group2).should('be.visible')
            .contains('Group 2, option 1')
        cy.get(General.buttonsWidgets.option2Group2).should('be.visible')
            .contains('Group 2, option 2')
        cy.get(General.buttonsWidgets.rootOption).should('be.visible')
            .contains('A root option')
        cy.get(General.buttonsWidgets.anotherRootOption).should('be.visible')
            .contains('Another root option')
                    
    })

    it("Select the second option in the 'Group 1'", function () {
        
        cy.get(General.buttonsWidgets.firstDropdownMenu).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.headingGroup1Menu1).should('be.visible')
        cy.get(General.buttonsWidgets.option1Group1).should('be.visible')
            .contains('Group 1, option 1')
            .click()
                     
    })

    it("Select the second option in the 'Group 2'", function () {
        
        cy.get(General.buttonsWidgets.firstDropdownMenu).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.headingGroup2Menu1).should('be.visible')
        cy.get(General.buttonsWidgets.option2Group2).should('be.visible')
            .contains('Group 2, option 2')
            .click()
                     
    })

    it("Select the four option in the 'Group 2'", function () {
        
        cy.get(General.buttonsWidgets.firstDropdownMenu).should('be.visible')
            .click()
        cy.get(General.buttonsWidgets.headingGroup2Menu1).should('be.visible')
        cy.get(General.buttonsWidgets.anotherRootOption).should('be.visible')
            .contains('Another root option')
            .click()
                     
    })

    it("Click in 'Select  One' dropdown", function () {
        
        /*cy.get(General.buttonsWidgets.dropdownSelectOne).then( items =>{

            expect(items[0]).to.contain.text('Select Title')
            //expect(items[1]).to.contain.text('Dr.')
            cy.get(General.buttonsWidgets.dropdownSelectOne).click()
        })*/
        

        //cy.get(General.buttonsWidgets.dropdownSelectOne).click()
            //.its(0).contains('Dr.')
        cy.get(General.buttonsWidgets.dropdownSelectOne).click()
        
        cy.get(General.buttonsWidgets.drSelected).contains('Dr.')
        cy.get(General.buttonsWidgets.mrSelected).contains('Mr.')
        cy.get(General.buttonsWidgets.mrsSelected).contains('Mrs.')
        cy.get(General.buttonsWidgets.msSelected).contains('Ms.')
        cy.get(General.buttonsWidgets.profSelected).contains('Prof.')
        cy.get(General.buttonsWidgets.otherSelected).contains('Other')             //HELP JESUS, i not understand this list any other way

    })

    it("Select the second option in the 'Select  One' dropdown", function () {
        
        cy.get(General.buttonsWidgets.dropdownSelectOne).click()
        cy.get(General.buttonsWidgets.mrSelected).contains('Mr.')
        cy.get(General.buttonsWidgets.dropdownSelectOne).contains('Mr.')

    })

    it("Select the last option in the 'Select  One' dropdown", function () {
        
        cy.get(General.buttonsWidgets.dropdownSelectOne).click()
        cy.get(General.buttonsWidgets.otherSelected).contains('Other.') 
        cy.get(General.buttonsWidgets.dropdownSelectOne).contains('Other')

    })

    it("Click in 'Old Style Select Menu' dropdown", function () {
        
        /*cy.get(General.buttonsWidgets.oldSelectMenu)
            .each((items)=>{
                cy.log(items.text())             //HELP JESUS, its the unic form that i searching for solved this situation
            })*/
        cy.get(General.buttonsWidgets.oldSelectMenu).should('exist')
    })
    
    it("Select the first option in the 'Old Style Select Menu' dropdown", function () {
        
        cy.get(General.buttonsWidgets.oldSelectMenu)
            .select('0')
            .contains('Red')

    })

    it("Select the five option in the 'Old Style Select Menu' dropdown", function () {
        
        cy.get(General.buttonsWidgets.oldSelectMenu)
            .select('4')
            .contains('Purple')

    })

    it("Select the last option in the 'Old Style Select Menu' dropdown", function () {
       
        cy.get(General.buttonsWidgets.oldSelectMenu).select('10')
            .contains('Aqua')  
    })

    it("Click in 'Multiselect' dropdown", function () {
       
        cy.get('.row')
            .eq(7)
            .contains('Select...')
            .click()
        cy.get('.row')
            .eq(7)
            .contains('Green')
        cy.get('.row')
            .eq(7)
            .contains('Blue')
        cy.get('.row')
            .eq(7)
            .contains('Black')
        cy.get('.row')
            .eq(7)
            .contains('Red')
    })

    it("Fill the field with the letter 'b' and then select the first option", function () {
       
        
       /* cy.get('.row')
            .eq(7)
            .children()
            .children()
            .children()
            .children()
            .contains('Select...')
            .type('b')
            .as('Probe') //This is util for reutilization the get
            

        cy.get(General.buttonsWidgets.blueOption)   
            .contains('Blue')
            .click() */
        //*--------------------
        cy.contains('Select...').parent()          
            .type('b')
        //*--------------------
        //cy.get('input').eq(2).parents().eq(2)      
            //.type('b')

        cy.get(General.buttonsWidgets.blueOption)   
            .contains('Blue')
            .click() 

    })

    it("Fill the field with the letter 'b' where after deleted the word", function () {
       
        cy.contains('Select...').parent()          
             .type('b')
             .as('Probe1')
        cy.get(General.buttonsWidgets.blueOption)   
            .contains('Blue')
            .click() 

        cy.get('@Probe1').contains('Blue').siblings().click()
        
        /*cy.get('@Probe1')
            .children()                                     //Verify
            .children()
            .children()
            .eq(1)
            .click()*/
             
    })

    it("Fill the field with  the letter 'b' where select  differents color ", function () {
       
        cy.contains('Select...').parent()          
             .type('b')
              
        cy.get(General.buttonsWidgets.blueOption)   
            .contains('Blue')
            .click()

        cy.get(General.buttonsWidgets.blackOption)   
            .contains('Black')
            .click()
    })

    it.only("Fill the first field with  the letter 'a' where deleted all colors ", function () {
       
        cy.contains('Select...').parent()          
             .type('a')
             .as('Probe1')
             //This is util for reutilization the get
              
        cy.get(General.buttonsWidgets.blackOption).contains('Black').click()
        cy.get('@Probe1').siblings().children().eq(0).click()
        
        /*cy.get('.row')
            .eq(7)
            .children()
            .children()
            .children()
            .children()
            .children()
            .as('Hell')
            
        cy.get('@Hell')
            .eq(2)
            .click()*/
            
    })
   
    it("Click in 'Standard multi select'", function () {
       
        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
            .children()
            .should('have.value', 'volvo')
        
        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
            .select(1)
            .contains('Saab')
            .should('have.value', 'saab')

        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
            .select(2)
            .contains('Opel')
            .should('have.value', 'opel')

        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
            .select(3)
            .contains('Audi')
            .should('have.value', 'audi')
            
    })

    it("Select the first option in the list", function () {
       
        cy.get(General.buttonsWidgets.multiSelectMenu).should('be.visible')
            .select(0)
              
        cy.get('.row')
            .eq(8)                                      //HELP JESUS, in this case, i not have verify the color.
            .contains('Standard multi select')
            .click()
            
    })
   
    it("Select the first and third option in the list", function () {
       
        cy.get(General.buttonsWidgets.multiSelectMenu)
            .select(['volvo', 'opel'])
        
        cy.get('.row')
            .eq(8)                                      //HELP JESUS, in this case, i not have verify the color.
            .contains('Standard multi select')
            .click()
            
    })

    it("Select all options in the list", function () {
       
        cy.get(General.buttonsWidgets.multiSelectMenu)
            .select(['volvo','saab', 'opel', 'audi'])

        cy.get('.row')
            .eq(8)                                      //HELP JESUS, in this case, i not have verify the color.
            .contains('Standard multi select')
            .click()
            
    })
})