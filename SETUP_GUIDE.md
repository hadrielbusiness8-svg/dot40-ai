# Dot.40 AI - Full Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ and npm
- MongoDB (local or Atlas)
- OpenAI API Key

### 1. Clone Repository
```bash
git clone https://github.com/hadrielbusiness8-svg/dot40-ai.git
cd dot40-ai
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cat > .env << EOF
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/dot40-ai
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_super_secret_jwt_key_change_in_production
EOF

# Start backend
npm run dev
```

### 3. Frontend Setup (in new terminal)
```bash
cd frontend
npm install

# Create .env file
cat > .env << EOF
REACT_APP_API_URL=http://localhost:5000/api
EOF

# Start frontend
npm start
```

## 📱 Features

✅ **Authentication**
- Sign up and Login with email/password
- JWT-based secure authentication
- Session persistence

✅ **Chat Interface**
- Real-time chat with OpenAI's GPT-3.5 Turbo
- Chat history stored in MongoDB
- Multiple conversations support

✅ **Theme Switching**
- Toggle between Green and Black themes
- Persistent theme preference
- Smooth transitions

✅ **User Experience**
- Responsive design
- Real-time message streaming
- Auto-scroll to latest messages
- Loading indicators

## 📂 Project Structure

```
dot40-ai/
├── backend/
│   ├── src/
│   │   ├── server.ts           # Express server
│   │   ├── db/
│   │   │   └── connection.ts   # MongoDB connection
│   │   ├── models/
│   │   │   ├── User.ts         # User schema
│   │   │   └── Chat.ts         # Chat schema
│   │   ├── routes/
│   │   │   ├── auth.ts         # Auth endpoints
│   │   │   └── chat.ts         # Chat endpoints
│   │   └── middleware/
│   │       └── auth.ts         # JWT middleware
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.tsx       # Login page
│   │   │   ├── Signup.tsx      # Signup page
│   │   │   └── ChatPage.tsx    # Main chat interface
│   │   ├── components/
│   │   │   └── Navbar.tsx      # Top navigation
│   │   ├── context/
│   │   │   ├── AuthContext.tsx # Auth state
│   │   │   └── ThemeContext.tsx # Theme state
│   │   ├── services/
│   │   │   └── api.ts          # API calls
│   │   ├── App.tsx             # Main app
│   │   ├── index.tsx           # Entry point
│   │   └── index.css           # Global styles
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login user
- `PUT /api/auth/theme` - Update user theme

### Chat
- `POST /api/chat/create` - Create new chat
- `POST /api/chat/message` - Send message and get AI response
- `GET /api/chat/:chatId` - Get chat history
- `GET /api/chat/user/all` - Get all user chats

## 🛠️ Technology Stack

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS
- React Router v6
- Axios

**Backend:**
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- OpenAI API
- JWT Authentication
- bcryptjs for password hashing

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/dot40-ai
OPENAI_API_KEY=your_key_here
JWT_SECRET=your_secret_here
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚢 Deployment

### Deploy Backend (Heroku)
```bash
heroku create dot40-ai-backend
git push heroku main
heroku config:set MONGODB_URI=your_atlas_uri
heroku config:set OPENAI_API_KEY=your_key
heroku config:set JWT_SECRET=your_secret
```

### Deploy Frontend (Vercel)
```bash
vercel --prod
```

## 📚 Additional Resources

- [OpenAI API Docs](https://platform.openai.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

MIT License

## 👨‍💻 Contributing

Feel free to submit issues and enhancement requests!

---

**Made with ❤️ by hadrielbusiness8-svg**
