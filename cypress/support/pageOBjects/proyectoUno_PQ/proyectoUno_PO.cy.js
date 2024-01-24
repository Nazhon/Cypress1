class ProyectoUno_PO{

    visitHome(){
        let tiempo=1000
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html'),
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
    }
    
    seccionUno(name,last_name,email,tiempo){
        let t=tiempo
        cy.xpath("//input[@name='first_name']")
        .should("be.visible").clear().type(name)
        cy.wait(t)
        cy.xpath("//input[@name='last_name']")
        .should("be.visible").clear().type(last_name)
        cy.wait(t)
        cy.xpath("//input[@name='email']")
        .should("be.visible").clear().type(email)
        cy.wait(t)
    }



}//final del código


export default ProyectoUno_PO