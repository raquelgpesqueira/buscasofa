/// <reference types="cypress" />

describe('Página About', () => {
    beforeEach(() => {
        cy.visit('/about');
    });

    it('Muestra el número de equipo y los miembros', () => {

        cy.contains('Equipo nº 6').should('exist');

        cy.contains('Andy Garcia Sanchez').should('exist');
        cy.contains('Raquel Gonzalez Pesqueira').should('exist');
        cy.contains('David Ramirez Griño').should('exist');
        cy.contains('Jose Ramon Fernandez Peralta').should('exist');
        cy.contains('Adrian Miguel Almazan Tello').should('exist');

    });
});
