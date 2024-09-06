const btnFgtPassword = 'form > div.orangehrm-login-forgot > p'

Cypress.Commands.add("clicarBotaoEsqueciSenha", ()=>{
    cy.clickElement(btnFgtPassword)
})