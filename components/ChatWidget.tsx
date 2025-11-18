import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, BotIcon } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the Rabbit Hole. I am your Bitcoin guide. Ask me why money is broken, or what '21 million' means.", timestamp: new Date() }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setLoadingState(LoadingState.IDLE);
    } catch (error) {
      setLoadingState(LoadingState.ERROR);
      const errorMsg: ChatMessage = { role: 'model', text: "The network is congested. Please try asking again.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-orange-100 dark:border-gray-700 relative z-10 transition-colors duration-300">
      {/* Chat Header */}
      <div className="bg-bitcoin-500 dark:bg-bitcoin-600 p-4 flex items-center space-x-3 transition-colors duration-300">
        <div className="bg-white p-1.5 rounded-full">
          <BotIcon className="w-6 h-6 text-bitcoin-600" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg font-serif">Satoshi's Assistant</h3>
          <p className="text-orange-100 text-xs">Powered by Gemini AI</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-3 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-bitcoin-500 text-white rounded-br-none'
                  : 'bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 border border-gray-100 dark:border-gray-700 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loadingState === LoadingState.LOADING && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-xl rounded-bl-none border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-bitcoin-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-bitcoin-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-bitcoin-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-bitcoin-300 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about inflation, mining, or nodes..."
            className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={loadingState === LoadingState.LOADING || !input.trim()}
            className={`p-2 rounded-full transition-colors ${
              input.trim() 
                ? 'bg-bitcoin-500 text-white hover:bg-bitcoin-600 shadow-md' 
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;