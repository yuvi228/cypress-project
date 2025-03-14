describe('My First Cypress Test', () => {
    it('Visits the Example Cypress Page', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
      cy.url().should('include', '/commands/actions');
    });
  });
    