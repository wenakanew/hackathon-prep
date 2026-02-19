import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load API key from .env
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
model = genai.GenerativeModel("gemini-1.5-flash")

def chat():
    print("Gemini Chatbot (Python). Type 'exit' to quit.\n")

    history = []  # store conversation history

    while True:
        user_input = input("You: ")

        if user_input.lower().strip() == "exit":
            break

        # Add to history
        history.append({"role": "user", "parts": user_input})

        response = model.generate_content(
            history  # send full conversation context
        )

        bot_reply = response.text
        print("Bot:", bot_reply)

        # Add bot output to history
        history.append({"role": "model", "parts": bot_reply})

if __name__ == "__main__":
    chat()
