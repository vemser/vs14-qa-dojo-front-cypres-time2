describe('LoginFeature', () => {
  it('LoginComSucesso', () => {
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
  })

  it('LoginComSenhaInvalida', () => {
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin1234")
    cy.clicarBotaoLogin()
    cy.validatedText()

  })

})