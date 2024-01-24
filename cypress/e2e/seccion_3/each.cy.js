/// <reference types="Cypress"/>
describe("Bucles" , () =>{

    it("For uno ", () => {
        
        for(let i=1;i<=100;i=i+2){
            cy.log("rodrigo "+i)
        }
    })

    it("For dos ", () => {
        
        for(let i=1;i<=10;i++){
            let t=5
            cy.log(t + "x" + i + " = " +t*i)
        }
    })

    it("For en página ", () => {
        cy.visit("https://www.tiendaauka.com/productos/")
        cy.title().should("eq","Comprá online productos en auka.tienda")
        cy.wait(1000)


        cy.get('[class="item"]').should("be.visible").each(($el,index,$list)    =>{
            //cy.log($el.text())
            let ropa=$el.text()
            cy.log(ropa)
        })
        /*
        
        
        for(let i=1;i<=10;i++){
            let t=5
            cy.log(t + "x" + i + " = " +t*i)
        }
        */
    })


    it.only("For en página ", () => {
        cy.visit("https://www.tiendaauka.com/productos/")
        cy.title().should("eq","Comprá online productos en auka.tienda")
        cy.wait(1000)


        cy.get('[class="item"]').should("be.visible").each(($el,index,$list)    =>{
            //cy.log($el.text())
            let ropa=$el.text()
            if(ropa.includes("CAMISAS AUKA UNISEX")){
                cy.wrap($el).click()
            }
        })
        
        
        
    })


})//Cierre

