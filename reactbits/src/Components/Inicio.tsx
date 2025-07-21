import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

// Definir los estilos con styled-components
const Nav = styled.nav`
  background-color: #8a2be2;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: white;
  color: #8a2be2;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a1dbb;
    color: white;
  }
`;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 40px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WelcomeMessage = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: #8a2be2;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
`;

const Section = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #333;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 24px;
    color: #8a2be2;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin: 10px 0;
  }
`;

const Inicio: React.FC = () => {
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleLogout = () => {
    // Lógica para cerrar sesión (puedes limpiar el token, redirigir, etc.)
    console.log('Cerrando sesión...');
    navigate('/login'); // Redirigir al usuario a la página de login
  };

  return (
    <Container>
      <Nav>
        <NavTitle>SYNAPTOX</NavTitle>
        <Button onClick={handleLogout}>Cerrar sesión</Button>
      </Nav>

      <WelcomeMessage>
        Bienvenido a SYNAPTOX
      </WelcomeMessage>
      <Description>
        La forma más moderna y práctica de usar una cabina de internet.
      </Description>

      <Section>
        <h2>¿Qué es Synaptox?</h2>
        <p>Es una innovadora plataforma que automatiza por completo el uso de cabinas de internet. Desde tu celular, puedes:</p>
        <ul>
          <li>Ver PCs disponibles en tiempo real.</li>
          <li>Reservar la que desees con solo un par de toques.</li>
          <li>Pagar de forma segura mediante código QR o billeteras digitales.</li>
          <li>Acceder al equipo de forma inmediata y segura.</li>
        </ul>
      </Section>

      <Section>
        <h2>Tecnología que mejora tu experiencia</h2>
        <p>Gracias a un sistema completamente automatizado, Synaptox elimina la necesidad de personal para operar las máquinas. Todo es controlado desde una aplicación intuitiva, rápida y segura.</p>
      </Section>

      <Section>
        <h2>Para usuarios y dueños de cabinas</h2>
        <p>Ya seas un cliente en busca de comodidad o un dueño que quiere optimizar su negocio, Synaptox es para ti.</p>
        <Button>¡Únete a nosotros!</Button>
      </Section>
    </Container>
  );
};

export default Inicio;
