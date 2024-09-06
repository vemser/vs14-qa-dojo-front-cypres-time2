const btnBuzz = ":nth-child(12) > .oxd-main-menu-item > .oxd-text";
const labelPost = ".oxd-buzz-post-input";
const btnPost = ".oxd-buzz-post-slot > .oxd-button";
const labelComentario = ":nth-child(2) > .oxd-input";
const btncomentario =
  ":nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-post-actions > :nth-child(2) > .oxd-icon";

const btnSeta = ".oxd-main-menu-search > .oxd-icon-button";

const comentarioTeste = "Comentário teste";
const comentario = ".orangehrm-post-comment-text";


Cypress.Commands.add("clicarBotaoBuzz", () => {
  cy.clickElement(btnBuzz);
});

Cypress.Commands.add("clicarBotaoPost", () => {
  cy.clickElement(btnPost);
});

Cypress.Commands.add("preencherCampoPost", () => {
  cy.sendText(labelPost, "Post de teste");
});

Cypress.Commands.add("clicarBotaoSeta", () => {
  cy.clickElement(btnSeta);
});

Cypress.Commands.add("clicarBotaoComentario", () => {
  cy.clickElement(btncomentario);
});

Cypress.Commands.add("preencherComentario", () => {
  cy.sendText(labelComentario, comentarioTeste);
});

Cypress.Commands.add("enviarComentario", () => {
  cy.sendText(labelComentario, "{enter}");
});

Cypress.Commands.add("validarComentarioEnviado", () => {
  cy.validatedText(comentario, comentarioTeste);
});
