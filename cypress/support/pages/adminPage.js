const btnAdmin =
  "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a";
const msgValidacaoSearch = '.oxd-table-card > .oxd-table-row > :nth-child(2) > div'

const campoUsername =
  "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input";
const btnSearch ='#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'

const btnDetelar = '#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(6) > div > button:nth-child(1)'

const btnConfirmarDelecao = '#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-modal-footer > button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin'

const msgUsuarioInvalido = '#oxd-toaster_1';

cons toster = '#oxd-toaster_1';

Cypress.Commands.add("clicarBotaoAdmin", () => {
    cy.clickElement(btnAdmin);
})

Cypress.Commands.add("preencherUserName", () => {
    cy.sendText(campoUsername, "Admin");
})

Cypress.Commands.add("preencherUserNameInvalid", () => {
    cy.sendText(campoUsername, "invalid");
})

Cypress.Commands.add("clicarBtnSearch", ()=>{
    cy.clickElement(btnSearch)
})

Cypress.Commands.add("clicarBtnDelecao", ()=>{
    cy.clickElement(btnDetelar)
})

Cypress.Commands.add("clicarBtnConfirmarDelecao", ()=>{
    cy.clickElement(btnConfirmarDelecao)
})

Cypress.Commands.add("validacaoTextoBusca",() =>{
    cy.validatedText(msgValidacaoSearch, "Admin")
})

Cypress.Commands.add("validacaoTextoUsuarioNaoEncontrado",() =>{
    cy.validatedText(msgValidacaoSearch, "No Records Found")
})

Cypress.Commands.add("validacaoTextoDeletarUsuario",() =>{
    cy.validatedText(msgValidacaoSearch, "")
})