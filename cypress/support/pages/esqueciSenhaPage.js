const btnFgtPassword = "form > div.orangehrm-login-forgot > p";
const btnFgtPasswordConfirm =
  ".orangehrm-forgot-password-button-container button:nth-child(2)";
const campoUserName = ".oxd-input";
const msgSucesso = "h6";

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
