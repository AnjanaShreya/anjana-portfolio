# Premium Developer Portfolio & Dynamic Content Studio

A premium, state-of-the-art interactive portfolio website and content administration dashboard designed for modern software engineers. It features dynamic layout ordering, custom content toggling, a live Gemini-powered AI chatbot trained on your actual portfolio data, and nodemailer email routing.

---

## 🚀 Key Features

### 1. Premium Visual Experience
* **Liquid Metallic Aesthetics**: Sleek dark mode styling featuring iridescent liquid metallic abstracts, custom particles background, and glow accents.
* **Fluid Motion & Interactive States**: Powering sections with seamless hover states, micro-animations, custom cursor behaviors, and custom screen transitions powered by `Framer Motion`.
* **Adaptive Navigation**: Desktop custom navbar and fullscreen responsive mobile menu drawer with smooth scroll anchors.

### 2. Admin Content Studio (`/admin`)
* **Secure Auth Management**: Full JWT sign-in/sign-up authentication workflow protecting dashboard routes.
* **Hero & About Settings**: Dynamic control of subtitles, titles, animated ticker words, custom orb media (supporting images/videos), and CTA links (Resume, LinkedIn, GitHub, and custom E-mail URL).
* **Robust CRUD Managers**: Simple visual forms to add, edit, and delete:
  * **Experiences / Internships** (Roles, company profiles, dates, highlights).
  * **Projects** (Technology tags, year, descriptions, live demo links, repository URLs, badges).
  * **Education History** (Schools, majors, GPAs, accomplishments).
  * **Certifications** (Licenses, credentials, issuers).
  * **Achievements** (Key milestones, honors).
* **Section Visibility Toggles**: Live controls to enable or disable sections (like the built-in Asteroids Game or Achievements).
* **Dynamic Section Ordering**: Visually re-order the structural sequence of sections on the landing page using controls in the admin suite.

### 3. Integrated Gemini AI Chatbot
* **Contextual Responses**: An interactive chat overlay powered by Gemini Pro that acts as your virtual assistant.
* **Live RAG Context Sync**: Automatically feeds your latest skills, projects, and education history from the database directly into the LLM system instructions, letting visitors chat directly with a chatbot that knows your background.

### 4. Contact Transceiver Backend
* **Inquiry Dashboard**: View client messages received in real-time.
* **Nodemailer Router**: Integrated with Node.js Express backend to forward contact form submissions straight to your primary inbox.

---

## 🛠 Tech Stack

* **Frontend**: React, TypeScript, Vite, TailwindCSS (v4), Framer Motion, Lucide Icons, React Router Dom.
* **Backend**: Node.js, Express, Nodemailer, Axios.
* **AI Engine**: Google Gemini API (via `@google/generative-ai`).
* **Database**: MongoDB (via Mongoose ODM).

---

## 🏁 Getting Started

### 📋 Prerequisites

* **Node.js** (v18 or higher recommended)
* **MongoDB** (Local instance or MongoDB Atlas cluster URI)
* **Google Gemini API Key** (Obtained from Google AI Studio)

### ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configurations
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/portfolio
JWT_SECRET=your_jwt_signing_key_here

# Third-party Integrations
GEMINI_API_KEY=your_gemini_api_key_here
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password_here
TO_EMAIL=your_receiving_inbox@gmail.com
```

Create a frontend environment file `src/config.ts` or set:
```typescript
export const API_BASE = "http://localhost:5000";
```

### 💻 Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Seed Initial Portfolio Data**:
   Pre-populate the database with structural sections, defaults, and sample data:
   ```bash
   npx tsx seed.ts
   ```

3. **Start Backend Server**:
   ```bash
   node server.js
   # Or using nodemon
   npm run server
   ```

4. **Start Frontend Dev Server**:
   ```bash
   npm run dev
   ```

Open your browser and navigate to `http://localhost:3000` (default Vite port) to view the portfolio, or visit `http://localhost:3000/admin` to manage your settings.
