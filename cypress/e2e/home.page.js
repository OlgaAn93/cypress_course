import BasePage from './base.page';

export default class HomePage extends BasePage  {
        static firstName = '[id="firstName"]';
        static lastName = '[id="lastName"]';
        static userEmail = '[id="userEmail"]';
        static userNumber = '[id="userNumber"]';
        static genderMaleRadio = '[id="gender-radio-1"]';
        static genderFemaleRadio = '[id="gender-radio-2"]';
        static genderOtherRadio = '[id="gender-radio-3"]';
        static dateOfBirthInput = '[id="dateOfBirthInput"]';
        static subjectsContainer = '[id="subjectsContainer"]';
        static hobbySport = '[id="hobbies-checkbox-1"]';
        static hobbyReading = '[id="hobbies-checkbox-2"]';
        static hobbyMusic = '[id="hobbies-checkbox-3"]';
        static uploadPicture = '[id="uploadPicture"]';
        static currentAddress = '[id="currentAddress"]';
        static state = '[id="state"]';
        static city = '[id="city"]';
        static submit = '[id="submit"]';
        static datePickerMonth = '.react-datepicker__month-select';
        static datePickerYear = '.react-datepicker__year-select';
    
        static fillForm(firstNameTest, lastNameTest, email, mobNumber, address) {
            cy.get(HomePage.firstName).click({ force: true }).type(firstNameTest);
            cy.get(HomePage.lastName).click({ force: true }).type(lastNameTest);
            cy.get(HomePage.userEmail).click({ force: true }).type(email);
            cy.get(HomePage.genderFemaleRadio).click({ force: true });
            cy.get(HomePage.userNumber).click({ force: true }).type(mobNumber);
            cy.get(HomePage.dateOfBirthInput).click({ force: true });
            cy.get(HomePage.datePickerMonth).click({ force: true }).get('select').eq(5).select('June');
            cy.get(HomePage.datePickerYear).click({ force: true }).get('select').eq(99).select('1990');
            cy.get(HomePage.subjectsContainer).click({ force: true }).type('Bio');
            cy.contains('Biology').click({ force: true });
            cy.get(HomePage.hobbyMusic).click({ force: true });
            cy.get(HomePage.currentAddress).click({ force: true }).type(address);
            cy.get(HomePage.submit).click({ force: true });
        }
    }
    