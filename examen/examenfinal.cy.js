
   describe('login', () =>{
    it('visit login', () => {
        cy.visit('http://demo.vetagile.com/login')
        cy.get('[name="email"]').type('ludk17@gmail.com')
        cy.get('[name="password"]').type('123456qwerty')
        cy.get('[type="submit"]').click()
        cy.get('.navbar-avatar').click()
        cy.visit('http://demo.vetagile.com/admin/species')
        cy.visit('http://demo.vetagile.com/template/admin.species.create')

        
        
        //navbar-avatacy.get('#submitButton').should('have.value', 'Acceder')
     })
   });