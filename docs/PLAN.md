# PLAN `task-hub`

This file tracks progress across all phases and modules.

## Project Setup & Planning

### Frontend / UX
Focuses on user-facing design and interaction.

- [ ] Create wireframes for user flow  
- [ ] Add integration tests (Playwright / Cypress)  

### Backend / API / Data
Core logic, storage, and API-level responsibilities.
  
- [ ] Define authentication strategy  
- [ ] Set up database in production (Supabase / Railway)  
- [ ] Add database schema (Prisma)  
- [ ] Add seed script for development data  
- [ ] Add API documentation (Swagger or Markdown)
- [ ] Define APIs and data pipelines

### Platform / DevOps / Cross-Cutting Concerns
Shared tooling, environments, and overall product scaffolding.

- [x] Set up GitHub repo & branch strategy  
- [x] Name the repository `task-hub`  
- [x] Write a 1-sentence mission and for whom in repo description  
- [x] Define user goals  
- [x] Decide on target platforms (web/mobile)  
- [x] Define MVP platform  
- [x] Choose tech stack and document why each was selected  
- [ ] Define folder structure  
- [ ] Initialize project with chosen stack  
- [ ] Set up linting, Prettier, and Husky  
- [ ] Create `.env.example` file  
- [ ] Add unit tests (Jest)  
- [ ] Deploy app (Vercel, Render, Fly.io, or Netlify)  
- [ ] Set up CI/CD (GitHub Actions, Vercel preview)  
- [ ] Configure environment variables  
- [ ] Add custom domain (optional)  
- [ ] Add monitoring & error logging (Sentry, LogRocket, etc.) 

## User goals
- [ ] Capture tasks quickly
- [ ] See daily priorities
- [ ] Automatic categorization of tasks
- [ ] Visualize completed tasks in isolation from remaining