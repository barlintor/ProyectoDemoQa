/// <reference types="Cypress" />

/**
 * @desc Testing the elements of demoqa       
 * @link npx cypress run--spec "cypress/integration/elements.spec.js"
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */


 import { General } from "../page-object/viewtab.po";
 import * as Utility from "../page-object/utility.po";


 const { waitForDebugger } = require("inspector");
 const { get } = require("lodash");
 
 const name = 'Joan Marti';
 const email = 'Email';
 const address = 'Tokyo-Japon';
 const numbers = '989875';
 const add = 'Add';

 const nameTable1 = 'Alden';
 const nameTable2 = 'Cierra';
 const nameTable3 = 'Kierra';
 const lastNameTable1 = 'Cantrell';
 const lastNameTable2 = 'Gentry';
 const lastNameTable3 = 'Vega';
 const ageTable1 = '29';
 const ageTable2 = '39' ;
 const ageTable3 = '45';
 const emailTable1 = 'alden@example.com';
 const emailTable2 = 'cierra@example.com';
 const emailTable3 = 'kierra@example.com';
 const salaryTable1 = '2000';
 const salaryTable2 = '10000';
 const salaryTable3 = '12000';
 const departmentUser1 = 'Compliance';
 const departmentUser2 = 'Insurance';
 const departmentUser3 =  'Legal';

 
 const downloadsFolder = Cypress.config("downloadsFolder")
 const path = require("path");
 const imageFile = 'aaaaaa.png';
 const pdfFile = 'Pjuego.pdf';
 
 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Elements').click({force:true})
     cy.get(General.headerPrincipal).contains('Elements')
     cy.get('.element-list-collapse').should('not.exist')
 }
  
 describe("Enter in DemoQa main page", function () { //ready
     //We are going to enter the "https://demoqa.com/" page and verify that the buttons exist by selecting the "Elements" option"
 
     beforeEach(function () {  //The BeforeEach will ALWAYS be executed after each of the test cases.
 
         cy.visit('https://demoqa.com');
     })
 
 
     it('Enter in DemoQa main page', function () {
         //Enter in Demoqa Page, and select the "Elements" button
     
         verifyingMenuList()
 
     })
 
 
 })
 
 describe("Testing the 'Text Box' functionality by registering a user", function () { //ready
     //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Text Box" button throught register user the correctly form
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-0').click()
         
 
     })
 
     it('Select the "Text Box" button', function () {
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
 
 describe("Testing the 'Check Box' button functionality", function () {
     //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Check Box" button throught the buttons
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-1').click()
 
     })
 
     it('Select the "Check Box" button', function () {
 
         Utility.checkingUrl("/" + "checkbox")
         cy.get(General.headerPrincipal).contains('Check Box')
         cy.get('.rct-text').contains('Home')  
         cy.get('.rct-node-icon').should('have.css', 'color', 'rgb(51, 51, 204)')
         cy.get('.rct-icon-rct-icon-parent-open').should('not.exist')
 
 
     })
 
     it('Select the "Check Box" button and select  the unic option "Home"', function () {
 
         cy.get('#tree-node-home:checkbox').check({ force: true })
             .should('be.checked')
 
     })
 
     it('Verify that the submenus are checked', function () {
 
         cy.get('#tree-node-home:checkbox').check({ force: true })
             .should('be.checked')
         cy.get('.rct-collapse-btn').click()
         cy.get('#tree-node-desktop:checkbox').should('be.checked')
         cy.get('#tree-node-documents:checkbox').should('be.checked')
         cy.get('#tree-node-downloads:checkbox').should('be.checked')
         
     })
 
 
     it('Verify that the folder changes color when expanded', function () {
 
         cy.get('#tree-node-home:checkbox').check({ force: true })
             .should('be.checked')
         cy.get('.rct-collapse-btn').click()
         cy.get('.rct-icon-parent-open').should('be.visible').should('have.css', 'color', 'rgb(51, 51, 204)')
         cy.get('.rct-icon > rct-icon-parent-close').should('not.exist') //verify that the class does not exist.
 
     })
 
     it('Check that the folder changes color when collapsed', function () {
 
         cy.get('#tree-node-home:checkbox').check({ force: true })
             .should('be.checked')
         cy.get('.rct-collapse-btn').click()
         cy.get('.rct-icon-parent-open').should('be.visible')
         cy.get('.rct-icon-expand-open').click()
         cy.get('.rct-icon-parent-open').should('not.exist')
 
     })
 
 })
 
 describe("Testing the 'Radio Box' button functionality", function () {
     //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Radio Box" button throught the selection the buttons
 
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-2').click()
 
     })
 
     it('Select the "Radio Button" ', function () {

        Utility.checkingUrl("/" + "radio-button'")
         cy.get(General.headerPrincipal).contains('Radio Button')
 
         cy.get('input[type="radio"]')
             .should('have.length', 3)   //verify that this field contain three elements
 
         cy.get('.custom-control-label').contains('Yes').should('be.visible')
         cy.get('.custom-control-label').contains('Impressive').should('be.visible')
         cy.get('.custom-control.disabled').contains('No').should('be.visible')
 
     })
 
     it('Select the "Radio Button" and select  the option "Yes" ', function () {
 
         cy.get('#yesRadio').click({force: true}) //It does not allow clicked if i don't execute the force:true
         cy.get('.mt-3').contains('You have selected Yes').should('be.visible')
         cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
 
     })
 
     it('Select the "Radio Button" and select  the option "Impressive" ', function () {
 
         cy.get('#impressiveRadio').click({force: true})
         cy.get('.mt-3').contains('You have selected Impressive').should('be.visible')
         cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
 
     })
 
     it('Select the "Radio Button" and select  the option "No"', function () {
 
         cy.get('.custom-control.disabled').contains('No').click()
             .should('have.class', 'disabled')
             .and('be.visible')
 
     })
 })
 
 describe("Testing the 'Web Tables' button functionality by add and searching users", function () {
     //We are going to enter the "https://demoqa.com/" page and verify the functionality the  "Web Tables" button throught the register users and searching users created
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-3').click()
 
     })
 
     it('Select the "Web Tables" button', function () {
 
         Utility.checkingUrl("/" + "webtables")
         cy.get(General.headerPrincipal).contains('Web Tables')
         cy.get('.rt-table').should('be.visible')
         cy.get('.rt-tbody').eq(0).click() 
         cy.get('.rt-tbody').contains(nameTable2)
         cy.get('.rt-tbody').contains(nameTable1)
         cy.get('.rt-tbody').contains(nameTable3)
 
     })
 
     it('Select the "Web Tables" button  clicked in "Add" button', function () {
 
 
         cy.get('.rt-table').should('be.visible')
         cy.get(General.webTableUser.buttonAdd).contains(add).click() 
         cy.get(General.webTableUser.modelPanel).should('be.visible')
         cy.get('.modal-header') //Show the new form table and verify that contain de text "Registrarion Form"
             .should('be.visible')
             .contains('Registration Form')
         cy.get('.modal-body').should('be.visible')
 
     })
 
     it('Register a new person in the Table with only a First Name', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.firstName).type('Joan')
         cy.get(General.submitButton).click()
         /*cy.get(General.webTableUser.firstName)
             .should('have.css', 'border-color', 'rgb(40, 167, 69)')*/ //This line Check that the field its show in  green
         Utility.greenColors(General.webTableUser.firstName)
             /*cy.get(General.webTableUser.lastName)
             .should('have.css', 'border-color', 'rgb(220, 53, 69)')*/ //This line Check that the  field its show in  red
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Last Name', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.lastName).type('Part')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.greenColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a email without "@"', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.userEmail).type('joapgmail.com')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a email "', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.userEmail).type('joap@gmail.com')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.greenColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Age, in this case not numeric"', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.userAge).type('nueve')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Age', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.userAge).type('9')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.greenColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Salary, in this case not numeric', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.salaryUser).type('diez')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Salary', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.salaryUser).type('10')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.greenColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the Table with only a Department', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.userDepartment).type('Consultory')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.greenColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the table without selecting any field', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.userDepartment).type('')
         cy.get(General.submitButton).click()
         Utility.redColors(General.webTableUser.firstName)
         Utility.redColors(General.webTableUser.lastName)
         Utility.redColors(General.userEmail)
         Utility.redColors(General.webTableUser.userAge)
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.redColors(General.webTableUser.userDepartment)
 
     })
 
     it('Register a new person in the table  and complete all the fields', function () {
 
         cy.get(General.webTableUser.buttonAdd).contains(add).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.firstName).type('Joan')
         cy.get(General.webTableUser.lastName).type('Part')
         cy.get(General.userEmail).type('joap@gmail.com')
         cy.get(General.webTableUser.userAge).type('9')
         cy.get(General.webTableUser.salaryUser).type('10')
         cy.get(General.webTableUser.userDepartment).type('Consultory')
         cy.get(General.submitButton).click()
         cy.get( General.webTableUser.modelPanel).should('be.visible')
         cy.get(General.webTableUser.sectionTable).contains('Joan')
 
     })
 
     it('Click  "First Name" Field  and verify the list in alphabetic order', function () {
         
 
         cy.get(General.webTableUser.headerTable).contains('First Name').click()
         cy.get(General.webTableUser.headerTable).should('have.css', 'border-color', 'rgb(33, 37, 41)')
 
         cy.get(General.webTableUser.sectionTable).eq(1) //Verify the first cell its Alden
             .contains(nameTable1)
         cy.get(General.webTableUser.sectionTable).eq(2) //Verify the second cell its Alden
             .contains(nameTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)//Verify the thirth cell its Alden
             .contains(nameTable3)
     })
 
     it('Click on the "First Name" field and verify that the list is the opposite of the alphabetical order', function () {
 
         cy.get(General.webTableUser.headerTable).contains('First Name').click() //Click the first time for order the names
         cy.get(General.webTableUser.headerTable).should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains('First Name').click() //Click the first time for order in the opposite form  
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(nameTable1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(nameTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(nameTable3)
     })
 
     it('Click  "Last Name" Field  and verify the list in alphabetic order', function () {
 
         cy.get(General.webTableUser.headerTable).contains('Last Name').click()
         cy.get(General.webTableUser.headerTable).contains('Last Name').should('have.css', 'border-color', 'rgb(33, 37, 41)')
         //cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').then(items => {
             //expect(items[0]).to.contain.text(lastnameTable1)
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(lastNameTable1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(lastNameTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(lastNameTable3)
     })
 
     it('Click on the "Last Name" field and verify that the list is the opposite of the alphabetical order', function () {
 
         cy.get(General.webTableUser.headerTable).contains('Last Name').click()
         cy.get(General.webTableUser.headerTable).contains('Last Name').should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains('Last Name').click()
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(lastNameTable3)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(lastNameTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(lastnameTable1)
     })
 
     it('Click  "Age" Field  and verify the list  are arranged to the ascendent form', function () {
 
         cy.get(General.webTableUser.headerTable).contains('Age').click()
         cy.get(General.webTableUser.headerTable).contains('Age').should('have.css', 'border-color', 'rgb(33, 37, 41)')
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(ageTable1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(ageTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(ageTable3)
     })
 
     it('Click on the "Age" field and verify that the list are arranged to the descendent form', function () {
 
         cy.get(General.webTableUser.headerTable).contains('Age').click()
         cy.get(General.webTableUser.headerTable).contains('Age').should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains('Age').click()
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(ageTable3)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(ageTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(ageTable1)
     })
 
     it('Click  "Email" Field  and verify the list in alphabetic order', function () {
 
         cy.get(General.webTableUser.headerTable).contains(email).click()
         cy.get(General.webTableUser.headerTable).contains(email).should('have.css', 'border-color', 'rgb(33, 37, 41)')
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(emailTable1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(emailTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(emailTable3)
     })
 
     it('Click  "Email" Field  and verify the list  is the opposite of the alphabetic order', function () {
 
         cy.get(General.webTableUser.headerTable).contains(email).click()
         cy.get(General.webTableUser.headerTable).contains(email).should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains(email).click()
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(emailTable3)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(emailTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(emailTable1)
 
     })
 
     it('Click  "Salary" Field  and verify the list  are arranged to the ascendent form', function () {
 
         cy.get(General.webTableUser.headerTable).contains('Salary').click()
         cy.get(General.webTableUser.headerTable).contains('Salary').should('have.css', 'border-color', 'rgb(33, 37, 41)')
 
         cy.get(General.webTableUser.sectionTable).eq(1)  
             .contains(salaryTable1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(salaryTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(salaryTable3)
     })
 
     it('Click on the "Salary" field and verify that the list are arranged to the descendent form', function () {
 
 
         cy.get(General.webTableUser.headerTable).contains('Salary').click()
         cy.get(General.webTableUser.headerTable).contains('Salary').should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains('Salary').click()
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(salaryTable3)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(salaryTable2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(salaryTable1)
 
     })
 
     it('Click "Department" Field  and verify the list in alphabetic order', function () {
 
 
         cy.get(General.webTableUser.headerTable).contains('Department').click()
         cy.get(General.webTableUser.headerTable).contains('Department').should('have.css', 'border-color', 'rgb(33, 37, 41)')
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(departmentUser1)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(departmentUser2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(departmentUser3)
     })
 
     it('Click  "Department" Field  and verify the list  is the opposite of the alphabetic order', function () {
 
 
         cy.get(General.webTableUser.headerTable).contains('Department').click()
         cy.get(General.webTableUser.headerTable).contains('Department').should('have.css', 'border-color', 'rgb(33, 37, 41)')
         cy.get(General.webTableUser.headerTable).contains('Department').click()
 
 
         cy.get(General.webTableUser.sectionTable).eq(1)
             .contains(departmentUser3)
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(departmentUser2)
         cy.get(General.webTableUser.sectionTable).eq(3)
             .contains(departmentUser1)
 
     })
 
     it('Select "Edit" button', function () {
 
         cy.get(General.webTableUser.editButtonUser).click()
         cy.get(General.webTableUser.newForm).should('be.visible')
             .contains('Registration Form')
 
     })
 
     it('Edit the "Email" field  the user by removing  the "@"', function () {
 
 
         cy.get(General.webTableUser.editButtonUser).click()
         cy.get(General.webTableUser.newForm).should('be.visible')
             .contains('Registration Form')
         cy.get(General.userEmail).clear()
             .type('joapgmail.com')
         cy.get(General.submitButton).click()
         Utility.greenColors(General.webTableUser.firstName)
         Utility.greenColors(General.webTableUser.lastName)
         Utility.redColors(General.webTableUser.userEmail)
         cy.get('#age-wrapper')
             .should('have.css', 'border-color', 'rgb(33, 37, 41)') 
         Utility.greenColors(General.webTableUser.salaryUser)
         Utility.greenColors(General.webTableUser.userDepartment)
         
 
     })
 
     it('Edit the "Age" field  the user with only letters', function () {
 
         cy.get(General.webTableUser.editButtonUser).click()
         cy.get(General.webTableUser.newForm).should('be.visible')
             .contains('Registration Form')
         cy.get(General.webTableUser.userAge).clear()
             .type('nueve')
         cy.get(General.submitButton).click()
         Utility.greenColors(General.webTableUser.firstName)
         Utility.greenColors(General.webTableUser.lastName)
         Utility.greenColors(General.webTableUser.userEmail)
         cy.get('#age-wrapper')
             .should('have.css', 'border-color', 'rgb(33, 37, 41)')
         Utility.greenColors(General.webTableUser.salaryUser)
         Utility.greenColors(General.webTableUser.userDepartment)
 
     })
 
     it('Edit the "Salary" field the user with only letters', function () {
 
 
         cy.get(General.webTableUser.editButtonUser).click()
         cy.get(General.webTableUser.newForm).should('be.visible')
             .contains('Registration Form')
         cy.get(General.webTableUser.salaryUser).clear()
             .type('nueve')
         cy.get(General.submitButton).click()
         Utility.greenColors(General.webTableUser.firstName)
         Utility.greenColors(General.webTableUser.lastName)
         Utility.greenColors(General.webTableUser.userEmail)
         cy.get('#age-wrapper')
             .should('have.css', 'border-color', 'rgb(33, 37, 41)')
         Utility.redColors(General.webTableUser.salaryUser)
         Utility.greenColors(General.webTableUser.userDepartment)
 
     })
 
     it('Select "Delete" button ', function () {
 
 
         cy.get('#delete-record-2').click()  //delete the  user
         cy.get(General.webTableUser.sectionTable).eq(2)
             .contains(nameTable3)  //Verify that the user "Kierra" take the place of the deleted user
 
     })
 
 
     it('Select "Search" field', function () {
 
         cy.get('#searchBox').type('s')  //typing in the field search the letter "S"
         cy.get('#basic-addon2').click()
         cy.get(General.webTableUser.sectionTable).eq(1) //Verify that the field contain the letter "s"
             .contains('s')
 
     })
 
 })
 
 describe("Testing the functionability the diferents buttons", function () {
     //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Buttons" button by clicking on the different buttons
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-4').click() 
     })
 
     it('Select the "Buttons" button', function () {
         
         Utility.checkingUrl("/" + "buttons")
         
         cy.get(General.headerPrincipal).contains('Buttons')
         cy.get(General.buttonsElements.dobleClickButton).should('be.visible')
         cy.get(General.buttonsElements.rightClickButton).should('be.visible')
         cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').should('be.visible') //Problemas por confundir con el primero
 
     })
 
     it('Click "Double Click Me" Button  only one time', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons') //skrt
         cy.get(General.buttonsElements.dobleClickButton).click()
         cy.get('#doubleClickMessage').should('not.be.visible')
     })
 
     it('Click "Double Click Me" Button  two times', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons') //skrt
         cy.get(General.headerPrincipal).contains('Buttons')
         cy.get(General.buttonsElements.dobleClickButton).dblclick()
         cy.get('#doubleClickMessage').contains('You have done a double click')
             .should('be.visible')
 
     })
 
     it('Click "Right Click Me" Button  only one time', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons')
         cy.get(General.buttonsElements.rightClickButton).click()
         cy.get('#rightClickMessage').should('not.be.visible')
 
     })
 
     it('Click "Right Click Me" Button  two time', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons')
         cy.get(General.buttonsElements.rightClickButton).dblclick()
         cy.get('#rightClickMessage').should('not.be.visible')
 
     })
 
     it('Click the "Right Click Me" button with the right click', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons')
         cy.get(General.buttonsElements.rightClickButton).rightclick()
         cy.get('#rightClickMessage').contains('You have done a right click')
             .should('be.visible')
 
     })
 
     it('Click the "Click Me" button with the right click', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons')
         cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').rightclick()
         cy.get('#dynamicClickMessage').should('not.exist')      //the diference in "not.exist" and "not.be.visible" how his name says the first is used when the element not exist in page in this moment what he  called, and the second yes exist but not is visible in the moment
 
     })
 
     it('Click "Click Me" Button  ', function () {
 
         cy.url().should('eq', 'https://demoqa.com/buttons')
         cy.get(General.buttonsElements.singleClickButton).eq(2).contains('Click Me').click() //Verify this
         cy.get('#dynamicClickMessage').contains('You have done a dynamic click')
             .should('be.visible')
 
     })
 
 })
 
 describe("Testing the differents Links and the API call", function () {
     //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the clicked in the links and testing the api call
 
     //In this moment not is possible probe the links and the API Call.
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-5').click() 
     })
 
     it('Select the "Links"  button', function () {
 
         Utility.checkingUrl("/" + "links")
 
         cy.get('#linkWrapper').should('be.visible').contains('Following links will open new tab')
         cy.get('#simpleLink').should('be.visible').contains('Home')
         cy.get('#linkWrapper').should('be.visible').contains('Following links will send an api call')
 
 
     })
 
     it('Click in "Home" Text and verify will open in a new tab', function () {
 
         cy.get('#simpleLink').click()
 
     })
 
 
 })
 
 describe("Verify Valid/Invalid Image and links", function () {
     //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-6').click() 
 
     })
 
     it("Select the 'Broken Links - Images'", function () {
 
         Utility.checkingUrl("/" + "broken")
         
         cy.get(General.headerPrincipal).contains('Broken Links - Images')
         cy.get('p').contains('Valid image').should('be.visible')
         cy.get('p').contains('Broken image').should('be.visible')
         cy.get('p').contains('Valid Link').should('be.visible')
         cy.get('p').contains('Broken Link').should('be.visible')
     })
 
     it("Verify  the image is valid", function () {
 
         cy.get('p').contains('Valid image').should('be.visible')
         cy.get('[src="/images/Toolsqa.jpg"]').should('have.attr', 'src', '/images/Toolsqa.jpg')
     })
 
     it("Verify  the image is broken", function () {
 
         cy.get('p').contains('Broken image').should('be.visible')
         cy.get('[src="/images/Toolsqa_1.jpg"]').should('have.attr', 'src', '/images/Toolsqa_1.jpg')//Pendiente de revision
     })
 
     it("Click in 'Click Here for Valid Link' Text and verify the page change ", function () {
 
         cy.get('p').contains('Valid Link').should('be.visible')
         cy.get('[href="http://demoqa.com"]').should('be.visible').click() //No deja ir a la otra pagina.
     })
 
     it("Click in 'Click Here for Broken Link' Text and verify the change page its  broken", function () {
 
         cy.get('p').contains('Broken Link').should('be.visible')
         cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').should('be.visible').click() //No deja ir a la otra pagina.
     })
 })
 
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
 
 describe("Testing the buttons with dynamic properties", function () {
 
     //Let's go to the "https://demoqa.com/" page and check the functionality of the "Dynamic Properties" button and verify the diferents properties the buttons
 
     beforeEach(function () {
 
         cy.viewport(1500, 1500)
 
         cy.visit('https://demoqa.com');
         cy.once('uncaught:exception', () => false);
 
         verifyingMenuList()
         cy.get('#item-7').click()
 
     })
 
     it("Select the 'Dynamic Properties'  button", function () {
 
         Utility.checkingUrl("/" + "dynamic-properties")
         cy.get(General.headerPrincipal).contains('Dynamic Properties')
         cy.get('#enableAfter').should('be.visible')
         cy.get('#colorChange').should('be.visible')
             .and('have.css', 'color', 'rgb(255, 255, 255)')
 
 
     })
 
     it("Verify that after 5 second change the 'Color Change' button text color", function () {
 
         cy.wait(5000)
         cy.get('#colorChange').should('be.visible')
             .and('have.css', 'color', 'rgb(220, 53, 69)')
     })
 
     it("Verify that after  5 second must be show the 'Visible After 5 Seconds' button", function () {
 
         cy.wait(5000)
         cy.get('#visibleAfter').should('be.visible')
     })
 
     it("Verify that before  5 second  in the 'Will enable 5 seconds' button  can't clicked", function () {
         cy.get('#enableAfter').should('be.visible').click()
     })
 
     it("Verify that after  5 second in the 'Will enable 5 seconds' button  we can clicked", function () {
         cy.wait(5000)
         cy.get('#enableAfter').should('be.visible').click()
     })
 
 })