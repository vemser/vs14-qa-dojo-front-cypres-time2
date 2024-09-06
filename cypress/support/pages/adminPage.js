const btnAdmin =
  "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a";
const msgValidacaoSearch = '.oxd-table-card > .oxd-table-row > :nth-child(2) > div'

const campoUsername =
  "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input";
const btnSearch ='#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'

Cypress.Commands.add("clicarBotaoAdmin", () => {
    cy.clickElement(btnAdmin);
})

Cypress.Commands.add("preencherUserName", () => {
    cy.sendText(campoUsername, "Admin");

})

Cypress.Commands.add("clicarBtnSearch", ()=>{
    cy.clickElement(btnSearch)
})

Cypress.Commands.add("validacaoTextoBusca",() =>{
    cy.validatedText(msgValidacaoSearch, "Admin")
})