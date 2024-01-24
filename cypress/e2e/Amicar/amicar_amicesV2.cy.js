/// <reference types="Cypress"/>

const datos= require("../../fixtures/datos.json")

describe("Segunda versión del Flujo de cotización " , () =>{

    it("Ingreso a la página de Amices", () => {
        cy.visit("/")
        cy.title().should("eq","Search")
    })


    it("Login como ejecutivo", () =>{
        cy.get('[data-cy="loginEmailInputContainer"]').should("be.visible")
        .type(datos.usuario)
        cy.get('[data-cy="loginPasswordInputContainer"]').should("be.visible")
        .type(datos.clave)

        //cy.get
    })
    


})//Cierre
