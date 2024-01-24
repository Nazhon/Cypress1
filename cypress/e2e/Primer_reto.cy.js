/// <reference types="Cypress"/>
describe("Primer reto" , () =>{

    it("Reto", () => {
        //Ingresa a la página
        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq","DEMOQA");
        cy.wait(1000);

        //Busqueda
        cy.get('#searchBox').should("be.visible").type("Cierra");
        cy.get('#searchBox').should("be.visible").clear();
        cy.wait(1000);

        //Ingreso nuevo registro
        cy.get('#addNewRecordButton').should("be.visible").click();
        cy.get('#firstName').should("be.visible")
        .type("Jorge").tab()
        .type("Sánchez").tab()
        .type("nazho@gmail.com").tab()
        .type("35").tab()
        .type("30000").tab()
        .type("IT");
        cy.get('#submit').should("be.visible").click();


        //Editar registro
        cy.get('#searchBox').should("be.visible").type("Jorge");
        cy.get("#edit-record-4").should("be.visible").click();
        cy.get("body > div.fade.modal.show > div > div").should("be.visible");
        cy.get('#age').should("be.visible").clear().type("28");
        cy.get('#salary').should("be.visible").clear().type("1000");
        cy.get('#submit').should("be.visible").click();
        cy.wait(3000);

        //Borrar registro
        cy.get('#searchBox').should("be.visible").clear().type("Jorge");
        cy.get("#delete-record-4").should("be.visible").click();



    })

    


})//Cierre

