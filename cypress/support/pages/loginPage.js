const campoUsername = 'form > div:nth-child(2) > div > div:nth-child(2) > input'

const campoPassword = 'form > div:nth-child(3) > div > div:nth-child(2) > input'

const btnLogin = 'button[type="submit"]'

const selector = ''




Cypress.Commands.add("preencherCampoUsername", (text)=>{
    cy.sendText(campoUsername, text)
})

Cypress.Commands.add("preencherCampoPassword", (text)=>{
    cy.sendText(campoPassword,text)
})

Cypress.Commands.add("clicarBotaoLogin", ()=>{
    cy.clickElement(btnLogin)
})

Cypress.Commands.add("", (text) => {
    cy.validatedText(selector)
})


