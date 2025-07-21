// components/ChatMessage.tsx
import React from 'react';
import ChatbotIcon from './ChatbotIcon';

type ChatMessageProps = {
  chat: {
    hideInChat: boolean;
    role: string;
    text: string;
    isError?: boolean;
  };
};

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message ${chat.isError ? 'error' : ''}`}>
        {chat.role === 'model' && <ChatbotIcon />}
        <p className="message-text">{chat.text}</p>
      </div>
    )
  );
};

export default ChatMessage;
