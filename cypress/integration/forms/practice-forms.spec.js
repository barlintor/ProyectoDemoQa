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
 
 const name = 'Joan';
 const lastName = 'Marti';

 const imageFile = 'aaaaaa.png';
 const txtFile = 'hi.txt';

 const verifyingMenuList = () =>{ 
     cy.get('.category-cards').contains('Forms').click({force:true})
     cy.get(General.headerPrincipal).contains('Forms')
     cy.get('.element-list-collapse').should('not.exist')
 }

 describe("Testing the Practice Form", function () {
    //Let's go to the "https://demoqa.com/" page and verify the functionality of the "Links" button throught the verify the links and image are valid or invalid
    beforeEach(function () {

        cy.viewport(1500, 1500)

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);         

        verifyingMenuList()
        cy.get('.menu-list').contains('Practice Form').click({force:true}) 

    })

    it("Enter in DemoQa main page", function () {

        cy.visit('https://demoqa.com');
        cy.once('uncaught:exception', () => false);  

        verifyingMenuList()
        Utility.checkingUrl("/" + "forms")
    })

    it("Select the 'Practice Form' button", function () {
        
        Utility.checkingUrl("/" + "automation-practice-form")
        cy.get(General.headerPrincipal).contains('Practice Form')

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).should('be.visible')
        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible')
        cy.get('#userEmail').should('be.visible')
        cy.get('#genterWrapper').contains('Gender').should('be.visible')
        cy.get('#gender-radio-1').should('be.visible')
        cy.get('#gender-radio-2').should('be.visible')
        cy.get('#gender-radio-3').should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).should('be.visible')
        cy.get('#dateOfBirth-label').should('be.visible')
        cy.get(General.buttonsForms.fieldDateOfBirth).should('be.visible')
        cy.get('#subjectsWrapper').should('be.visible') 
        cy.get('.subjects-auto-complete__value-container').should('be.visible') 
        cy.get(General.buttonsForms.fieldHobbiesWrapper).should('be.visible')
        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Sports')
        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Reading')  
        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Music')
        cy.get('.form-label').contains('Picture')
        cy.get('.form-file-label').contains('Select picture')
        cy.get('#uploadPicture').should('be.visible')
        cy.get('#currentAddress-label').should('be.visible')
        cy.get('#currentAddress').should('be.visible')
        cy.get('#stateCity-label').should('be.visible')
        cy.get(General.buttonsForms.fieldStates).contains('Select State')
        cy.get('#stateCity-wrapper').contains('Select City')
        cy.get(General.buttonsForms.submitButton).should('be.visible')

    })

    it("Fill the 'First Name' field  with only letters", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type(name)

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)

    })

    it("Fill the 'First Name' field  with only Numbers", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type('5624568')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)  //In this case the field mark in green, but must be show mark in red because the name only must be letters

    })

    it("Fill the 'First Name' field  with only  characters Alphanumeric", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type('sad124s')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)  //In this case the field mark in green, but must be show mark in red because the name only must be letters

    })

    it("Leave the 'First Name' field blank", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldFirstName) 

    })

    it("Fill the 'First Name' field  with one space in blank", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type(' ')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)   //In this case the field mark in green, but must be show mark in red because the name only must be letters

    })

    it("Fill the 'Last Name' field  with only letters", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).type(lastName)

        cy.get(General.buttonsForms.submitButton).click()   
        Utility.greenColors(General.buttonsForms.fieldLastName)   

    })
    
    it("Fill the 'Last Name' field  with only Numbers", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).type('3333445')

        cy.get(General.buttonsForms.submitButton).click()   
        Utility.greenColors(General.buttonsForms.fieldLastName)    //In this case the field mark in green, but must be show mark in red because the last name only must be letters

    })

    it("Fill the 'Last Name' field  with only  characters Alphanumeric", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).type('ssd12ddds')

        cy.get(General.buttonsForms.submitButton).click()   
        Utility.greenColors(General.buttonsForms.fieldLastName)    //In this case the field mark in green, but must be show mark in red because the last name only must be letters

    })

    it("Leave the 'Last Name' field blank", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        
        cy.get(General.buttonsForms.submitButton).click()   
        Utility.redColors(General.buttonsForms.fieldLastName)    

    })

    it("Fill the 'Last Name' field  with one space in blank", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).type(' ')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldLastName)   //In this case the field mark in green, but must be show mark in red because the name only must be letters

    })

    it("Fill the 'First Name' field  and filln't 'Last Name' field ", function () {

        cy.get('fieldUserNameLabel').should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type(name)

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)
        Utility.redColors(General.buttonsForms.fieldLastName)   

    })

    it("Fill the 'Last Name' field  and filln't 'First Name' field ", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldLastName).type(lastName)

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldFirstName)
        Utility.greenColors(General.buttonsForms.fieldLastName)   

    })

    it("Fill the 'Last Name' field  and fill the 'First Name' field ", function () {

        cy.get(General.buttonsForms.fieldUserNameLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldFirstName).type(name)
        cy.get(General.buttonsForms.fieldLastName).type(lastName)

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldFirstName)
        Utility.greenColors(General.buttonsForms.fieldLastName)   

    })

    it("Fill the 'Email' field  in this case write a only numbers", function () {

        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible') 
        cy.get(General.buttonsForms.fieldEmail).type('564789') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldEmail)

    })

    it("Fill the 'Email' field  in this case  without @", function () {

        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible') 
        cy.get(General.buttonsForms.fieldEmail).type('joanmartingmail.com') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldEmail)

    })

    it("Fill the 'Email' field", function () {

        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible') 
        cy.get(General.buttonsForms.fieldEmail).type('joanmartin@gmail.com') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldEmail)

    }) 
    
    it("Fill the 'Email' field in this case write with one especial character", function () {

        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible') 
        cy.get(General.buttonsForms.fieldEmail).type('joanm..artin@gmail.com') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldEmail)

    }) 

    it("Fill the 'Email' field in this case write the extension without '.'", function () {

        cy.get(General.buttonsForms.fieldEmailLabel).should('be.visible') 
        cy.get(General.buttonsForms.fieldEmail).type('joanmartin@gmailcom') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldEmail)

    }) 

    it("Select the 'Male' checkbutton in Gender Field", function () {

        cy.get('#genterWrapper').contains('Gender').should('be.visible')
        cy.get('#gender-radio-1').click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    }) 

    it("Select the 'Female' checkbutton in Gender Field", function () {

        cy.get('#genterWrapper').contains('Gender').should('be.visible')
        cy.get('#gender-radio-2').click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    }) 

    it("Select the 'Other' checkbutton in Gender Field", function () {

        cy.get('#genterWrapper').contains('Gender').should('be.visible')
        cy.get('#gender-radio-3').click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    }) 

    it("Selectn't  nothing checkbutton in the gender field", function () {

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors('.custom-control-label')

    })

    it("Fill the 'Mobile' field in this case write five (5) characters", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('asdfg') 

        cy.get(General.buttonsForms.submitButton).click()   
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write nine (9) characters ", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('asdfgqwert') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write nine (10) characters ", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('asdfgqwerty') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write ten (10) characters", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('asdfgqwerty') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write five (5) Codes ASCII", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('¿!,·$') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write nine (9) Codes ASCII", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('!·$%&/()=') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write ten (10 ) Codes ASCII", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('!·$%&/()=!') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)

    })

    it("Fill the 'Mobile' field in this case write five (5) numbers ", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('12345') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldMobileNumber)  //In this case the field mark in green, but must be show mark in red because the mobile number only must be greater or equal than 10

    })

    it("Fill the 'Mobile' field in this case write nine (9) numbers ", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('123456789') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldMobileNumber)  //In this case the field mark in green, but must be show mark in red because the mobile  number only must be greater  or equal than 10

    })

    it("Fill the 'Mobile' field in this case write ten (10) numbers ", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type('1234567890') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldMobileNumber)  

    })

    it("Fill the 'Mobile' field  with one space in blank", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')
        cy.get(General.buttonsForms.fieldMobileNumber).type(' ') 

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)    

    })

    it("Leave the 'Mobile' field blank", function () {

        cy.get(General.buttonsForms.fieldMobileNumberLabel).should('be.visible')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.redColors(General.buttonsForms.fieldMobileNumber)           

    })

    it("Selectn't  the 'Date Of Birth'", function () {

        cy.get(General.buttonsForms.fieldDateOfBirth).click()
        cy.get('.react-datepicker__month-container').should('be.visible')
        cy.get('.react-datepicker__current-month').should('be.visible')
        cy.get('.react-datepicker__month-select').should('be.visible')

        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldDateOfBirth)

    })

    it("Select the Day,  Month and year in 'Date Of Birth' displayed", function () {

        cy.get(General.buttonsForms.fieldDateOfBirth).click()

        cy.get('.react-datepicker__month-select').select('November')
        cy.get('.react-datepicker__year-select').select('2023')
        cy.get('.react-datepicker__week').contains('23').click()
        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldDateOfBirth)

    })

    it("Select in the  'Date Of Birth' displayed only Month", function () {

        cy.get(General.buttonsForms.fieldDateOfBirth).click()

        cy.get('.react-datepicker__month-select').select('April')
        cy.get('.react-datepicker__week').contains('24').click()
        cy.get(General.buttonsForms.submitButton).click()
        Utility.greenColors(General.buttonsForms.fieldDateOfBirth)

    })

    it("Fill the 'Subjects' field in this case write only letters", function () {
        
        cy.get(General.buttonsForms.fieldSubjects).type('Proyecto')
        cy.get(General.buttonsForms.submitButton).click()
        
    })

    it("Fill the 'Subjects' field in this case write only numbers", function () {
        
        cy.get(General.buttonsForms.fieldSubjects).type('5487956')
        cy.get(General.buttonsForms.submitButton).click()
        
    })

    it("Fill the 'Subjects' field in this case write only Codes ASCII", function () {
        
        cy.get(General.buttonsForms.fieldSubjects).type('!·$%&/()=')
        cy.get(General.buttonsForms.submitButton).click()
        
    })

    it("Fillin't the 'Subjects field'", function () {
        
        cy.get(General.buttonsForms.fieldSubjects).type(' ')
        cy.get(General.buttonsForms.submitButton).click()
        
    })

    it("Select the 'Sport' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.submitButton).click()

    }) 

    it("Select the 'Reading' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})
        cy.get(General.buttonsForms.submitButton).click()

    }) 

    it("Select the 'Music' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})
        cy.get(General.buttonsForms.submitButton).click()
        
    }) 

    it  ("Select the 'Sport' checkbutton  and the 'Reading' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    })
    
    it("Select the 'Reading' checkbutton and the 'Music' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    })
    it("Select the 'Sport' checkbutton  the and 'Music' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    }) 
    
    it("Select the three checkbutton  'Sport', 'Reading' and 'Music' checkbutton in Hobbies Field", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

    })

    it("Uncheck the three selected check buttons", function () {

        cy.get(General.buttonsForms.fieldHobbiesWrapper).contains('Hobbies').should('be.visible')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})

        cy.wait(2000)
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieReading).click({force: true})
        cy.get(General.buttonsForms.fieldHobbieMusic).click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

        //Utility.greenColors(General.buttonsForms.fieldHobbieSport)

    })

    it("Click in 'Seleccionar archivo' button and select one picture", function () {

        cy.get('#uploadPicture').attachFile(imageFile) //Upload the picture selected
        cy.get('#uploadPicture').should('be.visible')
        //cy.get('#uploadPicture').contains('aaaaaa.png')
    })

    it("Click in 'Seleccionar archivo' button and select one file with extension is .txt", function () {

        cy.get('#uploadPicture').attachFile(txtFile) //Upload the picture selected
        cy.get('#uploadPicture').should('be.visible')
        //cy.get('.form-control-file').contains('hi.txt')           Need search that i show the name the file
    })

    it("Click in 'Seleccionar archivo' button and not select anything.", function () {

        cy.get('#uploadPicture').click() //Upload the picture selected
        //cy.get('.form-control-file').contains('aaaaaa.png')
    })

    it("Fill the 'Current Address' field", function () {

        cy.get('#currentAddress').type('Tokyo 2565')
        cy.get(General.buttonsForms.submitButton).click()  
        Utility.greenColors('#currentAddress')
    })

    it("Select the first option in 'Select State'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('NCR').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first state
        
    })

    it("Select the firsts options in 'Select State' and 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('NCR').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Delhi').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first state
        
    })

    it("Select the first option in 'Select State' and  the second option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('NCR').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Gurgaon').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first state
        
    })

    it("Select the first option in 'Select State' and the third option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('NCR').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Noida').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first state
        
    })

    it("Select the second option in 'Select State' ", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Uttar Pradesh').click({force: true})
    
    })

    it("Select the second options in 'Select State' and  the first option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Uttar Pradesh').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Agra').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first city
        
    })

    it("Select the second options in 'Select State' and  the second option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Uttar Pradesh').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Lucknow').click({force: true})
        //cy.get(General.buttonsForms.submitButton).click()     //it does not allow to do the test because it does not allow to select the first city
        
    })

    it("Select the second options in 'Select State' and  the third option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Uttar Pradesh').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Merrut').click({force: true})
        
        
    })

    it("Select the third option in 'Select State' ", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Haryana').click({force: true})

    })

    it("Select the third options in 'Select State' and  the first option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Haryana').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Karnal').click({force: true})
          //it does not allow to do the test because it does not allow to select the first city
    })

    it("Select the third options in 'Select State' and  the second option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Haryana').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Panipat').click({force: true})
          
    })

    it("Select the fourth option in 'Select State' ", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Rajasthan').click({force: true})
          
    })

    it("Select the fourth options in 'Select State' and  the first option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Rajasthan').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Jaipur').click({force: true})

        //it does not allow to do the test because it does not allow to select the first city
          
    })

    it("Select the fourth options in 'Select State' and  the first option in 'Select City'", function () {

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Rajasthan').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Jaiselmer').click({force: true})
          
    })

    it("Complete all the fields", function () {

        cy.get(General.buttonsForms.fieldFirstName).type(name)
        cy.get(General.buttonsForms.fieldLastName).type(lastName)
        cy.get(General.buttonsForms.fieldEmail).type('joanmartin@gmail.com')
        cy.get('#gender-radio-1').click({force: true})
        cy.get(General.buttonsForms.fieldMobileNumber).type('1234567890')

        cy.get(General.buttonsForms.fieldDateOfBirth).click()
        cy.get('.react-datepicker__month-select').select('November')
        cy.get('.react-datepicker__year-select').select('2023')
        cy.get('.react-datepicker__week').contains('23').click()

        cy.get(General.buttonsForms.fieldSubjects).type('Work')
        cy.get(General.buttonsForms.fieldHobbieSport).click({force: true})
        cy.get('#currentAddress').type('Japon')

        cy.get(General.buttonsForms.fieldStates).click()
        cy.get(General.buttonsForms.fieldStates).contains('Haryana').click({force: true})

        cy.get(General.buttonsForms.fieldCity).click()
        cy.get(General.buttonsForms.fieldCity).contains('Panipat').click({force: true})

        cy.get(General.buttonsForms.submitButton).click()

        cy.get('.modal').should('be.visible')
        cy.get('.table-responsive').contains('Joan Marti')
        cy.get('.table-responsive').contains('joanmartin@gmail.com')
        cy.get('.table-responsive').contains('Male')
        cy.get('.table-responsive').contains('1234567890')
        cy.get('.table-responsive').contains('23 November,2023')
        cy.get('.table-responsive').contains('Sports')
        cy.get('.table-responsive').contains('Japon')
        cy.get('.table-responsive').contains('Haryana Panipat')
    
    })

    
    /*it.only("Testing twitter xD", function () {  //

        cy.get('#userName-wrapper').children().nextAll().find('#firstName')
          
    }) */

    it.only("Testing twitter xD", function () {  //

        cy.get('#userName-wrapper').children().nextAll().find('#firstName')
          
    }) 
    



})