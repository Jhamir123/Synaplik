import { useRef } from 'react';

// Definir los tipos de las propiedades
type ChatFormProps = {
  chatHistory: { role: string; text: string }[];
  setChatHistory: React.Dispatch<React.SetStateAction<any[]>>;
  generateBotResponse: (history: any[]) => void;
};

const ChatForm: React.FC<ChatFormProps> = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    inputRef.current!.value = ""; // Limpiar el campo de entrada

    // Actualizar el historial con el mensaje del usuario (con estado actualizado)
    const newChatHistory = [...chatHistory, { role: 'user', text: userMessage }];
    setChatHistory(newChatHistory);

    // Retrasar la respuesta del bot
    setTimeout(() => {
      // Actualizar el historial con el mensaje "Thinking..." para simular la espera del bot
      const thinkingHistory = [...newChatHistory, { role: 'model', text: 'Thinking...' }];
      setChatHistory(thinkingHistory);

      // Llamar a la función de respuesta del bot, pasando el historial actualizado
      generateBotResponse([
        ...thinkingHistory,
        { role: 'user', text: `Using the details provided above, please address this query: ${userMessage}` },
      ]);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input ref={inputRef} placeholder="Message..." className="message-input" required />
      <button type="submit" id="send-message" className="material-symbols-rounded">
        Enviar
      </button>
    </form>
  );
};

export default ChatForm;
