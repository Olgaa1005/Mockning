const dbConnect = require("./dbConnect")

describe('Tester mot Databas', () => {

  beforeEach(() => {
    cy.visit("/")
  })

  afterEach( () => {
    //dbConnect.execute("DELETE FROM user WHERE name = 'Test';")
  })

  it('Skapa en ny Post i Databas', () => {
    //cy.visit('https://example.cypress.io')
    cy.get("#name").type("Test")
    cy.get("#email").type("test@test.se")

    cy.get('form').submit() // Submit a form

    cy.get('h1').should('contain.text', "Databas")
/*
    //Kontrollera att Test-user är i databas
    //Hämta data från Databas
    const user = await dbConnect.execute('SELECT * FROM users WHERE name = "Test";')
    expect(user).to.have.lengthOf(1)
    /*
    dbConnect.execute('SELECT * FROM users WHERE name = "Test";')
    .then((result) => {
    expect(result).to.have.lengthOf(1)
    })
    */
  })

})