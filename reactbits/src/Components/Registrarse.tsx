import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Registrarse.css';

const Registrarse: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Verificar que todos los campos estén completos
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Por favor, complete todos los campos.');
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Enviar los datos al backend usando Axios
    axios
      .post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      })
      .then((response) => {
        setSuccess(response.data.message); // Usar la respuesta que llega del backend
        setError(''); // Limpiar cualquier mensaje de error
        // Limpiar los campos después del registro
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        setError(error.response?.data.message || 'Error al registrar');
        setSuccess(''); // Limpiar el mensaje de éxito si hay un error
      });
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      {error && <p className="error">{error}</p>} {/* Mostrar errores */}
      {success && <p className="success">{success}</p>} {/* Mostrar éxito */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>

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

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirma tu contraseña"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Registrarse
        </button>
      </form>

      <div className="login-link">
        <p>¿Ya tienes una cuenta?</p>
        <button onClick={() => window.location.href = '/login'}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Registrarse;
