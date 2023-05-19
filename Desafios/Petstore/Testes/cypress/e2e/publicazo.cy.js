describe('Minha primeira suite de testes', () => {
  beforeEach(() => {
  cy.visit('http://publicazo.insprak.com')

} )

  it('Validar cadastro de usuarios', () =>{

      cy.contains('Entrar').click()
      cy.get('#user_email').type('matheusssodre98@gmail.com')
      cy.get('#user_password').type('M@th123')
      cy.get('input[name="commit"]').click()

      // Verifica se a mensagem de erro é exibida

      cy.get('.toast-message').should('contain', 'Email ou senha inválidos.')

      // Verifica se há um link para cadastrar

      cy.contains('Cadastre-se').should('be.visible').click()


      // Verifica se a página de cadastro foi carregada corretamente

      cy.url().should('include', '/sign_up')

      // Realizar cadastro

      cy.get('#user_fullname').type('Matheus Sodré dos Santos')
      cy.get('#user_email').type('matheusssodre98@gmail.com')
      cy.get('#user_password').type('M@th123*')
      cy.get('#user_password_confirmation').type('M@th123*')
      cy.get('input[name="commit"]').click()




})

})



