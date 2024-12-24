'use client';

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';

export function DashboardForm() {
  const [messages, setMessages] = useState<{ text: string; sender: 'sent' | 'received'; time: string }[]>([
    { text: 'Hi! How can I help you today?', sender: 'received', time: '10:00 AM' },
    { text: 'I need some help with my account.', sender: 'sent', time: '10:01 AM' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedChatName, setSelectedChatName] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { text: inputMessage, sender: 'sent', time: new Date().toLocaleTimeString() },
      ]);
      setInputMessage('');
    }
  };

  return (
    <div className="dashboard min-h-screen flex">
      {/* Sidebar */}
      <Sidebar setSelectedChatName={setSelectedChatName} />

      {/* Placeholder or Chat Section */}
      {selectedChatName ? (
        <>
          {/* Vertical Line */}
          <div className="w-[1px] bg-gray-300"></div>

          {/* Main Chat Content */}
          <main className="flex-1 flex flex-col">
            <ChatHeader chatName={selectedChatName} />
            <ChatMessages messages={messages} />
            <ChatInput
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              handleSendMessage={handleSendMessage}
            />
          </main>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-700">Welcome to FaceCaller!</h1>
            <p className="text-lg text-gray-500">Select a friend or room to start chatting.</p>
            <div className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-24 text-gray-300 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-2.907 9-6.497 0-3.59-4.03-6.497-9-6.497s-9 2.907-9 6.497c0 3.59 4.03 6.497 9 6.497zM12 10.25c1.933 0 3.5 1.014 3.5 2.25s-1.567 2.25-3.5 2.25-3.5-1.014-3.5-2.25 1.567-2.25 3.5-2.25z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
