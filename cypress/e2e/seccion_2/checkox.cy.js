/// <reference types="Cypress"/>
describe("Sección 2 -> Checkbox" , () =>{

    it("Check uno", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(1500)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })


    it("Check select", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(1000)

        cy.get('#isAgeSelected').check().should("be.checked")
        cy.wait(1500)
        cy.get('#isAgeSelected').uncheck().should("not.be.checked")


        cy.xpath("(//input[@type='checkbox'])[7]").check().should("be.checked")
        cy.xpath("(//input[@type='checkbox'])[7]").uncheck().should("not.be.checked")

    })

    it.only("Radio button", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Radio buttons demo for Automation')
        cy.wait(1000)


        cy.get('.panel-body > :nth-child(3) > input').click()
    })



    


})//Cierre

