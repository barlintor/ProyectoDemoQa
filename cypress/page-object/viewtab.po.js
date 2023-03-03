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

        this.buttonsForms ={
            fieldUserNameLabel: '#userName-label',
            fieldFirstName: '#firstName',
            fieldLastName: '#lastName',
            fieldEmail: '#userEmail',
            fieldEmailLabel: '#userEmail-label',
            fieldMobileNumberLabel: '#userNumber-label', 
            fieldMobileNumber: '#userNumber',
            fieldDateOfBirth:  '#dateOfBirthInput',
            fieldSubjects: '.subjects-auto-complete__value-container',
            fieldHobbiesWrapper: '#hobbiesWrapper',
            fieldHobbieSport: '#hobbies-checkbox-1',
            fieldHobbieReading: '#hobbies-checkbox-2',
            fieldHobbieMusic: '#hobbies-checkbox-3',
            fieldCity: '#city',
            fieldStates: '#state',
            submitButton: '#submit'
        }

        this.buttonsAlerts = {
            fieldCol: '.col-md-6',
            fieldTimerAlertButton: '#timerAlertButton',
            confirmButton: '#confirmButton',
            promptButton: '#promtButton',
            windowAlert: 'window:alert',
            windowConfirm: 'window:confirm',

            fieldSmallModal: '#showSmallModal',
            fieldLargeModal: '#showLargeModal',
            fieldModalContent: '.modal-content',
            fieldModalHeader: '.modal-header',
            closeButton :'.close',
            fieldModalBody: '.modal-body',
        }

        this.buttonsWidgets = {


            fieldSectionHeading: '#section1Heading',
            fieldSectionContent: '#section1Content',
            field2SectionHeading: '#section2Heading',
            field2SectionContent: '#section2Content',
            field3SectionHeading: '#section3Heading',
            field3SectionContent: '#section3Content',

            autocompleteMultiple: '#autoCompleteMultiple',
            autocompleteSingle: '#autoCompleteSingle',
            letterBinFirstOption: '#react-select-2-option-0',
            colorMagentaInFirstOption: '#react-select-2-option-1',
            colorAquaInFirstOption: '#react-select-2-option-2',
            letterBinSecondOption: '#react-select-3-option-0',
            fieldDayMonthYear: '#datePickerMonthYearInput',
            fieldDateAndTime: '#dateAndTimePickerInput',
            containerMonth: '.react-datepicker__month-container',
            dropdownFieldOfMonth: '.react-datepicker__month-select',
            dropdownFieldOfYears: '.react-datepicker__year-select',
            fieldMonthAndYear: '.react-datepicker__current-month',
            dropdownfieldOfMonth2Option: '.react-datepicker__month-read-view',
            dropdownfieldOfYears2Option: '.react-datepicker__year-read-view',
            rightTimeList: '.react-datepicker__time-list',

            progressBar: '#progressBar',
            startStopButton: '#startStopButton',
            resetButton: '#resetButton',

            tabWhat: '#demo-tab-what',
            tabWhatInformation: '#demo-tabpane-what',
            tabOrigin: '#demo-tab-origin',
            tabOriginInformation: '#demo-tabpane-origin',
            tabUse: '#demo-tab-use',
            tabUseInformation: '#demo-tabpane-use',

            buttonHoverMe: '#toolTipButton',
            textFieldToolTip: '#toolTipTextField',
            textToolTopContainer: '#texToolTopContainer',
            hoverText: '.tooltip-inner',

            showMenu: '#nav',
            firstDropdownMenu: '#withOptGroup',
            dropdownSelectOne: '#selectOne',
            oldSelectMenu: '#oldSelectMenu',
            multiSelectMenu: '#cars',
            headingGroup1Menu1: '#react-select-2-group-0-heading',
            option1Group1: '#react-select-2-option-0-0',
            option2Group1: '#react-select-2-option-0-1',
            headingGroup2Menu1: '#react-select-2-group-1-heading',
            option1Group2: '#react-select-2-option-1-0',
            option2Group2: '#react-select-2-option-1-1',
            rootOption: '#react-select-2-option-2',
            anotherRootOption: '#react-select-2-option-3',
            drSelected: '#react-select-3-option-0-0',
            mrSelected: '#react-select-3-option-0-1',
            mrsSelected: '#react-select-3-option-0-2',
            msSelected: '#react-select-3-option-0-3',
            profSelected: '#react-select-3-option-0-4',
            otherSelected: '#react-select-3-option-0-5',
            blueOption: '#react-select-4-option-1',
            blackOption: '#react-select-4-option-2',

            
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

