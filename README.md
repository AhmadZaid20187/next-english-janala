# English Janala 🪟

**A simple, Bangla-friendly web app for learning English vocabulary, one level at a time.**

🔗 **Live Demo:** [next-english-janala.vercel.app](https://next-english-janala.vercel.app)

![English Janala Screenshot](https://raw.githubusercontent.com/AhmadZaid20187/next-english-janala/refs/heads/main/public/web-pic.jpeg)

---

## 📖 About the Project

English Janala ("janala" means *window* in Bangla) is a vocabulary learning website built for beginners. Instead of showing every word at once, the words are grouped into lessons (levels). The learner picks a lesson and studies only the words of that level, which keeps learning simple and focused.

This is a solo practice project I built to apply what I learned about Next.js, React, and modern UI styling.

## ✨ Features

- **Level-based lessons:** Lesson buttons (Lesson-1 to Lesson-7) are fetched dynamically, not hard-coded.
- **Guided empty state:** Before a lesson is selected, the page shows a friendly message asking the learner to choose one.
- **Load words by level:** Clicking a lesson (for example Lesson-2) shows the vocabulary for that level.
- **Word filtering and search:** Learners can filter and find words easily.
- **FAQ section:** Answers common questions about how to start and how the lessons work.
- **Bangla + English interface:** Helpful Bangla text makes the site easier for Bangla-speaking learners.
- **Responsive design:** Works on desktop and mobile screens.

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) |
| UI Library | [React 19](https://react.dev/) (with React Compiler) |
| Language | JavaScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) + [daisyUI 5](https://daisyui.com/) |
| Icons | React Icons, Font Awesome |
| Fonts | Google Fonts |
| Deployment | [Vercel](https://vercel.com/) |

## 📂 Project Structure

```
next-english-janala/
├── public/          # Static assets (images, logo)
├── src/             # Application source code (pages, components)
├── package.json
├── next.config.mjs
└── postcss.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AhmadZaid20187/next-english-janala.git

# 2. Go to the project folder
cd next-english-janala

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Check code with ESLint |

## 🎯 What I Learned

- Fetching data and rendering it dynamically in a Next.js app
- Managing UI state so the page changes when a user selects a lesson
- Handling empty states to guide the user
- Building a clean, responsive UI with Tailwind CSS and daisyUI
- Deploying a Next.js project on Vercel

## 🔮 Future Improvements

- Add pronunciation audio for each word
- Add quizzes to test learned words
- Save learning progress for each user
- Add a favorites list for difficult words

## 👨‍💻 Author

**Ahmad Zaid**

- GitHub: [@AhmadZaid20187](https://github.com/AhmadZaid20187)
- LinkedIn: [linkedin.com/in/zaid20187](https://linkedin.com/in/zaid20187)

---

⭐ If you like this project, consider giving it a star!