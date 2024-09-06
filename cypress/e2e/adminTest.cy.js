describe("Admin", () => {
  beforeEach(() =>{
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
  })

  it("BuscarUsuario", () => {

    cy.clicarBotaoAdmin()
    cy.preencherUserName()
    cy.clicarBtnSearch()
    cy.validacaoTextoBusca()
  });
});
