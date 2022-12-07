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
 
 const downloadsFolder = Cypress.config("downloadsFolder")
 const path = require("path");
 const imageFile = 'aaaaaa.png';
 const pdfFile = 'Pjuego.pdf';
 
 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Elements').click({force:true})
     cy.get(General.headerPrincipal).contains('Elements')
     cy.get('.element-list-collapse').should('not.exist')
 }

 describe("Testing downdload/upload archives.", function () {
 
    //Let's go to the "https://demoqa.com/" page and check the functionality of the "Upload and Download" button by uploading or downloading files/files

    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);

        verifyingMenuList()
        cy.get('#item-7').click()

    })

    it("Select the 'Upload and Download'  button", function () {

        Utility.checkingUrl("/" + "upload-download")
        cy.get(General.headerPrincipal).contains('Upload and Download')
        cy.get('#downloadButton').should('be.visible')
            .contains('Download')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
        cy.get('#uploadFile').should('be.visible')
    })

    it("Click in 'Download' button ", function () {

        cy.get('#downloadButton').click()
        cy.readFile(path.join(downloadsFolder, "sampleFile.jpeg")).should("exist") //Verify that  downloader the file

    })

    it("Click in 'Seleccionar archivo' button and select one picture", function () {

        cy.get('#uploadFile').attachFile(imageFile) //Upload the picture selected
        cy.get('#uploadedFilePath').should('be.visible')

    })

    it("Click in 'Seleccionar archivo' button and select one 'PDF' document", function () {
        cy.get('#uploadFile').attachFile(pdfFile)//Upload the PDF selected
        cy.get('#uploadedFilePath').should('be.visible')

    })
})