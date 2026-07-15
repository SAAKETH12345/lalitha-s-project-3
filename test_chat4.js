import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const messages = [{ role: "user", parts: [{ text: "hello" }] }];
ai.models.generateContent({
  model: 'gemini-3.1-pro-preview',
  contents: messages,
}).then(res => console.log(res.text)).catch(e => console.error("Error:", e.message));
