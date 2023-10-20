describe('My First Test', () => {
    beforeEach('Does not do much!', () => {
      cy.visit ('https://example.cypress.io/todo');
    })

    it('verify TODO list display 2 items by default', () => {
      cy.get('.todo-list li').should('have.length',2);

    })


    it('verify content of listed items on TODO list', ()=>{

      cy.get('.todo-list li').first().should('have.text','Pay electric bill');
      cy.get('.todo-list li').last().should('have.text','Walk the dog');

    })

    it('it can add new items', () => {
      const newItem = 'Feed the cat';

      cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

      cy.get('.todo-list li')
        .should('have.length',3)
        .last()
        .should('have.text',newItem);


    })



  })