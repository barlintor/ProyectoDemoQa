// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

/*Cypress.Commands.add("VerifyingMenuList",(probe, header)=>

{ 
    cy.get('.category-cards').contains(probe).click({force:true})
    cy.get(General.headerPrincipal).contains(header)
    cy.get('.element-list-collapse').should('not.exist')
}
    
)*/

Cypress.Commands.add("clickNewButton",(id, text)=>

{ 
    cy.get(id).contains(text).should('be.visible')
        .and('have.css', 'background-color', 'rgb(0, 123, 255)')
        .and('have.css', 'color', 'rgb(255, 255, 255)');
}
    
)

Cypress.Commands.add("verifyWindowShow",(id, text)=>

{ 
    cy.on(id,(str)  => {expect (str).to.equal(text)});
}
    
)

Cypress.Commands.add("moveTrigger",(id, xOpen,yOpen, xExit, yExit )=>

{ 
    cy.get(id)
            .trigger('mousedown', { which: 1, pageX: xOpen, pageY: yOpen })
            .trigger('mousemove', { which: 1, pageX: xExit, pageY: yExit })
            .trigger('mouseup')
            .wait(3000)
            .trigger('mousedown', { which: 1, pageX: xExit, pageY: yExit })
            .trigger('mousemove', { which: 1, pageX: xOpen, pageY: yOpen })
            .trigger('mouseup');
}

)

Cypress.Commands.add("moveSortable",(id, description,x, y)=>

{ 
    cy.get(id)
            .contains(description)
            .wait(300).trigger('mousedown', {which: 1, pageX: x})
            .wait(300).trigger('mousemove', {which: 1, pageX: x, pageY: y, force:true})
            .wait(300).trigger('mouseup', {force:true});
}

)
/*Cypress.Commands.add("lgnTwt",(usn: "a" ,psw: "b")=> 

{

    cy.contains('Iniciar sesión').click()
    cy.get('[autocomplete=username]').type(usn)
    cy.contains('Siguiente').click()
    cy.get('[name=password]').type(pssw)
    cy.contains('Iniciar sesión').click()
})*/


