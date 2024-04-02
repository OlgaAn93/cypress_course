class BasePage {
	static pause(milliseconds) {
		cy.wait(milliseconds);
	}

	static logInfo(message) {
		cy.log(message);
	}
}

export default BasePage;