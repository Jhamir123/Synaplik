import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Hook para redirigir a otra página

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validación de campos vacíos
    if (email === '' || password === '') {
      setError('Por favor, complete todos los campos');
      return;
    }

    // Realizar la solicitud de inicio de sesión con Axios
    axios
      .post('http://localhost:5000/api/auth/login', { email, password })
      .then((response) => {
        setSuccess('Inicio de sesión exitoso');
        setError(''); // Limpiar los errores
        localStorage.setItem('token', response.data.token); // Almacenar el token en localStorage

        // Limpiar los campos después de iniciar sesión
        setEmail('');
        setPassword('');

        // Redirigir a la página de inicio después de iniciar sesión
        navigate('/inicio'); // Redirige a la página de inicio
      })
      .catch((error) => {
        const errorMessage = error.response?.data.message || 'Error al iniciar sesión';
        setError(errorMessage);
        setSuccess(''); // Limpiar el mensaje de éxito si hay un error
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <p>Bienvenido a Synaplink</p>

        {/* Mostrar mensaje de error */}
        {error && <p className="error">{error}</p>}

        {/* Mostrar mensaje de éxito */}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Iniciar sesión
          </button>
        </form>

        <div className="signup-link">
          <p>Aún no tienes cuenta?</p>
          <button onClick={() => navigate('/register')}>Registrarse</button>
        </div>
      </div>

      <div className="login-message">
        <h3>En Synaplink puedes vivir una experiencia unica, desconectate un momento del mundo real.</h3>
      </div>
    </div>
  );
};

export default Login;
