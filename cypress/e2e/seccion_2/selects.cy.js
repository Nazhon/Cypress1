/// <reference types="Cypress"/>
describe("Sección 2 -> Selects" , () =>{

    it("Selects uno", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        cy.get('#select-demo').should("be.visible").select("Friday").should("have.value","Friday")
        cy.wait(1000)
        cy.get('#select-demo').should("be.visible").select("Saturday").should("have.value","Saturday")
    })
    

    it("Selects Ferrari", () => {
        cy.visit("https://www.google.cl")
        cy.title().should('eq','Google')
        cy.wait(1000)

        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")

        cy.get('.MUFPAc > :nth-child(2) > a').click()

    })
    


    it("Selects tres -> MultiSelect", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        cy.get('#multi-select').should("be.visible").select(["California","Ohio","Washington"])
        cy.wait(1000)
    })



    it.only("Selects tres -> MultiSelect con Then" , () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
        cy.wait(1000)

        cy.get('#multi-select').should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get('#printMe').should("be.visible").click()

        })
        cy.wait(1000)
    })
    




    
})//Cierre

