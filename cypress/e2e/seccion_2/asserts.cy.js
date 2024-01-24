/// <reference types="Cypress"/>
describe("Sección 3 -> Asserts" , () =>{

    //Al desplegar un menú de opciones de una "Clase padre" se puede volver a utilizar la misma para acceder a las opciones
    it("Asserts -> Contains", () => {
        cy.visit("https://www.automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get(".left-sidebar").should("be.visible").contains("Women").click().then(()=>{
            cy.get(".left-sidebar").should("be.visible").contains("Dress").click()
        })                
    })
    

    it.only("Selects find", () => {
        cy.visit("https://www.automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get(".left-sidebar").should("be.visible").contains("Women").click().then(()=>{
            cy.get(".left-sidebar").should("be.visible").contains("Dress").click()
        })                

        cy.get(".features_items").should("be.visible").click()
    })



})//Cierre