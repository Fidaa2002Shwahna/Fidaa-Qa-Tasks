/// <reference types= "cypress"/>



// I use one scenario to write test cases 
describe('Login Page Functionality', () => {
    beforeEach(() => {
        cy.visit("https://demo.productionready.io/#/register");
    });
    it('verify that the logo is appearing correctly', () => {
        cy.get(".container").contains("conduit")
    });

    it('verify that the home link is appearing correctly', () => {
        cy.get('[show-authed="false"]').find("li").first()
    })

    it('verify that the Sign up link is appearing correctly', () => {
        cy.get('[show-authed="false"]').find("li").last()
    })

    it('verify that the Sign up heading is appearing correctly', () => {
        cy.get("h1")
    })

    it('verify that the Have an account? link is appearing correctly', () => {
        cy.contains("Have an account?")
    })

    it('verify that the username input is appearing correctly', () => {
        cy.get("form.ng-pristine").find(".form-group").first()
    })

    it('verify that the email input is appearing correctly', () => {
        cy.get("form.ng-pristine").find(".form-group").eq(1)
    })

    it('verify that the password input is appearing correctly', () => {
        cy.get("form.ng-pristine").find(".form-group").last()
    })

    it('verify that the Sign Up button is appearing correctly', () => {
        cy.get("button")
    })


    it('verify that the conduit link is appearing correctly', () => {
        cy.get(".logo-font")
    })


    it('verify that the copyright is appearing correctly', () => {
        cy.get("span")
    })

});

