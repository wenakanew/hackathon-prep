#  Hackathon Prep — Gemini API Chatbot Examples

Welcome to **Hackathon Prep** — a starter repository to help participants learn how to build simple AI-powered chatbots using **Google’s Gemini API** in both **Python** and **JavaScript with a web UI**.

This repository is designed to be used during hackathons to quickly get students up and running with real AI integration.

---

##  Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Python Chatbot](#python-chatbot)
5. [JavaScript Chatbot with UI](#javascript-chatbot-with-ui)
6. [How It Works](#how-it-works)
7. [Tips for Hackathon Students](#tips-for-hackathon-students)
8. [Troubleshooting](#troubleshooting)

---

##  Project Overview

This project demonstrates how to integrate Google’s **Gemini API** into chatbot applications using two languages:

* **Python** — a terminal-based chatbot
* **JavaScript** — a simple web UI that talks to a Node backend

Students can study both implementations and build their own AI-powered features on top.

---

## 🔧 Prerequisites

Before you begin, make sure you have the following:

💻 **Local Setup**

* Node.js (v16+)
* Python (v3.9+)
* Git

🔑 **API Key**
You must create a Gemini API key from Google’s AI platform.

Once obtained, create a `.env` file in each subproject with:

```
GEMINI_API_KEY=YOUR_KEY_HERE
```

---

## 🚀 Getting Started

1. Clone this repository

```bash
git clone https://github.com/wenakanew/hackathon-prep.git
```

2. Navigate into `javascript` or `python` to explore examples.

---

## 🐍 Python Chatbot

This branch contains a terminal-based chatbot using the Gemini API.

### 📁 Structure

```
python/
 ├── chatbot.py
 ├── requirements.txt
 └── .env
```

### 🛠️ Setup & Run

1. Create and activate a Python virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Populate `.env` with your API key.

4. Run the chatbot:

```bash
python chatbot.py
```

You can now chat with the Gemini model in the terminal.

---

## 💻 JavaScript Chatbot with UI

This part demonstrates:

* A **Node.js backend** that calls the Gemini API
* A frontend **HTML/JS UI** that sends user messages and displays the AI response

### 📁 Structure

```
hackathon-prep/javascript/
  ├── backend/
  │     ├── server.js
  │     ├── package.json
  │     ├── .env
  └── frontend/
        ├── index.html
        ├── script.js
        └── style.css

```

---

### 🛠️ Backend Setup

🔹 Go into `backend`:

```bash
cd backend
npm init -y
npm install @google/generative-ai dotenv
```

🔹 Create a `.env` file:

```
GEMINI_API_KEY=YOUR_KEY_HERE
```

🔹 Run the backend server:

```bash
node server.js
```

By default, it runs on:

```
http://localhost:5000/api/chat
```

---

### 🧪 Frontend Setup

1. Open `frontend/index.html` in your browser
2. The UI will connect to the backend to send/receive messages

---

## 🤔 How It Works

### ✨ Backend (Node.js)

* The backend exposes a REST endpoint `/api/chat`
* It receives messages and conversation history
* It calls the Gemini API to generate replies
* It returns the AI response to the frontend

### 🌐 Frontend (HTML/JS)

* A simple chat UI is provided
* Messages are sent via `fetch()` to the backend
* Bot replies are displayed dynamically


## 🛠 Troubleshooting

### ⚠️ CORS errors

Ensure the backend has **CORS enabled** if you open the frontend from a file URL.

### ⚠️ API errors

If you see failures from the Gemini API, verify:

✔ Your API key is correct
✔ Your `.env` file is being read
✔ No rate limits are hit

---

## 📜 License

This repository is open-source for educational and hackathon use.


