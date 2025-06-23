# 🚀 GitHub Project Explorer

An interactive dashboard to explore trending GitHub repositories with analytics, filtering, bookmarking, and note-taking.

## 🌟 Features
- 🔍 Search & filter by language, stars, updated date
- 📊 Charts for stars, forks, and issues (Chart.js)
- 📌 Bookmark repositories and add notes (localStorage)
- ⚡ Responsive UI with Tailwind CSS
- 🔧 Built with React + GitHub API

## 🚀 Live Demo
[https://your-username.github.io/github-project-explorer](https://your-username.github.io/github-project-explorer)

## 📦 Tech Stack
- React, Vite
- Tailwind CSS
- Chart.js
- Axios
- GitHub REST API

## 🛠 Installation

```bash
git clone https://github.com/your-username/github-project-explorer.git
cd github-project-explorer
npm install
npm run dev
```

> Create a `.env` file in root:
```
VITE_GITHUB_TOKEN=your_github_token_here
```

## 🔐 GitHub API Token
Generate a token at https://github.com/settings/tokens with public repo access.

## 📊 Deploy via GitHub Pages

```bash
npm install --save-dev gh-pages
```

Update `package.json`:

```json
"homepage": "https://your-username.github.io/github-project-explorer",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## 📝 License
This project is open-source under the MIT License.

---

> Built with ❤️ by [Your Name](https://github.com/your-username)