import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const systemPrompt = "You are the QuantumCash Virtual Assistant, a helpful AI assistant for a secure banking portal. Be concise and professional.";
const messages = [{ role: "user", parts: [{ text: "hello" }] }];
const formattedMessages = [
  { role: "user", parts: [{ text: systemPrompt }] },
  { role: "model", parts: [{ text: "Understood. I am the QuantumCash Virtual Assistant." }] },
  ...messages
];

ai.models.generateContent({
  model: 'gemini-3.1-flash-lite',
  contents: formattedMessages,
}).then(res => console.log(res.text)).catch(e => console.error("Error:", e.message));
