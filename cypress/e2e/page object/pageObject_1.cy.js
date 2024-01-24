import ProyectoUno_PO from "../../support/pageOBjects/proyectoUno_PQ/proyectoUno_PO.cy"
/// <reference types="Cypress"/>



describe("page object models" , () =>{

    const master= new ProyectoUno_PO()

    Cypress.on('uncaught:exception', (err, Runnable) => {
        return false
    })

    it('test uno', () =>{
        master.visitHome()
    })

    it("sección uno", () =>{
        master.seccionUno("jorge","sanchez","nazho15.js@gmail.com",1000)
    })


})//Cierre


