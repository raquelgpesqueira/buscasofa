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

        cy.contains('desarrollo y validación de pruebas funcionales').should('exist');
        cy.contains('integración con la API de carburantes').should('exist');
        cy.contains('implementación de la página About').should('exist');
        cy.contains('revisión de componentes').should('exist');
        cy.contains('apoyo en pruebas').should('exist');
    });
});
