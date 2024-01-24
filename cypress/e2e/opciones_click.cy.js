/// <reference types="Cypress"/>
describe("Opciones de Click", () =>{

    it("Click Sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should("be.visible").click()
    })

    it("Click Force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();
        //Click en admin
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
        //Click en job
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should("be.visible").click({force:true})
    })


    it.only("Click en coordenadas (X,Y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123");
        cy.get('.oxd-button').should("be.visible").click();

        cy.get('.oxd-topbar-header-title').should("be.visible").click(50,5);
        cy.get('.oxd-topbar-header-title').should("be.visible").click(70,5);
    })


})//Cierre
