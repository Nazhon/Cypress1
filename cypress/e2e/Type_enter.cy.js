/// <reference types="Cypress"/>


describe("Functiones para Type" , () =>{

    it("Type => Enter", () => {
        cy.visit("https://www.google.cl/")
        cy.title().should("eq","Google")
        cy.wait(1500)

        cy.get("[name='q']")
        .type("cypress io {enter}")
        //concatena los comandos en js

        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
    })

    


})//Cierre
