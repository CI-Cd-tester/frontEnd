import "./UserIntraction";
import UserInteraction from "./UserIntraction";

describe("<UserInteration>", () =>{

    beforeEach(() => {
       // @ts-ignore
        cy.mount(<UserInteraction/>);
    });


it("renders component", ()=>{
    // @ts-ignore
    cy.mount(<UserInteraction/>)
});

describe("Ui components", ()=>{

    it("should have a password input field", ()=>{

    cy.get('input[type="password"]').should("be.visible");

    });

        it("should have an input field for encrypting text", ()=>{

        cy.get('input[type="text"]').should("be.visible");
    
            });

        it("should have encrypt button", ()=>{

            cy.get("button").contains("Encrypt").should("be.visible");
        
            });

        it("should display decrypt button after encryption process", ()=>{

                cy.get('input[type="password"]').type("testpassword");
                cy.get('input[type="text"]').type("test message");
                cy.get("button").contains("Encrypt").click();

                cy.get("button").contains("Decrypt").should("be.visible");
            
            });

            
        


})

describe("Functions test", ()=>{
    it("should display the encryptes text after encryption process", ()=>{

        cy.get('input[type="password"]').type("testpassword");
        cy.get('input[type="text"]').type("test message");
        cy.get("button").contains("Encrypt").click();

        cy.get(".resault p").contains("Encrypted text:").should("be.visible");
    
    });

    it("should ask for password before encryption process", ()=>{

        cy.get('input[type="password"]').type("testpassword");
        cy.get('input[type="text"]').type("test message");
        cy.get("button").contains("Encrypt").click();
        
        cy.get("button").contains("Decrypt").click();
        cy.get('input[type="password"]').should("have.value", "testpassword");
        cy.get(".resault p").contains("Decrypted text:").should("be.visible");



    
    });
})


})


