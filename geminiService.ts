import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const modelName = 'gemini-3-flash-preview';

export const generateFeedPost = async (topic?: string): Promise<string> => {
  try {
    const prompt = topic 
      ? `Write a short, insightful business social media post about "${topic}" suitable for a C-level executive audience. Keep it under 50 words.`
      : `Write a short, provocative business thought leadership post about a current trend (e.g., AI in operations, remote leadership, sustainable supply chains). Keep it under 50 words.`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: "You are a seasoned business executive sharing wisdom on a professional social network.",
        temperature: 0.8,
      }
    });

    return response.text || "Innovation is the key to survival in today's market.";
  } catch (error) {
    console.error("Gemini Feed Error:", error);
    return "Exploring new market opportunities requires diligence and bold vision.";
  }
};

export const searchPartnersAI = async (query: string): Promise<any[]> => {
  try {
    const prompt = `Generate 3 fictional business partner profiles based on the search query: "${query}". 
    Return a JSON array where each object has: name, title, company, location, and a 1-sentence bio.`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              title: { type: Type.STRING },
              company: { type: Type.STRING },
              location: { type: Type.STRING },
              bio: { type: Type.STRING },
            }
          }
        }
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) return [];
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Partner Search Error:", error);
    return [];
  }
};

export const suggestResourceDescription = async (title: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: `Describe a business resource template titled "${title}" in one sentence.`,
    });
    return response.text || "A useful template for business operations.";
  } catch (error) {
    return "A comprehensive guide for your business needs.";
  }
};