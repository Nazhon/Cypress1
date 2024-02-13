/// <reference types="cypress"/>

describe("Primer test con cypress", () =>{
    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("bienvenidos a Cypress")
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Jorge") 
        cy.wait(3000)  
        cy.get("#wsf-1-field-22").type("Sánchez") 
        cy.wait(1000)  
        cy.get("#wsf-1-field-23").type("nazho15.js@gmail.com") 
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("569 33392256") 
        cy.wait(1000)
        cy.get("#wsf-1-field-28").type("Demo de la dirección")
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)
        cy.log("test")
    })


})