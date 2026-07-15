import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: "bad_key" });
ai.models.generateContent({
  model: 'gemini-1.5-flash',
  contents: "hello",
}).catch(e => console.log("ERROR:", e.message));
