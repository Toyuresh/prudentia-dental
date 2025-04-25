// contexts/ChatbotContext.tsx

import { createContext, useContext, useState } from 'react';
import ChatbotButton from './chatbotButton';

type ChatbotContextType = {
  handleOpenChatbot: () => void;
};

export const ChatbotContext = createContext<ChatbotContextType | null>(null);

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

export const ChatbotProvider = ({ children }: { children: React.ReactNode }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => setIsChatbotOpen(true);
  const handleCloseChatbot = () => setIsChatbotOpen(false);

  return (
    <ChatbotContext.Provider value={{ handleOpenChatbot }}>
      {children}
      <ChatbotButton
        isChatbotOpen={isChatbotOpen}
        handleOpenChatbot={handleOpenChatbot}
        handleCloseChatbot={handleCloseChatbot}
      />
    </ChatbotContext.Provider>
  );
};