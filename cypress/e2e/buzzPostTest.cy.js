describe("Admin", () => {
  beforeEach(() =>{
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
  })
  it('Ct-01 Postar No feed', () => {
    cy.clicarBotaoBuzz()
    cy.preencherCampoPost()
    cy.clicarBotaoPost()
  });
  
});
