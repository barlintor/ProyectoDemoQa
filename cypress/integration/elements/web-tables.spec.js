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

 
 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Elements').click({force:true})
     cy.get(General.headerPrincipal).contains('Elements')
     cy.get('.element-list-collapse').should('not.exist')
 }

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
            .contains(nameTable3)
        cy.get(General.webTableUser.sectionTable).eq(2)
            .contains(nameTable2)
        cy.get(General.webTableUser.sectionTable).eq(3)
            .contains(nameTable1)
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
            .contains(lastNameTable1)
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