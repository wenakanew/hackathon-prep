import 'dotenv/config';
import readline from 'readline';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let history = [];

function askUser() {
  rl.question("You: ", async (userInput) => {
    if (userInput.toLowerCase().trim() === "exit") {
      rl.close();
      return;
    }

    history.push({ role: "user", parts: userInput });

    const result = await model.generateContent(history);
    const reply = result.response.text();

    console.log("Bot:", reply);

    history.push({ role: "model", parts: reply });

    askUser();
  });
}

console.log("Gemini Chatbot (JavaScript). Type 'exit' to quit.\n");
askUser();
