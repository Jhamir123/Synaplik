import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Eliminar el token de localStorage
    navigate('/login');  // Redirigir al login
  };

  return (
    <button onClick={handleLogout}>Cerrar sesión</button>
  );
};

export default Logout;
