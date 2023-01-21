import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    getGreeting().contains('Pogi');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
  });
});
