import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { companyInfo } from "../companyInfo";
import "../styles/chatbot.css"; // Importa el archivo de estilos
import gifControl from '../assets/Gif_control.webp'; // Ajusta la ruta según tu estructura de carpetas

// Definir los tipos para el historial de chat
type ChatMessageType = {
  hideInChat: boolean;
  role: string;
  text: string;
  isError?: boolean;
};

const Chatbot = () => {
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo, // Esto es la info de tu empresa que está en companyInfo.js
    },
  ]);

  // Extraer la información clave del bloque companyInfo
  const extractCompanyInfo = () => {
    return {
      introduction: "Bienvenido a SYNAPLINK, tu destino definitivo para un servicio confiable y económico de cabinas de internet...",
      details: "En SYNAPLINK, creemos en proporcionar a nuestros clientes la mejor experiencia posible al utilizar nuestras cabinas de internet...",
      hours: "Horarios de operación: Lunes a Viernes: 9:00 AM a 9:00 PM, Sábados y Domingos: 10:00 AM a 8:00 PM",
      contact: {
        email: "hello@synaplink.com",
        phone: "+1 (555) 987-6543",
        website: "https://www.synaplink.com",
      },
      prices: [
        { type: "Tarifa por hora", price: "$5 por hora" },
        { type: "Tarifa diaria", price: "$30 por día" },
        { type: "Suscripción mensual", price: "$100 (acceso ilimitado)" },
      ],
      benefits: [
        "Internet de alta velocidad (Fibra óptica)",
        "Sillas y escritorios cómodos",
        "Servicios de impresión y escaneo",
        "Aire acondicionado 24/7",
        "Ambiente privado y tranquilo para trabajar",
        "Café y snacks gratis",
      ],
      equipment: [
        "Computadoras de última generación",
        "Impresoras a color y blanco y negro",
        "Escáneres",
        "Proyectores portátiles",
      ],
      accessibility: "Contamos con rampas y espacios adaptados para personas con discapacidades.",
      security: "Protegemos la privacidad de nuestros usuarios mediante un sistema de encriptación SSL y políticas estrictas de privacidad.",
      socialLinks: {
        facebook: "https://facebook.com/synaplink",
        instagram: "https://instagram.com/synaplink",
        twitter: "https://twitter.com/synaplink",
        linkedin: "https://linkedin.com/company/synaplink",
      },
      paymentMethods: [
        "Tarjetas de crédito (Visa, MasterCard, American Express)",
        "PayPal",
        "Transferencias bancarias",
      ],
      rules: "Por favor, mantén el espacio limpio y no consumas alimentos que puedan generar molestias a otros usuarios.",
      specialOffers: [
        "Descuentos del 10% en reservas para empresas y planes a largo plazo.",
        "Reserva 5 horas seguidas y llévate una hora gratis.",
        "Compra un snack y una gaseosa, y te premiamos con una hora más.",
      ],
      additionalLocations: [
        "Sucursal Miraflores: Av. Pardo 550, Lima, Perú",
        "Sucursal San Isidro: Av. Comandante Espinar 200, Lima, Perú",
      ],
      maxCapacity: "Cada cabina puede albergar hasta 3 personas.",
      reservationPolicy: "Las reservas deben realizarse con al menos 24 horas de anticipación.",
      cancellationPolicy: "Se puede cancelar la reserva hasta 4 horas antes de la hora de inicio sin penalización.",
      events: "Organizamos talleres mensuales sobre tecnología y emprendimiento digital.",
      customerTestimonials: [
        "Excelente servicio. El internet es rápido y las cabinas son cómodas. - Juan Pérez",
        "Perfecto para trabajar en un ambiente tranquilo. Muy recomendado. - Laura García",
        "El mejor lugar para estudiar sin distracciones. - Andrés López",
      ],
      technologyUsed: [
        "Software de diseño gráfico y edición como Adobe Photoshop y Illustrator",
        "Sistemas de encriptación SSL para seguridad",
        "Hardware de última generación con procesadores Intel Core i7",
      ],
      wifiDetails: "Ofrecemos Wi-Fi de alta velocidad con tecnología 5G, ideal para videoconferencias y tareas que requieren gran ancho de banda.",
      additionalEquipment: [
        "Alquiler de laptops de última generación",
        "Alquiler de auriculares y micrófonos profesionales",
      ],
      bathroomsAccessibility: "Nuestros baños son accesibles para personas con discapacidades y cuentan con espacio suficiente.",
      cabinTimers: "Cada cabina está equipada con un temporizador que te permite controlar el tiempo de uso y evitar exceder el tiempo de reserva.",
    };
  };

  // Función para generar la respuesta del bot
  const generateBotResponse = async (history: ChatMessageType[]) => {
    const updateHistory = (text: string, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError, hideInChat: false },
      ]);
    };

    updateHistory("Thinking...");

    const apiKey = "AIzaSyAsm6ZubeD9PtVfg4Ot1REr5J12T50lcv4"; // Aquí va tu clave API
    console.log("API Key:", apiKey);

    if (!apiKey) {
      console.error('API Key is missing');
      updateHistory("Error: La clave API no está definida.", true);
      return;
    }

    // Extraer la información relevante de companyInfo
    const companyData = extractCompanyInfo();

    let botResponse = "";

    const userInput = history[history.length - 1].text.toLowerCase();

    // Responder según la pregunta realizada
    if (userInput.includes("precios")) {
      botResponse = `
        Los precios de las cabinas son:
        - Tarifa por hora: ${companyData.prices[0].price}
        - Tarifa diaria: ${companyData.prices[1].price}
        - Suscripción mensual: ${companyData.prices[2].price}
      `;
    } else if (userInput.includes("horarios")) {
      botResponse = companyData.hours;
    } else if (userInput.includes("contacto")) {
      botResponse = `
        Puedes contactarnos a través de:
        - Correo electrónico: ${companyData.contact.email}
        - Teléfono: ${companyData.contact.phone}
        - Página web: ${companyData.contact.website}
      `;
    } else if (userInput.includes("beneficios")) {
      botResponse = `
        Beneficios de elegir SYNAPLINK:
        - ${companyData.benefits.join("\n- ")}
      `;
    } else if (userInput.includes("equipos disponibles")) {
      botResponse = `
        Equipos disponibles:
        - ${companyData.equipment.join("\n- ")}
      `;
    } else if (userInput.includes("testimonios")) {
      botResponse = `
        Testimonios de nuestros clientes:
        - ${companyData.customerTestimonials.join("\n- ")}
      `;
    } else if (userInput.includes("tecnologías")) {
      botResponse = `
        Tecnologías utilizadas:
        - ${companyData.technologyUsed.join("\n- ")}
      `;
    } else if (userInput.includes("wifi")) {
      botResponse = companyData.wifiDetails;
    } else if (userInput.includes("alquiler equipos")) {
      botResponse = `
        Equipos adicionales disponibles para alquiler:
        - ${companyData.additionalEquipment.join("\n- ")}
      `;
    } else if (userInput.includes("accesibilidad baños")) {
      botResponse = companyData.bathroomsAccessibility;
    } else if (userInput.includes("temporizadores")) {
      botResponse = companyData.cabinTimers;
    } else if (userInput.includes("promociones")) {
      botResponse = `
        Promociones actuales:
        - Reserva 5 horas seguidas y llévate una hora gratis.
        - Compra un snack y una gaseosa, y te premiamos con una hora más.
        - ${companyData.specialOffers.join("\n- ")}
      `;
    } else if (userInput.includes("ubicaciones")) {
      botResponse = `
        Nuestras ubicaciones son:
        - ${companyData.additionalLocations.join("\n- ")}
      `;
    } else if (userInput.includes("política de cancelación")) {
      botResponse = companyData.cancellationPolicy;
    } else if (userInput.includes("capacidad de cabina")) {
      botResponse = companyData.maxCapacity;
    } else if (userInput.includes("eventos")) {
      botResponse = companyData.events;
    } else {
      botResponse = "Lo siento, no entendí tu pregunta. ¿Puedes ser más específico?";
    }

    updateHistory(botResponse);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <img src={gifControl} alt="Chatbot" />
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button onClick={() => setShowChatbot((prev) => !prev)} className="material-symbols-rounded">
          </button>
        </div>
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hola <br /> ¿Cómo puedo ayudarte hoy?
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
