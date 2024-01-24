/// <reference types="Cypress"/>

import 'cypress-file-upload'

describe("Upload imagenes" , () =>{

    it("Cargar imagen", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","DEMOQA")
        cy.wait(1000)

        const ruta="gato.jpg"
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(3000)

    })
})//Cierre

