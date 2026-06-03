/// <reference types="cypress" />

describe('Perfil de usuario', () => {

  it('Permite registrarse, iniciar sesión y visualizar los datos del perfil', () => {

    const timestamp = Date.now();

    const username = `usuario${timestamp}`;
    const email = `usuario${timestamp}@test.com`;
    const password = '123456';

    // Registro
    cy.visit('/registro');

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.contains('Registrarse').click();

    // Login
    cy.visit('/login');

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.contains('Entrar').click();

    // Perfil
    cy.contains('Perfil').click();

    // Verificaciones
    cy.contains('Perfil de usuario').should('exist');

    cy.contains('Usuario:').should('exist');
    cy.contains(username).should('exist');

    cy.contains('Email:').should('exist');
    cy.contains(email).should('exist');

    cy.contains('Fecha de registro:').should('exist');
  });

});