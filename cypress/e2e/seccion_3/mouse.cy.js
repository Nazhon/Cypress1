/// <reference types="Cypress"/>

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe("Cypress eventos Mouse", () =>{
    
    it("Drag an drop", () => {
        let tiempo=1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should("eq","The Internet")
        cy.wait(1000)
        
        cy.get("#column-a").drag("#column-b",{force:true})

    })

    
    it("Drag an drop 2", () => {
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1000)
        /*
        for(let i = 2;i++;i>4){
            cy.get('#todrag > :nth-child('+i+')').drag('#mydropzone', {force:true})
        }
        */
        
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone', {force:true}) 
        
    })




    it("Drag an drop 2", () => {
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1000)
        /*
        for(let i = 2;i++;i>4){
            cy.get('#todrag > :nth-child('+i+')').drag('#mydropzone', {force:true})
        }
        */
        
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone', {force:true})
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone', {force:true}) 
        
    })


    it.only("Drag an drop 2", () => {
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title().should("eq","Selenium Easy - Drag and Drop Range Sliders")
        cy.wait(tiempo)
        
        cy.get('#slider1 > .range > input').invoke("attr","value","90")
        cy.wait(tiempo)
        cy.get('#slider3 > .range > input').invoke("attr","value","90")
        cy.wait(tiempo)
        cy.get('#slider5 > .range > input').invoke("attr","value","90")
    })



})//Cierre

