/// <reference types="Cypress" />

import { constant } from "lodash";

/**
 * @desc utility functions       
 * @author Benigno Pascual with mentoring Jesus Dos Santos
 */

export const checkingUrl = url => cy.url().should('contain', url)

export const errorCss = element => cy.get(element).should('have.css', 'border-top-color', 'rgb(255, 0, 0)') //This line checks that the email is spelled incorrectly
             .and('have.css', 'border-bottom-color', 'rgb(255, 0, 0)')
             .and('have.css', 'border-left-color', 'rgb(255, 0, 0)')
             .and('have.css', 'border-right-color', 'rgb(255, 0, 0)')

export const redColors = element => cy.get(element).should('have.css', 'border-color', 'rgb(220, 53, 69)')
export const greenColors = element => cy.get(element).should('have.css', 'border-color', 'rgb(40, 167, 69)')