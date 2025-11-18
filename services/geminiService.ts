import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';

const SYSTEM_INSTRUCTION = `
You are the "Orange Pill Guide", a highly knowledgeable, warm, and persuasive Bitcoin educator. 
Your goal is to explain Bitcoin's value proposition clearly and powerfully.
Base your answers on Austrian Economics (time preference, savings technology, sound money).
Emphasize:
1. Absolute Scarcity (21 Million).
2. Decentralization (No CEO, Unstoppable).
3. Hard Money properties (Durable, Portable, Divisible, Fungible, Scarse).
4. The difference between Fiat (soft money that loses value) and Bitcoin (hard money).

Tone: Optimistic, philosophical, yet grounded in math and code. Use simple metaphors. 
Keep responses concise (under 150 words) unless asked for a deep dive. 
Do not give financial advice (buying/selling specific amounts). Focus on the technology and monetary philosophy.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // The API key MUST be provided via process.env.API_KEY
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, 
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I couldn't quite catch that block. Could you rephrase?";
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    throw error;
  }
};
