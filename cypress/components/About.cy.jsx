/// <reference types="Cypress" />
import About from '../../src/components/About'

describe('<About />', () => {
  it('renders', () => {
    cy.mount(<About />).then(() => {

      cy.get('h1')
        .should('contain', 'Acerca de nosotros')

      cy.get('#info')
        .should('contain', 'Equipo nº 6')

      cy.contains('Andy Garcia Sanchez').should('exist')
      cy.contains('Raquel Gonzalez Pesqueira').should('exist')
      cy.contains('David Ramirez Griño').should('exist')
      cy.contains('Jose Ramon Fernandez Peralta').should('exist')
      cy.contains('Adrian Miguel Almazan Tello').should('exist')

    })
  })
})
