import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de nosotros</h1>

      <section id="info">
        <h2>Equipo nº 6</h2>
        <p>
          Aplicación web para la consulta de estaciones de servicio,
          visualización de precios de carburantes y localización de gasolineras.
        </p>
      </section>

      <section id="members">
        <h2>Miembros y aportaciones</h2>
        <ul>
          <li><strong>Andy Garcia Sanchez:</strong> desarrollo y validación de pruebas funcionales.</li>
          <li><strong>Raquel Gonzalez Pesqueira:</strong> integración con la API de carburantes y corrección de funcionalidades existentes.</li>
          <li><strong>David Ramirez Griño:</strong> implementación de la página About, actualización del footer y desarrollo de pruebas Cypress.</li>
          <li><strong>Jose Ramon Fernandez Peralta:</strong> revisión de componentes y validación de la navegación de la aplicación.</li>
          <li><strong>Adrian Miguel Almazan Tello:</strong> apoyo en pruebas, documentación y revisión final del proyecto.</li>
        </ul>
      </section>
    </div>
  )
}

export default About