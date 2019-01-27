context('E-got end to end tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should go to suggested routes and show first description', () => {
    // https://on.cypress.io/each
    cy.get('.btn').contains('Turysta').click()
    cy.wait(500) // nie wiem jak to ładniej rozwiązać, żeby czekało aż się strona przeładuje
    cy.location('pathname').should('include', 'turist')
    cy.get('.btn').contains('Zobacz proponowane trasy').click()
    cy.get('.form-control').select('Tatry i Podtatrze polskie')
    cy.wait(1000)
    cy.get('.card-body').within( () => {
      cy.get('button').first().click()
    })
    cy.get('.modal-content')
  })

})
