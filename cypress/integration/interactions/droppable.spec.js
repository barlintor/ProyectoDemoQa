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
       cy.get('.menu-list').contains('Droppable').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "droppable")
    })

    it.only("Select 'Sortable' button",function(){

        cy.moveTrigger('#draggable',650, -300, 950, 200)

        

    }) 
})