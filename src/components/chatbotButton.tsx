'use client';
import { motion } from "framer-motion";
import AppointmentChatbot from "./chatbot";
import { MessageCircle, X } from "lucide-react";

interface ChatbotButtonProps {
    isChatbotOpen: boolean;
    handleOpenChatbot: () => void;
    handleCloseChatbot: () => void;
}


const ChatbotButton: React.FC<ChatbotButtonProps> = (props) => { //Use the interface
  return (
    <div>
      {/* Floating Chatbot Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={props.handleOpenChatbot}
          className="rounded-full p-4 shadow-lg bg-purple-500 hover:bg-indigo-600 text-white"
        >
          {props.isChatbotOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </motion.div>

      {/* Chatbot Window  */}
      <AppointmentChatbot
        isOpen={props.isChatbotOpen}
        onOpen={props.handleOpenChatbot}
        onClose={props.handleCloseChatbot}
      />
    </div>
  );
}



export default ChatbotButton;