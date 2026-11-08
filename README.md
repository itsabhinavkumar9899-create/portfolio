# Abhinav Kumar — Engineering Portfolio Website

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> A modern, high-performance, FAANG-tier developer portfolio website engineered for **Abhinav Kumar** (Full-Stack Developer & Data Science Undergraduate, B.Tech '28 @ Vishveshwarya Group of Institutions, Greater Noida).

---

## 🚀 Key Architectural Features

- **FAANG-Tier Dark Aesthetic:** Deep slate/charcoal foundations (`#030712`), ambient radial mesh glows, and cyan/indigo accents with refined typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Interactive Glassmorphic Navigation:** Floating frosted glass navbar with responsive mobile menu, smooth scrolling section spies, and direct resume/contact triggers.
- **Dynamic Terminal & Code Previews:** Interactive developer manifesto and JSON spec viewer in an authentic terminal window with 1-click clipboard copy.
- **Categorized Skills Matrix:** Multi-filter skill tabs with real-time keyword search across Languages, Frontend, Backend & Databases, and Developer Tools.
- **Production-Style Featured Projects:** 
  - **Full-Stack API Testing Tool (Postman Clone):** Built with React, Vite, Node.js, Express, MongoDB, Mongoose, deployed on Vercel.
  - **Predictive ML Analytics & Housing Intelligence Engine:** Scikit-Learn multivariate regression pipeline + React dashboard.
  - **Distributed Real-Time Task & Collab Workspace:** WebSocket event engine with optimistic UI.
  - **AlgoVisualizer:** Graph and sorting algorithm simulation suite.
- **Architecture Deep-Dive Modal:** In-depth technical specifications, data schemas, and deployment notes for each project.
- **Comprehensive Academic & CS Foundations:** Detailed B.Tech Computer Science & Data Science curriculum display, core subjects (DSA, DBMS, OS, TOC, ML), and 4-year progression timeline.
- **Interactive Contact & One-Click Copy:** Instant 1-click email copy to clipboard with toast notification feedback and an interactive form.
- **FAANG-Ready Resume Modal:** In-browser resume viewer with printable formatting and instant `.txt` resume generator.

---

## 🛠️ Tech Stack

- **Client:** React 18, Tailwind CSS, Lucide React Icons
- **Build Tool:** Vite 5
- **Fonts:** Google Fonts (Plus Jakarta Sans, JetBrains Mono)
- **Deployment:** Vercel / Netlify Ready

---

## 📦 Project Structure

```
portfolio/
├── index.html                   # HTML5 Entry, SEO meta tags, Google Fonts
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom design tokens, colors & keyframes
├── vite.config.js               # Vite build config
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application orchestrator & toast system
│   ├── index.css                # Tailwind base styles, glassmorphism utilities
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content & specs
│   └── components/
│       ├── Navbar.jsx           # Floating glassmorphism navbar & mobile menu
│       ├── Hero.jsx             # High-impact hero, typing effect, CTA buttons
│       ├── About.jsx            # Narrative, interactive terminal, engineering pillars
│       ├── Skills.jsx           # Interactive categorized skill grid & live search
│       ├── Projects.jsx         # Project cards, filters, and architecture modals
│       ├── Education.jsx        # B.Tech CS & DS details, subjects, and milestones
│       ├── Contact.jsx          # One-click email copy & interactive message form
│       ├── ResumeModal.jsx      # In-browser resume viewer, print & download
│       └── Footer.jsx           # Clean footer with dynamic year & back-to-top
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18.x or later)
- npm or pnpm or yarn

### Installation
```bash
# Clone the repository or navigate to folder
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The site will be available at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Abhinav Kumar portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Import the project into [Vercel](https://vercel.com):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy**!

---

## 👤 Developer Profile

- **Name:** Abhinav Kumar
- **Role:** Full-Stack Developer & Data Science Undergraduate (B.Tech '28)
- **Institution:** Vishveshwarya Group of Institutions (VGI), Greater Noida
- **Email:** [itsabhinavkumar9899@gmail.com](mailto:itsabhinavkumar9899@gmail.com)
