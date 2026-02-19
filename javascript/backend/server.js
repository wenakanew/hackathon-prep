import express from "express";
import cors from "cors";
import 'dotenv/config';

import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

// Configure Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API endpoint for chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    const chatHistory = history || [];

    chatHistory.push({ role: "user", parts: message });

    const result = await model.generateContent(chatHistory);
    const reply = result.response.text();

    chatHistory.push({ role: "model", parts: reply });

    res.json({
      reply,
      history: chatHistory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
