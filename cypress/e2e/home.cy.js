import HomePage from './home.page';

// Define test data
let firstNameTest = 'Olga';
let lastNameTest = 'Test';
let email = 'test@gmail.com';
let mobNumber = '1234567890';
let address = 'Ukraine';

// Wrap tests in a describe block
describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('should fill form correctly', () => {
        // Fill the form with correct data
        HomePage.fillForm(firstNameTest, lastNameTest, email, mobNumber, address);

        // Assertions for successful form submission
        cy.contains('Thanks for submitting the form').should('be.visible');
        cy.get('[class="table table-dark table-striped table-bordered table-hover"]').should('be.visible');
        cy.contains(firstNameTest).should('be.visible');
        cy.contains(lastNameTest).should('be.visible');
        cy.contains(email).should('be.visible');
        cy.contains(mobNumber).should('be.visible');
        cy.contains(address).should('be.visible');
    });

    it('should fill form incorrectly with no name, lastname, email, phone number, and address', () => {
        // Fill the form with empty data
        HomePage.fillForm('', '', '', '', '');

        // Assertions for unsuccessful form submission
        cy.contains('Thanks for submitting the form').should('not.be.visible');
    });
});
