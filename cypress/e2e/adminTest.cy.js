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
  
  it.only("BuscarUsuarioInexistente", () => {
    cy.clicarBotaoAdmin()
    cy.preencherUserNameInvalid()
    cy.clicarBtnSearch()
    cy.validacaoTextoUsuarioNaoEncontrado()
  });
  
  it("DeletarUsuario", () => {
    cy.clicarBotaoAdmin()
    cy.clicarBtnDelecao()
    cy.clicarBtnConfirmarDelecao()
    cy.validacaoTextoDeletarUsuario()
  });

  



});
