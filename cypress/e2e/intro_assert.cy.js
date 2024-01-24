/// <reference types="Cypress"/>
describe("Introducción a los assert", () =>{

    it("Demo de los asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("JOrge")
        cy.get("#lastName").should("be.visible").type("Sánchez")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("nazho15.js@gmail.com");
    })

    


})//Cierre
