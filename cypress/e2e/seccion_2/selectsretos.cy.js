/// <reference types="Cypress"/>
describe("Sección 2 -> Selects" , () =>{

    it("Selects uno", () => {
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1000)


       //cy.get("#pickList > div > div:nth-child(1) > select").should("be.visible").select(["Isis","Isabella","Luiza"])
        //add
        cy.get(".pickData").should("be.visible").select(["Isis","Isabella","Luiza"]).then(()=>{
            //primera "promesa"
            cy.get('.pAdd').should("be.visible").click().then(()=>{
                //Segunda "promesa"
                cy.wait(2000)
                cy.get('.pAddAll').should("be.visible").click().then(()=>{
                    //tercera "promesa"
                    cy.wait(2000)
                    cy.get('.pRemoveAll').should("be.visible").click().then(()=>{
                        //Cuarta "promesa"
                        cy.log(2000)
                        cy.log("se movieron todos los elementos")
                    })
                })
            })
       })
    })
    



    
})//Cierre

