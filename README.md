# 🎬 Movie GPT

A smart movie browsing app with GPT-powered recommendations, built using React, Tailwind CSS, Firebase, Redux, and the TMDB API.  
Includes user authentication, multilingual support, and a responsive UI with dynamic movie suggestions via Google Gemini integration.

---

## 🚀 Tech Stack

- **React** (with Create React App)
- **Tailwind CSS**
- **Firebase Auth + Hosting**
- **Redux Toolkit**
- **Google Gemini API**
- **TMDB API**
- **React Router**
- **Custom React Hooks**

---

## 🧠 Features

### 🔐 Authentication
- Login / Signup with form validation
- Firebase authentication
- Redirect unauthenticated users to login page
- Update user profile with display name and photo
- Sign out functionality
- Auth state persistence using `onAuthStateChanged` (with proper unsubscription)

### 🎥 Browse Page
- Main Movie Section with YouTube trailer (autoplay + muted)
- Dynamic Movie List Sections (Now Playing, Popular, etc.)
- Movie Cards with TMDB images
- Responsive layout styled with Tailwind CSS

### 🤖 GPT Search (Movie GPT)
- GPT-powered Search Bar
- Google Gemini API integration
- Fetch movie suggestions via GPT
- Display GPT-recommended movies using reusable MovieList component
- Memoized search rendering for performance

### 🌍 Bonus Features
- Multi-language support via constants
- Environment variables stored securely using `.env`
- Fully responsive for mobile, tablet, and desktop

---

## 🧩 Project Structure (Simplified)

movie-gpt/ ├── public/ # Static public assets ├── src/ │ ├── components/ # Reusable UI components │ ├── hooks/ # Custom React hooks │ ├── utils/ # Redux slices, constants, Firebase setup │ ├── App.js # App routing and layout │ └── index.js # App entry point ├── .firebaserc # Firebase project config ├── firebase.json # Firebase hosting config ├── package.json # Project dependencies ├── tailwind.config.js # Tailwind CSS config └── README.md # Project documentation

## 🛠 Setup & Installation

1. **Clone the repo**

   git clone https://github.com/mamta-vyas/Movies-GPT.git
   cd movie-gpt


Install dependencies

npm install
Setup Firebase

Create a Firebase project

Enable Email/Password authentication

Add Firebase credentials in src/utils/firebase.js

Configure Environment Variables Create a .env file at the root and add:
REACT_APP_GEMINI_API_KEY=your_google_gemini_api_key


Run the app
npm start

🌐 Deployment
This project is deployed using Firebase Hosting.

To deploy:
npm run build


firebase deploy
📺 Demo
Live URL: https://movie-gpt-94687.web.app/


🙌 Acknowledgements
TMDB API

Firebase

Tailwind CSS

Google Gemini API

📌 TODO / Enhancements
Dark mode toggle

Add pagination and infinite scroll

Movie details modal

Watchlist (localStorage or Firestore)

