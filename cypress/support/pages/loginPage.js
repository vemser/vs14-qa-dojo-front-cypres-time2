const campoUsername = 'form > div:nth-child(2) > div > div:nth-child(2) > input'

const campoPassword = 'form > div:nth-child(3) > div > div:nth-child(2) > input'

const btnLogin = 'button[type="submit"]'

const selector = '#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p'

const requiredUsername = ".oxd-input-group > .oxd-text"


Cypress.Commands.add("preencherCampoUsername", (text) => {
    cy.sendText(campoUsername, text)
})

Cypress.Commands.add("preencherCampoPassword", (text) => {
    cy.sendText(campoPassword, text)
})

Cypress.Commands.add("clicarBotaoLogin", () => {
    cy.clickElement(btnLogin)
})

Cypress.Commands.add("verifText", (text) => {
    cy.validatedText(selector, text)
})

Cypress.Commands.add("verifTextRequired", (text) => {
    cy.validatedText(requiredUsername, text)
})
