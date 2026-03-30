import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: message,
      config: {
        systemInstruction: "You are ReelVault AI, an expert film curator and critic. You help users discover movies based on their complex tastes, moods, or specific criteria. Provide thoughtful, cinematic recommendations. Format your response in clean markdown.",
        thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
