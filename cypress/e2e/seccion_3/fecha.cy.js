/// <reference types="Cypress"/>
describe("Manejo de Fechas" , () =>{

    it("fecha 1", () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1000)


        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("29/12/2023")

    })


    it.only("fecha 2", () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(1000)


        cy.get('[placeholder="Start date"]').should("be.visible").type("29/12/2023 {esc}")
        cy.wait(3000)

    })

    


})//Cierre

