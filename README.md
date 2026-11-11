# Priyanshi Gupta — Futuristic 3D Personal Engineering Portfolio

A modern, high-performance personal portfolio website engineered for **Priyanshi Gupta** (Software Engineer & AI/ML Engineer). Built with React, TypeScript, Tailwind CSS, Three.js, and the Web Speech API.

---

## 🚀 Key Features

1. **Interactive 3D Visualizer (`ThreeCanvas.tsx`)**
   - Lightweight, responsive WebGL 3D neural particle sphere that gently rotates and tilts according to cursor movement.
   - Built with pure Three.js with automatic resize handling and cleanup.

2. **Browser Voice Navigation (`VoiceNavigation.tsx`)**
   - Natural voice commands powered by the Web Speech API (`webkitSpeechRecognition`).
   - Visual listening indicator, live feedback banner, and optional spoken confirmations.
   - Privacy-focused: audio is processed strictly on-device in the browser; no voice data is stored or recorded.
   - Commands include: `"Go to Home"`, `"Open About"`, `"Show Skills"`, `"Show Projects"`, `"Open Experience"`, `"Achievements"`, `"Education"`, `"Contact"`, and `"Toggle Theme"`.

3. **Interactive Skill-to-Project Cross-Filtering**
   - Click any skill card in the **Skills** section to instantly view the projects that utilize that technology in the **Projects** explorer.

4. **Deep Project Explorer & Modal Breakdown**
   - Filter projects by category (*Full-Stack*, *AI & ML*, *Computer Vision*) or live keyword search.
   - Full technical modal view displaying problem statement, motivation, architecture flow, individual contributions, engineering challenges, and solutions.

5. **Verified Credentials & Achievements Showcase**
   - Highlights competitive coding rankings (TCS CodeVita 87th Globally, LeetCode Top 9.67%, 5-Star HackerRank).
   - Direct link to the verified Google Drive credentials vault for instant recruiter verification.

6. **Dark & Light Mode Switcher**
   - Default Midnight Obsidian (`#0B0813`) with Electric Violet (`#9560F5`) & Neon Pink (`#D45AC5`) accents.
   - High-contrast, clean light theme with state persistence in `localStorage`.

7. **Centralized Data Store (`src/data/portfolioData.ts`)**
   - Single source of truth for all personal details, skills, projects, experience, education, and achievements. Update your content without touching component files.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom glassmorphism & gradients
- **3D Graphics:** Three.js
- **Icons:** Lucide React & custom SVG brand icons
- **Audio/Voice:** Browser Web Speech API

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized, code-split production files will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Update Your Portfolio Information

To edit any details, simply open `src/data/portfolioData.ts`. You can:
- Add, remove, or modify **Projects**
- Update your **Technical Skills**, proficiency levels, and project links
- Add new **Certifications** or **Achievements**
- Update your **Resume PDF** (place your updated resume in `public/Priyanshi_Gupta.pdf`)
- Swap your **Avatar Photo** (drop your image into `public/` and update `avatarUrl`)

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Priyanshi Gupta 3D Engineering Portfolio"
   git branch -M main
   git remote add origin https://github.com/Er-Priyanshi-Gupta/<repo-name>.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will auto-detect Vite and configure the build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository in [netlify.com](https://netlify.com).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **Deploy Site**.

---

© 2026 Priyanshi Gupta. Built with algorithmic precision and modern engineering.
