const btnFgtPassword = "form > div.orangehrm-login-forgot > p";
const btnFgtPasswordConfirm =
  ".orangehrm-forgot-password-button-container button:nth-child(2)";
const campoUserName = ".oxd-input";
const msgSucesso = "h6";
const msgRequired = ".oxd-input-group span";

Cypress.Commands.add("clicarBotaoEsqueciSenha", () => {
  cy.clickElement(btnFgtPassword);
});

Cypress.Commands.add("preencherUserName", () => {
  cy.sendText(campoUserName, "Admin");
});

Cypress.Commands.add("clicarBotaoConfirmacao", () => {
  cy.clickElement(btnFgtPasswordConfirm);
});

Cypress.Commands.add("msgEsqueciSenha", () => {
  cy.validatedText(msgSucesso, "Reset Password link sent successfully");
});

Cypress.Commands.add("validateUsernameVazio", () => {
  cy.validatedText(msgRequired, "Required");
});
