describe("Vistors can find male pokemon", () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/gender/male',
      response: "fixture:males.json",
    });
    cy.visit("/");
  });

 it("visitor can use search facility to find the male pokemon", () => {
    cy.get('input').type("male");
    cy.get("button#find").click();
  })
    
    it("displays the first male pokemon", () => {
      cy.get('#result-1').should('contain', "bulbasaur")
  })

  it("displays last male pokemon", () => {
    cy.get('#result-676').should('contain', "lurantis")
    });
})