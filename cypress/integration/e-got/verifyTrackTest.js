context('e-GOT add and delete track to verify', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should go to suggested routes and show first description', () => {
    // https://on.cypress.io/each
    cy.get('.btn').contains('Turysta').click()
    cy.wait(500) // nie wiem jak to ładniej rozwiązać, żeby czekało aż się strona przeładuje
    cy.location('pathname').should('include', 'turist')
    cy.get('.btn').contains('Dodaj przebytą trasę').click()
    cy.wait(500)
    cy.get('.btn').contains('Dodaj odcinek do zatwierdzenia').click()
    cy.wait(500)
    cy.location('pathname').should('include', 'track-evidence-form')

    cy.get('#__BVID__22').select('Tatry i Podtatrze polskie')
    cy.get('#__BVID__24').select('Siwa Polana')
    cy.get('#__BVID__26').select('Polana Huciska')
    cy.get('.datepicker-custom').click()
    cy.get('div > :nth-child(14)').click()
    cy.get('#__BVID__34').click('right')
    cy.get('.btn').click()
    cy.wait(500)
    cy.location('pathname').should('include', 'tracks-evidence')
    cy.get(':nth-child(1) > .card-body > .card-title').contains('Siwa Polana-Polana Huciska')
    cy.get(':nth-child(1) > .card-body > div > [style="float: right;"] > .btn').click()
    cy.wait(500)
    cy.get('p').contains('Jesteś pewnien, że chcesz usunąć trasę Siwa Polana - Polana Huciska')
    cy.get('.btn-primary').click()
    cy.wait(500)
    cy.get(':nth-child(1) > .card-body > .card-title').contains('Siwa Polana-Polana Huciska').should('not.exist')

  })

})
