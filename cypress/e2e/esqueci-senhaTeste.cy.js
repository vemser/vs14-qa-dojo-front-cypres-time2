describe("EsqueciSenha", () => {
  it("EsqueciMinhaSenha", () => {
    cy.clicarBotaoEsqueciSenha();
    cy.preencherUserName();
    cy.clicarBotaoConfirmacao();
    cy.msgEsqueciSenha();
  });
});
