/// <reference types="cypress" />
// Pruebas del footer de la aplicación

describe('Visualización del footer de la aplicación', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('El usuario ve todos los miembros del equipo en el footer', () => {
        cy.get('footer')
            .should('exist')
            .within(() => {
                cy.contains('Andy Garcia Sanchez').should('exist');
                cy.contains('Raquel Gonzalez Pesqueira').should('exist');
                cy.contains('David Ramirez Griño').should('exist');
                cy.contains('Jose Ramon Fernandez Peralta').should('exist');
                cy.contains('Adrian Miguel Almazan Tello').should('exist');
            });
    });
});