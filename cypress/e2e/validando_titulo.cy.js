/// <reference types="Cypress"/>

describe("Sección 1 Validando el Título", () =>{

    it("Test -> Validar titulo de la página", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")

        cy.log("OK, la función tittle funcionó bien")
    })

    


})//Cierre

