# 🕷 SOHAM DABHOLKAR — SPIDER-MAN INSPIRED DEVELOPER PORTFOLIO

A production-quality personal developer portfolio website for **Soham Suhas Dabholkar**, third-year Computer Science Engineering student specializing in **Artificial Intelligence & Machine Learning** at JSPM University, Pune.

Crafted with high-end Spider-Verse energy, deep city-night aesthetics, tactile sound effects, and interactive engineering simulators (Multilingual Sarcasm Scanner & ATS Resume Matcher) built right into the browser.

---

## ⚡ Tech Stack

- **Core Framework**: React 19 + Vite 8
- **Styling & Theme**: Tailwind CSS v4 + Custom Neon Glow & Spider-Grid Utilities
- **Audio Synthesizer**: Web Audio API (Generates synthesized web-shooter "THWIP!" and radar chimes without any external mp3 files)
- **Interactive Particle Grid**: HTML5 Canvas optimized for high performance & reduced motion support
- **Icons**: Lucide React + Custom High-Precision SVG Icons (Spider Emblem, GitHub, LinkedIn)
- **Interactive Feedback**: Canvas Confetti celebration on message transmission and ATS match
- **Typography**: Google Fonts (*Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** v18+ (tested on v24.18)
- **npm** v9+ (tested on v11.16)

### 2. Installation
```bash
# Clone or navigate to the project directory
cd "Soham Portfolio AntiGravity"

# Install all dependencies
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the live website.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be output to the `dist/` folder ready for zero-config deployment.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Soham Portfolio AntiGravity/
├── public/
│   ├── favicon.svg               # Custom Spider Emblem SVG Favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.jsx             # Origin story, academic trajectory & exploration radar
│   │   ├── Contact.jsx           # Form with validation, email copy, and mailto fallback
│   │   ├── ExperienceAndEducation.jsx # Glowing web-thread connected milestone timeline
│   │   ├── Footer.jsx            # Back to top button, Marvel Easter egg, social links
│   │   ├── Hero.jsx              # Giant headline, status pill, terminal telemetry card
│   │   ├── InteractivePlayground.jsx  # Live Multilingual Sarcasm & ATS Resume Simulator
│   │   ├── Navbar.jsx            # Sticky glassmorphism header, sound & Spider-Sense toggles
│   │   ├── ProjectModal.jsx      # Architectural deep-dive overlay with dataflows
│   │   ├── Projects.jsx          # Wide flagship card + responsive project grid
│   │   ├── Skills.jsx            # Categorized stack with honesty level tags & search
│   │   ├── SocialIcons.jsx       # SVG icons for GitHub & LinkedIn
│   │   ├── SpiderBackground.jsx  # Canvas-based web network with mouse tracking
│   │   └── SpiderSenseHud.jsx    # Floating tactical HUD alert indicator
│   ├── data/
│   │   └── portfolioData.js      # ⭐️ CENTRAL CONFIG FILE: Edit all personal details here!
│   ├── utils/
│   │   └── soundEffects.js       # Web Audio API procedural sound engine
│   ├── App.jsx                   # Root application layout & state manager
│   ├── index.css                 # Tailwind v4 setup & custom Spider-Verse keyframes
│   └── main.jsx                  # React 19 entry point
├── index.html                    # SEO metadata, typography links, theme colors
├── package.json
├── vite.config.js
└── README.md
```

---

## ⭐️ Centralized Data File (`src/data/portfolioData.js`)

All information is consolidated into `src/data/portfolioData.js` so Soham can update anything without touching JSX layout code:

1. **Personal Information**:
   - Name, Location, College, Expected Graduation Year
   - Email (`sohamdabholkar2005@gmail.com`), Phone, and Status Pill
   - Social links (`github`, `linkedin`, `portfolio`)
2. **Projects**:
   - Flagship: **Multilingual Feedback Intelligence & Sarcasm Engine** (XLM-RoBERTa, PyTorch, FastAPI)
   - **ATS Resume Checker Pro** (Flask, PyPDF2, TF-IDF)
   - **Pizza House & Cafe Web App** (HTML5, Tailwind, JS, Chatbot)
   - **Virtual Lab Educational Platform** (Interactive Web simulations)
   - **Gold Price Forecasting Model** (LSTM, Time Series)
   - **Native Android Number Guessing Game** (Java, Android Studio)
3. **Education & Scores**:
   - JSPM University B.Tech (CGPA: 8.1)
   - Govt. Polytechnic Ratnagiri Diploma (Aggregate: 83.56% Distinction)
   - SSC Maharashtra Board (77.00%)
4. **Skills & Certifications**:
   - AWS Academy Generative AI Foundations
   - Google Cloud Data Analytics Virtual Internship
   - Full Stack Web Development (Apna College)
   - Python & Presentation Skills (Infosys Springboard)

---

## 🕹 Key Interactive Features

1. **Multilingual Sarcasm & Onomatopoeia Scanner**:
   - Visitors and recruiters can test Hinglish, Marathi, and English comments.
   - Simulates transformer attention layers inverting surface-positive praise into true negative dissatisfaction.
   - Highlights subword token attention and detects onomatopoeic expressions (e.g., *"Arre wah"*, *"😂"*, *"👏"*).

2. **ATS Resume Relevance Calculator**:
   - Evaluates target job descriptions (AI/ML Engineer, Full-Stack, Android) against Soham's verified competencies using simulated TF-IDF vector similarity.

3. **Spider-Sense HUD Mode**:
   - Click the "SPIDER-SENSE" button in the navbar to activate neon dual glow rings, sensory status radar, and tactile alert HUD.

4. **Web Audio API Procedural SFX**:
   - Web shooter discharge sound ("THWIP!") synthesizes on button clicks and anchor jumps.
   - Includes mute toggle with state saved in `localStorage`.

5. **Contact Transmission**:
   - Interactive form validates fields and initiates prefilled email transmission to `sohamdabholkar2005@gmail.com` with confetti celebration!
   - One-click copy email button with instant confirmation.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/soham2oo5/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Your portfolio will be live in under 45 seconds!

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist/` directory via `gh-pages` or GitHub Actions.

---

Designed & engineered for **Soham Dabholkar**.
*"Building intelligent systems. One line of code at a time."*
