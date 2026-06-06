# 🤖 Dot.40 AI

An intelligent ChatGPT-like assistant with green and black theme capabilities.

## ✨ Features

- 🔐 **User Authentication** - Secure login and logout system
- 💬 **AI Chat Interface** - ChatGPT-like conversational AI
- 🎨 **Theme Switcher** - Toggle between green and black backgrounds
- 📱 **Responsive Design** - Works on desktop and mobile
- 🚀 **Real-time Responses** - Streaming AI responses
- 💾 **Chat History** - Persistent chat history per user

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **AI**: OpenAI API
- **Authentication**: JWT (JSON Web Tokens)

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB instance
- OpenAI API Key

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## 📝 Usage

1. Visit `http://localhost:3000`
2. Sign up or login with your credentials
3. Start chatting with Dot.40 AI
4. Use the theme switcher to change between green and black themes
5. Your chat history is automatically saved

## 📄 License

MIT

## 👤 Author

hadrielbusiness8-svg
