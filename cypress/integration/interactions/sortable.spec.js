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
       cy.get('.menu-list').contains('Sortable').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "sortable")
    })

    it("Select 'Sortable' button",function(){

        //cy.moveTrigger('#draggable',650, 200, 950, 200)

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.list-group-item-action').within( ()=> {
            cy.contains('One').should('be.visible');
            cy.contains('Two').should('be.visible');
            cy.contains('Three').should('be.visible');
            cy.contains('Four').should('be.visible');
            cy.contains('Five').should('be.visible');
            cy.contains('Six').should('be.visible');
          });
        cy.get('#demo-tab-grid').should('be.visible').contains('Grid')

    }) 

    it("Select the first group 'List'",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.list-group-item-action').within( ()=> {
            cy.contains('One').should('be.visible');
            cy.contains('Two').should('be.visible');
            cy.contains('Three').should('be.visible');
            cy.contains('Four').should('be.visible');
            cy.contains('Five').should('be.visible');
            cy.contains('Six').should('be.visible');
          });
    }) 

    it("Change the first selector to the last position",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.vertical-list-container').contains('One').should('be.visible').as('Probe1')
            
        //cy.moveTrigger('.vertical-list-container',650, -200, 950, 200)
        //cy.get('.vertical-list-container').invoke('show');
        /*cy.get('.vertical-list-container')
            .contains('One')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger('mousemove', {which: 1, pageX: 100, pageY: 650, force:true})
            .wait(300).trigger('mouseup', {force:true})*/
        cy.moveSortable('.vertical-list-container','One',100,650)
    }) 

    it("Change the last selector to the first position",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.vertical-list-container').contains('Six').should('be.visible')
            
        cy.moveSortable('.vertical-list-container','Six',100,50)
    })

    it("Move the first selector to the last position horizontally",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.vertical-list-container').contains('One').should('be.visible')
            
        cy.moveSortable('.vertical-list-container','One',300,650)
    })

    it("Move the second selector horizontally",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.vertical-list-container').contains('Two').should('be.visible')
            
        cy.moveSortable('.vertical-list-container','Two',200,650)
    })

    it("Move the five selector to the tittle (UP)",function(){

        cy.get('#sortableContainer').should('be.visible')
        
        cy.get('.vertical-list-container').contains('Five').should('be.visible')
            
        cy.moveSortable('.vertical-list-container','Five',100,10)
    })

    it("Select the second group 'Grid'",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.get('.grid-container').within( ()=> {
            cy.contains('One').should('be.visible');
            cy.contains('Two').should('be.visible');
            cy.contains('Three').should('be.visible');
            cy.contains('Four').should('be.visible');
            cy.contains('Five').should('be.visible');
            cy.contains('Six').should('be.visible');
            cy.contains('Seven').should('be.visible');
            cy.contains('Eight').should('be.visible');
            cy.contains('Nine').should('be.visible');
          });
    }) 

    it("Change the first box to the last position",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.moveSortable('.create-grid','One',100,650)
        cy.get('.create-grid ')
            .contains('One')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger('mousemove', {which: 1, pageX: 700, force:true})
            .wait(300).trigger('mouseup', {force:true})
    }) 

    it("Change the last box to the first position",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.moveSortable('.create-grid','Nine',100,100)

    }) 

    it("Move the first box to the last position horizontally",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.moveSortable('.create-grid','One',100,650)
        cy.get('.create-grid ')
            .contains('One')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger('mousemove', {which: 1, pageX: 700, force:true})
            .wait(300).trigger('mouseup', {force:true})
    }) 

    it("Move the five box to the tittle (UP)",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.moveSortable('.create-grid','Five',100,50)

    }) 
    
    it.only("Move the first box to the six position where after we return it to its initial place ",function(){

        cy.get('#demo-tab-grid').should('be.visible').click()
        
        cy.moveSortable('.create-grid','One',100,500)
        cy.get('.create-grid ')
            .contains('One')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger('mousemove', {which: 1, pageX: 200, force:true})
            .wait(300).trigger('mouseup', {force:true})
        cy.moveSortable('.create-grid','One',100,50)
    }) 
})