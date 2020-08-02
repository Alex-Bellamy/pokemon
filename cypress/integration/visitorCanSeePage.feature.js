describe('App interface', () => {
  it('successfully renders', () => {
    cy.visit('/')
    cy.get("#header").should('contain', 'Filter Pokemon by Gender')
    cy.get('#sub-header').should('contain', 'Which Pokemon will win the battle?')
    cy.get('input#search').should('exist')
    cy.get('button#find').should('exist')
  })
})