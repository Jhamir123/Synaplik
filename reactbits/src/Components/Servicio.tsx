import React from 'react';
import '../styles/servicio.css';

// Importación de imágenes
import consultaImage from '../assets/imagen3.jpg'; // Asegúrate de que estas rutas sean correctas
import reservaImage from '../assets/imagen1.jpg';
import pagosImage from '../assets/yape.png';
import accesoImage from '../assets/imagen4.webp';

// Importación del Chatbot
import Chatbot from '../Components/Chatbot';

const Servicios: React.FC = () => {
  return (
    <div className="services-container">
      {/* Fondo de la página */}
      <div className="background"></div> {/* Fondo con animación */}

      {/* Encabezado de Servicios */}
      <header className="services-header">
        <h1>Nuestros Servicios</h1>
        <p>
          Synaplink es más que una app: es una solución tecnológica integral para usuarios que buscan rapidez y comodidad, y para emprendedores que desean gestionar su negocio de forma inteligente.
        </p>
      </header>

      {/* Lista de servicios */}
      <div className="services-list">
        {/* Servicio 1 */}
        <div className="service-card">
          <img src={consultaImage} alt="Consulta de Disponibilidad" className="service-image" />
          <h3>Consulta de Disponibilidad</h3>
          <p>Visualiza en tiempo real qué computadoras están libres, ocupadas o próximas a liberar.</p>
        </div>

        {/* Servicio 2 */}
        <div className="service-card">
          <img src={reservaImage} alt="Reserva Remota" className="service-image" />
          <h3>Reserva Remota</h3>
          <p>Desde tu celular puedes reservar una PC disponible antes de llegar al local.</p>
        </div>

        {/* Servicio 3 */}
        <div className="service-card">
          <img src={pagosImage} alt="Pagos Digitales Seguros" className="service-image" />
          <h3>Pagos Digitales Seguros</h3>
          <p>Realiza el pago desde tu móvil usando Yape, Plin u otras billeteras compatibles con código QR.</p>
        </div>

        {/* Servicio 4 */}
        <div className="service-card">
          <img src={accesoImage} alt="Acceso Sin Contacto" className="service-image" />
          <h3>Acceso Sin Contacto</h3>
          <p>Una vez pagado, el sistema desbloquea automáticamente la PC que reservaste.</p>
        </div>

        {/* Puedes agregar más servicios si lo deseas */}
      </div>

      {/* Agregar el Chatbot aquí */}
      <Chatbot />
    </div>
  );
};

export default Servicios;
