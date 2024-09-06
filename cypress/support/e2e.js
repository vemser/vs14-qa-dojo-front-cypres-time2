import "./commands";
import "./pages/basePage";
import "./pages/loginPage";
import "./pages/esqueciSenhaPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit("/");
  Cypress.Screenshot.defaults({
    overwrite: true,
    disableTimersAndAnimations: true,
  });
});
