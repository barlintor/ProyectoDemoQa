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
       cy.get('.menu-list').contains('Resizable').click({force:true})
        
   })

    it("Enter in DemoQa main page", function () {
        Utility.checkingUrl("/" + "resizable")
    })

    it("Select 'Resizable' button", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').should('be.visible')
        cy.get('#resizable').should('be.visible')
    })

    it("Expand the first box to the max size", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').children().eq(1)
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", 500,300, {force: true})  //I not understand this utillity, in the case i not need 'pageX' or 'pageY' but, in other case yes... 
            .wait(300).trigger('mouseup', {force:true})

    })

    it("Expand the first box to the middle size", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').children().eq(1)
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", 159,-40, {force: true})  //I not understand this utillity, in the case i not need 'pageX' or 'pageY' but, in other case yes... 
            .wait(300).trigger('mouseup', {force:true})

    })

    it("Minimize the first box to the minim size", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').children().eq(1)
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", -41,-120, {force: true})  //I not understand this utillity, in the case i not need 'pageX' or 'pageY' but, in other case yes... 
            .wait(300).trigger('mouseup', {force:true})

    })

    it("Minimize the first box  to size 50x50", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').children().eq(1)
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", -81,-180, {force: true})  //Only change to the minim size 150x150
            .wait(300).trigger('mouseup', {force:true})

    })

    it("Expand the first box to the size 800x800", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizableBoxWithRestriction').children().eq(1)
        //cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", 800,800, {force: true})  //Only change to the maxim size 800x800
            .wait(300).trigger('mouseup', {force:true})

    })

    it("Expand the second box to the  size 100x100", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizable').should('be.visible').children().eq(1)
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", -91,-91, {force: true})  //Only change to the maxim size 800x800
            .wait(300).trigger('mouseup', {force:true})  

    })
    
    it.only("Expand the second box to the  size 100x100", function () {
        
        cy.get('.constraint-area').should('be.visible')
        cy.get('#resizable').should('be.visible').children().eq(1)
            .wait(300).trigger('mousedown', {which: 1, pageX: 100})
            .wait(300).trigger("mousemove", -91,-91, {force: true})  //Only change to the maxim size 800x800
            .wait(300).trigger('mouseup', {force:true})  

    })

})