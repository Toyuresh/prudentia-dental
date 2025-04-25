'use client';

import { useState } from 'react'
import { ChatbotProvider } from '@/components/chatbotContext'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatbotButton from '@/components/chatbotButton'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true)
  }

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false)
  }


  return (
    <ChatbotProvider>
      <Navbar />
      {children}
      <Footer />
      <ChatbotButton
        isChatbotOpen={isChatbotOpen}
        handleOpenChatbot={handleOpenChatbot}
        handleCloseChatbot={handleCloseChatbot}
      />
    </ChatbotProvider>
  )
}