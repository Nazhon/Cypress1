/// <reference types="Cypress"/>


describe("Ejemplo función Tab", () =>{

    it("Type con Tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").type("Jorge").tab().
        type("Sánchez").tab().
        type("nazho15.js@gmail.com");
    })

})//Cierre
