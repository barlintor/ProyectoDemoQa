/// <reference types="Cypress" '.rt-tr'/>

class General { 
    constructor(){
        this.userName = '#userName';
        this.userEmail = '#userEmail';
        this.userCurrentAddress = '#currentAddress';
        this.userPermanentAddress = '#permanentAddress';
        this.submitButton = '#submit';
        this.notificationMessage = '.mb-1';
        this.headerPrincipal = '.main-header';
        this.emailField = '#email';

        this.webTableUser = {
            modelPanel : '.modal',
            buttonAdd : '#addNewRecordButton',
            firstName: '#firstName',
            lastName: '#lastName',
            userAge: '#age',
            salaryUser: '#salary',
            userDepartment: '#department',
            sectionTable: '.rt-tr',
            headerTable: '.rt-resizable-header-content',
            newForm: '.modal-content',
            editButtonUser: '#edit-record-2',
        }

        this.buttonsElements ={
            dobleClickButton: '#doubleClickBtn',
            rightClickButton: '#rightClickBtn',
            singleClickButton: '.btn-primary',

        }
    }
}
/*
class WebTableUser{

    constructor(){
        this.modelPanel = '.modal';
        this.buttonAdd = '#addNewRecordButton';
        
    }

}*/


//const webTableUser = new WebTableUser();
const general = new General();
export { general as General};   

