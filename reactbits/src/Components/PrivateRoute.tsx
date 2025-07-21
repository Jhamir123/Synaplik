import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode; // Los hijos que deben estar protegidos
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');  // Verifica si existe un token en localStorage
  
  if (!token) {
    // Si no hay token, redirige al login
    return <Navigate to="/login" />;
  }

  // Si hay token, muestra los hijos (el componente protegido)
  return <>{children}</>;
};

export default PrivateRoute;