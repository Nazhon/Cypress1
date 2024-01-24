/// <reference types="Cypress"/>
describe("Selectores", () =>{

    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA");
        cy.wait(2000);


        cy.get("#userName").should("be.visible").type("Ejemplo");
        cy.get('#userEmail').should("be.visible").type("demo@gmail.com");
    })


    it("Selector por atributo", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA");
        cy.wait(2000);


        cy.get('[placeholder="Full Name"]').should("be.visible").type("Jorge ignacio");
        cy.get('[placeholder="name@example.com"]').should("be.visible").type("demo@gmail.com");
    })

    it("Selector por XPath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","DEMOQA");
        cy.wait(2000);
        cy.xpath("//*[@id='userName']").should("be.visible").type("Jorge");
        cy.wait(2000);
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("demo@gmail.com");
        cy.wait(1000);
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("demo de xpath");
    })


    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","DEMOQA");
        cy.wait(2000);
        cy.get(".custom-control-label").contains("Female").click();
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click();
        cy.wait(1000)
    })


    it.only("Selector por Copy selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","DEMOQA");
        cy.wait(2000);
        cy.get("#userNumber").should("be.visible").type("12312312")
        cy.wait(1000)
    })

})//Cierre

