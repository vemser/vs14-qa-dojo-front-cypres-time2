describe("Admin", () => {
  beforeEach(() => {
    cy.preencherCampoUsername("Admin");
    cy.preencherCampoPassword("admin123");
    cy.clicarBotaoLogin();
  });
  it("Ct-01 Postar No feed com sucesso", () => {
    cy.clicarBotaoBuzz();
    cy.preencherCampoPost();
    cy.clicarBotaoPost();
  });

  it.only("Ct-02 Postar comentário com sucesso", () => {
    cy.clicarBotaoBuzz();
    cy.clicarBotaoComentario();
    cy.preencherComentario();
    cy.enviarComentario();
    cy.validarComentarioEnviado();
  });
});
