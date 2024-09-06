
const btnBuzz = ':nth-child(12) > .oxd-main-menu-item > .oxd-text'
const labelPost = '.oxd-buzz-post-input'
const btnPost =  '.oxd-buzz-post-slot > .oxd-button'

const btnSeta = '.oxd-main-menu-search > .oxd-icon-button'

Cypress.Commands.add("clicarBotaoBuzz", () => {
  cy.clickElement(btnBuzz);
})

Cypress.Commands.add("clicarBotaoPost", () => {
  cy.clickElement(btnPost);
})

Cypress.Commands.add("preencherCampoPost", () => {
  cy.sendText(labelPost, "Post de teste");
})



