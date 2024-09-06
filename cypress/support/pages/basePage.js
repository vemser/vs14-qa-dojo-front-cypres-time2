Cypress.Commands.add("clickElement", (seletor, options = {})=>{
    cy.get(seletor).click(options)
})

Cypress.Commands.add("sendText", (seletor, text) =>{
    cy.get(seletor).focus().type(text)
})

Cypress.Commands.add("get", (seletor)=>{
    return cy.get(seletor).invoke('text')
})