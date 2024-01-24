/// <reference types="Cypress"/>

const datos= require("../../fixtures/datos.json")

describe("Test en páginas de Amicar" , () =>{


    it("Flujo corto de cotización", () => {
        cy.visit("https://amices.testing.amicar.com/login")
        cy.title().should("eq","Amicar")

        cy.get("#loginEmailInput").should("be.visible").type("devtest+amicesejecutivo@amicar.cl")
        cy.get("#loginPasswordInput").should("be.visible").type("HHxzd069")
        cy.get('.MuiButton-label').should("be.visible").click()
        cy.wait(2000)
    })
    it("Nueva simulación, datos cliente", () =>{
        cy.get('[data-cy="newSimulationButton"] > .MuiButton-label').should("be.visible").click()
        cy.wait(2000)
        cy.xpath("//div[@role='button']").should("be.visible").click()
        cy.xpath("//li[@id='CYPRESS LOCAL PRUEBAS']").click()
        cy.xpath("//div[@id='mui-component-select-Vendedor']").click()
        cy.xpath("//li[contains(@id,'CYPRESS VENDEDOR')]").click()

        cy.get('[data-cy="fullrut"] > .MuiInputBase-root > .MuiInputBase-input').should("be.visible").type(datos.rut)
        cy.get('[data-cy="name"] > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('[data-cy="submitFirstStepButton"]').should("be.visible").click()
    })

    it("resto del codigo", () =>{

        cy.get('[data-cy="priceList"] > .MuiInputBase-root > .MuiInputBase-input').should("be.visible").type(datos.pLista)
        cy.get('[data-cy="amount"] > .MuiInputBase-root > .MuiInputBase-input').should("be.visible").type(datos.pie)
        cy.xpath("//span[@class='MuiButton-label'][contains(.,'36')]").should("be.visible").click()

        cy.get('#mui-component-select-vehicleType').should("be.visible").click()
        cy.xpath("//li[contains(@id,'PARTICULAR - NUEVO')]").should("be.visible").click()

        cy.xpath("//div[@id='mui-component-select-loanType']").should("be.visible").click()
        cy.xpath("//li[contains(@id,'CRÉDITO CONVENCIONAL')]").should("be.visible").click()

        cy.xpath("//div[@id='mui-component-select-rateTypes']").should("be.visible").click()
        cy.xpath("//li[@id='CC NORMAL DERCO']").should("be.visible").click()

        cy.xpath("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column MuiGrid-align-items-xs-center']")
        .should("be.visible").click()

        cy.xpath("//span[@class='MuiButton-label'][contains(.,'Siguiente')]").should("be.visible").click()

        cy.get('[data-cy="brandNameAutoComplete"] > .MuiFormControl-root > .MuiInputBase-root')
        .should("be.visible").click()
        cy.xpath("//li[contains(.,'SUZUKI')]").should("be.visible").click()
        

        cy.get('[data-cy="modelNameAutoComplete"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root')
        .should("be.visible").click()
        cy.xpath("//li[contains(.,'ALTO')]").should("be.visible").click()
    
      
        cy.get('[data-cy="yearNameSelect"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root')
        .should("be.visible").click()
        cy.xpath("//li[contains(.,'2024')]").should("be.visible").click()
        

        cy.xpath("//span[@class='MuiButton-label'][contains(.,'Guardar Simulación')]").should("be.visible").click()
        cy.wait(1000)
        cy.xpath("//span[@class='MuiButton-label'][contains(.,'Crear como Solicitud')]").should("be.visible").click()
        //cy.wait(2000)

        //Validate rut 
        cy.xpath("//input[contains(@name,'customer.identificationValue')]").should("be.visible").should("have.value",datos.rut)
        
        //validate name
        cy.xpath("//input[contains(@name,'customer.name')]").should("be.visible").should("have.value",datos.nombre)

        
        cy.xpath("//input[contains(@name,'customer.lastName')]").should("be.visible").should("have.value",datos.pApellido)
        cy.xpath("//input[contains(@name,'customer.phone')]").should("be.visible").should("have.value","+56"+datos.fono)
        cy.xpath("//input[contains(@name,'customer.email')]").should("be.visible").should("have.value",datos.correo)
        cy.xpath("//input[contains(@value,'SUZUKI')]").should("be.visible").should("have.value",datos.marcaAuto)

        cy.xpath("//input[contains(@name,'customer.dob')]").should("be.visible").type(datos.fechaNacimiento)
        //Nacionalidad
        cy.xpath("//div[contains(@id,'mui-component-select-customer.nationality')]").should("be.visible").click()
        cy.xpath("//li[contains(@id,'CHILENO')]").should("be.visible").click()


        //region
        cy.get(':nth-child(5) > [data-cy="region"] > .MuiFormControl-root > .MuiInputBase-root')
        .should("be.visible").type(datos.region, "{downArrow}")
        cy.wait(1000)
        cy.xpath("//li[contains(.,'region metropolitana')]").should("be.visible").click()
        cy.wait(1000)
        cy.get(':nth-child(6) > [data-cy="commune"] > .MuiFormControl-root > .MuiInputBase-root').should("be.visible").type(datos.comuna, "{downArrow}")
        cy.xpath('/html/body/div[2]/div/ul/li').should("be.visible").click()

        cy.xpath("//input[@name='customer.address']").should("be.visible").type(datos.calle)
        cy.xpath("//div[@id='mui-component-select-customerRequestData.maritalStatus']").should("be.visible").click().then(()=>{
            cy.get("#SOLTERO").should("be.visible").click()
        })
        
        cy.get(':nth-child(3) > .sc-bIMZcE > .MuiGrid-container > :nth-child(10)').should("be.visible").click().then(()=>{
            cy.xpath("/html/body/div[2]/div[3]/ul/li").should("be.visible").click()
        })

        cy.get('[data-cy="customerActivity.workType"]').should("be.visible").click().then(()=>{
            cy.get("#DEPENDIENTE").should("be.visible").click()
        })


        cy.get(':nth-child(4) > .sc-bIMZcE > .MuiGrid-container > :nth-child(2)').should("be.visible").click().then(()=>{
            cy.get("#FIJO").should("be.visible").click()
        })

        cy.get('[data-cy="customerActivity.activityTypeId"] > .MuiFormControl-root > .MuiInputBase-root').should("be.visible").click().type("Artesano").then(()=>{
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
            
        })

        cy.xpath("//input[@name='customerActivity.workEntryDate']").should("be.visible").click().type("12/10/2021")

        cy.xpath("//input[@name='customerActivity.employerName']").should("be.visible").type("Test Empleador")

        cy.xpath("//input[@name='customerActivity.workPhone']").should("be.visible").type("933392256")

        cy.get('[data-cy="customerActivity.businessSectorId"] > .MuiFormControl-root > .MuiInputBase-root').should("be.visible").click()
        .type("Energia").then(()=>{
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
            cy.wait(4000)
        })

        cy.get(':nth-child(11) > [data-cy="region"] > .MuiFormControl-root > .MuiInputBase-root')
        .should("be.visible").click()
        .type(datos.regionEmpleador).then(()=>{
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
        })

        cy.get(':nth-child(12) > [data-cy="commune"] > .MuiFormControl-root > .MuiInputBase-root').should("be.visible").click().type(datos.comuna).then(()=>{
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
        })

        cy.get('[data-cy="submitFirstStepButton"]').should("be.visible").click()


        cy.xpath("//input[@name='income.salary']").should("be.visible").type(datos.sueldoLiquido)    

           
        cy.get('[data-cy="submitFirstStepButton"]').should("be.visible").click()


        cy.xpath("/html/body/div/div/div[1]/div[1]/div[2]/div/form/div[1]/div/div/button/span[1]").should("be.visible").click()



        //Datos antecedentes compra para

        cy.xpath("//input[@name='buyForAnother.identificationValue']").should("be.visible").type(datos.rutAval)

        cy.xpath("//input[@name='buyForAnother.name']").should("be.visible").type("Nombre")
        cy.xpath("//input[@name='buyForAnother.lastName']").should("be.visible").type("Apellido")
        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[8]/div/div/div/div/input").should("be.visible").click()
        .type(datos.region).then(()=> {
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
        })

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[9]/div/div/div/div/input").should("be.visible").click()
        .type(datos.comuna).then(()=> {
            cy.xpath("/html/body/div[2]/div/ul/li[1]").should("be.visible").click()
        })

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[10]/div/div/div/input").should("be.visible")
        .type(datos.calle)

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[11]/div/div/div/div").should("be.visible").click()
        .then(()=>{
            cy.xpath("//li[@id='CHILENO']").should("be.visible").click()
        })

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[12]/div/div/div/input").should("be.visible")
        .type(datos.fechaNacimiento)


        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[13]/div/div/div/div").should("be.visible")
        .click().then(()=>{
            cy.get("#SOLTERO").should("be.visible").click()
        })

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[14]/div/div/div").should("be.visible").click().then(()=>{
            cy.xpath("/html/body/div[2]/div[3]/ul/li").should("be.visible").click()
        })


        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[15]/div/div/div").should("be.visible").click().then(()=>{
            cy.get("#DEPENDIENTE").should("be.visible").click()
        })


        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[16]/div/div/div/div/input").should("be.visible")
        .type("Artesano")
        .then(()=>{
            cy.xpath("//li[contains(.,'artesano')]").should("be.visible").click()
        })

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[1]/div[17]/div/div/div/input").should("be.visible")
        .type("1200000")

        
        cy.xpath("//input[@name='buyForAnother.motherLastName']").should("be.visible").click()
        
        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[2]/div/button[1]/span[1]").should("be.visible")
        .click()

        cy.xpath("/html/body/div/div/div/div[1]/div[2]/div/form/div[3]/div/button/span[1]").should("be.visible").click()


        cy.wait(2000)

        cy.get('[data-cy="submitFirstStepButton"] > .MuiButton-label').should("be.visible").click()

        cy.wait(2000)
        cy.get('[data-cy="addBankButton"]').should("be.visible").click()

        cy.wait(2000)
        cy.get('[data-cy="bankInformation[0].codeId"] > .MuiFormControl-root > .MuiInputBase-root').should("be.visible").click().then(()=>{
           cy.xpath("/html/body/div/div/div[1]/div[1]/div[2]/div/form/div[1]/div/div[1]/div/div[1]/div/div/div/div/input").type("Bice")
           .type("{downArrow}").type("{enter}")
        })

        cy.get('[data-cy="bankInformation[0].accountNumber"] > .MuiInputBase-root > .MuiInputBase-input')
        .should("be.visible").type("123213")

        cy.get('[data-cy="saveDataBankInformation"]').should("be.visible").click()
        cy.get('[data-cy="submitFirstStepButton"]').should("be.visible").click()
        
        cy.get('[data-cy="sendRequestToEvaluate"]').should("be.visible").click()

        //API
    })
    

    


})//Cierre

