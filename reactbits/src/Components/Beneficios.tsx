import React from 'react';
import '../styles/beneficios.css'; // Asegúrate de que el archivo CSS esté importado

// Importación de imágenes
import rapidezImage from '../assets/imagen2.webp'; // Asegúrate de que estas rutas sean correctas
import controlImage from '../assets/imagen5.jpeg';
import ingresosImage from '../assets/imagen6.webp';
import seguridadImage from '../assets/imagen7.jpeg';
import estadisticasImage from '../assets/imagen8.webp';
import contactoImage from '../assets/imagen9.avif';

// Importación del Chatbot
import Chatbot from '../Components/Chatbot';

const Beneficios: React.FC = () => {
  return (
    <div className="benefits-container">
      {/* Fondo de la página */}
      <div className="background"></div> {/* Aquí agregamos la clase para el fondo */}

      {/* Encabezado de Beneficios */}
      <header className="benefits-header">
        <h1>Beneficios de usar Synaplink</h1>
        <p>Synaplink no solo moderniza el acceso a las cabinas de internet, sino que mejora la experiencia del cliente y optimiza la gestión del negocio. Aquí te mostramos cómo:</p>
      </header>

      {/* Lista de beneficios */}
      <div className="benefits-list">
        {/* Beneficio 1 */}
        <div className="benefit-card">
          <img src={rapidezImage} alt="Rapidez y Comodidad" className="benefit-image" />
          <h3>Rapidez y Comodidad</h3>
          <p>Desde tu celular puedes encontrar, reservar y usar una PC en segundos, sin hacer filas ni esperar.</p>
        </div>

        {/* Beneficio 2 */}
        <div className="benefit-card">
          <img src={controlImage} alt="Control Total desde el Móvil" className="benefit-image" />
          <h3>Control Total desde el Móvil</h3>
          <p>Administra todo el proceso desde la app: pagos, tiempos y selección de cabina.</p>
        </div>

        {/* Beneficio 3 */}
        <div className="benefit-card">
          <img src={ingresosImage} alt="Aumento de Ingresos" className="benefit-image" />
          <h3>Aumento de Ingresos</h3>
          <p>El sistema trabaja 24/7, permitiendo operar sin personal y maximizando las ganancias por cada hora de uso.</p>
        </div>

        {/* Beneficio 4 */}
        <div className="benefit-card">
          <img src={seguridadImage} alt="Mayor Seguridad" className="benefit-image" />
          <h3>Mayor Seguridad</h3>
          <p>Evita robos o mal uso de los equipos gracias al acceso automático controlado por el sistema.</p>
        </div>

        {/* Beneficio 5 */}
        <div className="benefit-card">
          <img src={estadisticasImage} alt="Estadísticas en Tiempo Real" className="benefit-image" />
          <h3>Estadísticas en Tiempo Real</h3>
          <p>Visualiza informes de uso, ingresos, y rendimiento desde un panel de administración online.</p>
        </div>

        {/* Beneficio 6 */}
        <div className="benefit-card">
          <img src={contactoImage} alt="Sin Contacto Físico" className="benefit-image" />
          <h3>Sin Contacto Físico</h3>
          <p>Ideal para entornos donde se busca reducir la interacción directa entre personas.</p>
        </div>
      </div>

      {/* Aquí agregamos el Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Beneficios;
