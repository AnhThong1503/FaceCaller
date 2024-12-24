'use client';

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';

export function DashboardForm() {
  const [messages, setMessages] = useState<{ text: string; sender: 'sent' | 'received'; time: string }[]>([
    { text: 'Hi! How can I help you today?', sender: 'received', time: '10:00 AM' },
    { text: 'I need some help with my account.', sender: 'sent', time: '10:01 AM' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { text: inputMessage, sender: 'sent', time: new Date().toLocaleTimeString() }
      ]);
      setInputMessage('');
    }
  };

  return (
    <div className="dashboard min-h-screen">
      <Sidebar />
      <main className="chat">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}
