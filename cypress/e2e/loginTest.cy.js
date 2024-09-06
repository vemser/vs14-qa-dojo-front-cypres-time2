describe('LoginFeature', () => {
  it.only('LoginComSucesso', () => {
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
  })

  it.only('LoginComSenhaInvalida', () => {
    cy.preencherCampoUsername("Admin")
    cy.preencherCampoPassword("admin1234")
    cy.clicarBotaoLogin()
    cy.verifText("Invalid credentials")

  })

  it.only('LoginComEmailInvalio', () => {
    cy.preencherCampoUsername("Admin123")
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
    cy.verifText("Invalid credentials")
  })

  it.only('LoginComUsernameVazio', () => {
    cy.preencherCampoPassword("admin123")
    cy.clicarBotaoLogin()
    cy.verifTextRequired("Required")
  })



})