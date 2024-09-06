describe("EsqueciSenha", () => {
  it("EsqueciMinhaSenha", () => {
    cy.clicarBotaoEsqueciSenha();
    cy.preencherUserName();
    cy.clicarBotaoConfirmacao();
    cy.msgEsqueciSenha();
  });  
  
  it("EsqueciMinhaSenhaUsernameVazio", () => {
    cy.clicarBotaoEsqueciSenha();
    cy.clicarBotaoConfirmacao();
    cy.validateUsernameVazio();
  });
});
