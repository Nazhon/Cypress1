/// <reference types="Cypress"/>
describe("SEgundo Reto" , () =>{

    it("Probando la Aplicación", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.wait(1500)
        cy.get("#searchsubmit").should("be.visible").click()


        //Add
        cy.get('#add').should("be.visible").click()
        cy.get("[name='name'").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2021-03-15").tab().type("2025-03-15")

        //Combo
        cy.get('#company').should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get('.primary').should("be.visible").should("be.enabled").click()

        cy.wait(1500)
        cy.xpath("//input[contains(@id,'searchbox')]").type("cypress")
        cy.wait(1500)
        cy.get("#searchsubmit").should("be.visible").click()

    })




})//Cierre

