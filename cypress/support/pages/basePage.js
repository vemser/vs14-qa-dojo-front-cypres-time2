Cypress.Commands.add("clickElement", (seletor, options = {})=>{
    cy.get(seletor).click(options)
})

Cypress.Commands.add("sendText", (seletor, text) =>{
    cy.get(seletor).focus().type(text)
})

Cypress.Commands.add("getTexto", (seletor)=>{
    return cy.get(seletor).invoke('text')
})

Cypress.Commands.add("validatedText", (selector, text) => {
    cy.get(selector).should('be.visible').should('has.text', text)
})