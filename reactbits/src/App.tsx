import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashCursor from './Animations/SplashCursor/SplashCursor';
import TrueFocus from './TextAnimations/TrueFocus/TrueFocus'; 
import Inicio from './Components/Inicio';
import Login from './Components/Login';
import Registrarse from './Components/Registrarse';
import Servicio from './Components/Servicio';
import Beneficios from './Components/Beneficios';
import Chatbot from './Components/Chatbot'; 
import PrivateRoute from './Components/PrivateRoute'; // Asegúrate de importar PrivateRoute
import Logout from './Components/Logout';

import './App.css';
import logo from './assets/Imagen de WhatsApp 2025-07-20 a las 21.25.40_6cf5149f.jpg'; 
import imagen from './assets/Imagen de WhatsApp 2025-07-20 a las 21.25.40_6cf5149f.jpg'; // Importa la imagen que quieres insertar

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="background"></div>

        <div className="true-focus-container">
          <TrueFocus
            sentence="La mejor experiencia la vives en SYNAPLINK"
            manualMode={false}
            blurAmount={4}
            borderColor="violet"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          {/* Aquí agregamos la imagen debajo del texto */}
          <img src={imagen} alt="Imagen que acompaña el texto" className="imagen-bajo-texto" />
        </div>

        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="SYNAPTOX Logo" className="logo" />
            <h1>SYNAPLINK</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/benefits">Beneficios</Link></li>
              <li><button className="login-btn"><Link to="/login">Iniciar sesión</Link></button></li>
              <li><button className="register-btn"><Link to="/register">Registrarse</Link></button></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <SplashCursor />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registrarse />} />
            <Route path="/services" element={<Servicio />} />
            <Route path="/benefits" element={<Beneficios />} />
            <Route path="/Logout" element={<Logout />} />
            
            {/* Aquí es donde usamos PrivateRoute para proteger la ruta "/inicio" */}
            <Route 
              path="/inicio" 
              element={
                <PrivateRoute>
                  <Inicio />
                </PrivateRoute>
              } 
            />
          </Routes>
        </main>

        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
