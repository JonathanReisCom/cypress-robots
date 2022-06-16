describe('The Login Page', () => {
    
  it("Auth", () => {
    cy.visit("/");

    // Type user
    cy.get("#username")
      // Delay each keypress by 0.1 sec
      .type(Cypress.env("USER"), { delay: 100 })
      .should("have.value", Cypress.env("USER"));

    // Type pass
    cy.get("#password")
      // Delay each keypress by 0.1 sec
      .type(Cypress.env("PASS"), { delay: 100 })
      .should("have.value", Cypress.env("PASS"));

    // Click on button to login
    cy.get('[data-cy="btn-signin"]').click()
    
    // Click in Accept Cookies
    cy.get('#i18n-3').click()
  })

  it("Enter course", () => {

    // Access First Course
    // cy.get('#ember2344 > .grid > .col-start-11 > .btn').click()

    // cy.get('.ember-view dashboard-access-list-item').should('have.length', 1)

    cy.get('.dashboard-access-list-item > div').within(($el) => {
      console.log($el)
      // cy.get('input[name="email"]').type('john.doe@email.com')
      // cy.get('input[name="password"]').type('password')
      // cy.root().submit()
    })


    /*
    // Click on "Menu" item
    cy.get('#i18n-12').click()

    // Expandir tudo
    cy.get('.expander-triangle__closed-right').each(($el, index, $list) => {
      $el.scrollIntoView().click()
      cy.wait(1000)
    })

    // Identificar quem não está completo
    cy.contains(/^features-\w+/).click();
    cy.get('.syllabus__topic--non-expandable-title-text').each(($el, index, $list) => {
      cy.contains(/^features-\w+/).click();
      cy.get(/#emberw+/)

    // cy.get('.icon-circle').each(($el, index, $list) => {
    //   $el.click()
    //   cy.wait(500)
    })

    // ember-view syllabus__topic syllabus__topic--non-expandable
    // icon-circle

    */
  });

})

