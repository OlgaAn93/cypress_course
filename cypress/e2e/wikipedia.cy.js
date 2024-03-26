/// <reference types="cypress" />

describe('Wikipedia Navigation', () => {
    it('Should navigate to Wikipedia homepage', () => {

        cy.visit('https://www.wikipedia.org/');

        cy.url().should('eq', 'https://www.wikipedia.org/');
    });

    it('Click English language', () => {

        cy.visit('https://www.wikipedia.org/');

        cy.get('[id="js-link-box-en"]').click({ force: true });
        
        cy.contains('articles in English').should('exist');
    });

    it('Check visibility of elements', () => {

        cy.visit('https://www.wikipedia.org/');

        cy.get('[id="js-link-box-en"]').click({ force: true });
        
        cy.get('[id="pt-createaccount-2"]').should('be.visible');
        
        cy.get('[id="pt-login-2"]').should('be.visible');
        
        cy.get('[id="vector-user-links-dropdown"]').should('be.visible');
    });
});