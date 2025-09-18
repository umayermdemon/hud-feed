# HUDFeed

> A Head-Up Display (HUD) style personal news feed that pulls, ranks, and streams content from multiple sources.  
> Goal: Cut through the noise → focus on high-signal content.

---

## 🚀 Project Overview

HUDFeed is a **personalized, auto-scrolling news HUD** that aggregates posts from multiple sources (HackerNews, Subreddits, Newsletters, Twitter/X accounts), ranks them based on focus + popularity, and displays them in a clean overlay interface.

Core features:

- **Content aggregation** (HackerNews, RSS/newsletters, Reddit, X)
- **Ranking** (user focus + popularity + recency)
- **Auto-scrolling HUD UI** (continuous ticker-style feed)
- **Bookmarks & resurfacing** (saved posts reappear periodically)
- **User settings** (sources, scroll speed, categories)
- **AI integration** (summaries via OpenAI API key)

---

## 🛠️ Tech Stack

**Frontend**

- React + Next.js
- Redux Toolkit (state management)
- Tailwind CSS + Framer Motion (UI/animations)

**Backend**

- Node.js + Express
- PostgreSQL (persistent storage)
- Prisma ORM (database migrations & queries)
- Redis + BullMQ (background jobs & caching)

**AI Integration**

- User-provided API keys (OpenAI, etc.)
- Summarization pipeline

**Deployment**

- Frontend → [Vercel](https://vercel.com)
- Backend → Vercel Serverless / Render / Railway
- Database → Supabase / Neon / Railway (Postgres)
- Redis → Upstash (serverless Redis)

---

## 📂 Project Structure

hud-feed/
│
├── frontend/ # Next.js + Redux frontend (HUD UI)
│ ├── components/
│ ├── pages/
│ ├── store/
│ └── ...
│
├── backend/ # Express backend
│ ├── src/
│ │ ├── api/ # API routes
│ │ ├── workers/ # Background fetch jobs
│ │ ├── services/ # Business logic (ranking, bookmarks)
│ │ ├── db/ # Prisma / database
│ │ └── ...
│ └── package.json
│
├── docker-compose.yml # Local Postgres + Redis setup
└── README.md

---

## 📊 Database Schema (MVP)

- **users** → user profile & settings
- **posts** → normalized posts from all sources
- **bookmarks** → saved posts with resurfacing timestamps
- **user_focus** → tracked keywords for ranking

---

## 🔄 Workflow

1. **Fetch jobs** (HackerNews, RSS, Reddit, X) run in background.
2. **Posts normalized** → saved to DB.
3. **Ranking engine** scores posts by:
   - Focus match
   - Popularity (likes, upvotes, shares)
   - Recency
4. **Frontend HUD** requests feed → displays auto-scrolling list.
5. Users can **bookmark posts** → resurfacing logic re-adds them later.
6. Optional: **AI summary** when user provides API key.

---

## 🏃 Getting Started (Local Dev)

### 1. Clone repo

```bash
git clone https://github.com/umayermdemon/hud-feed.git
cd hud-feed
```

### 2. Backend setup

```bash
cd backend
npm install
npx prisma migrate dev --name init
npm run dev
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

🤝 Contributing

Contributions welcome!
Please open issues / pull requests to suggest features or improvements.

📜 License

MIT License © 2025

---

Do you want me to also create a **GitHub issue template** with the day-by-day roadmap I gave you earlier, so you can just paste it int
