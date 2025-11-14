# Project — Task Hub

**Mission:**  
A full-stack platform that helps users **organize, prioritize, and nudge** themselves toward completing tasks with focus and accountability.

**Tech Stack:**  
Technical choices based on the industry trends at the time of creation.

Layer                                | Technology                         | Purpose                                      |  Why                                                                                         |
| ------------------------------------ | ---------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Application Framework (Frontend)**               | **Next.js (React + TypeScript)**   | Builds the Single Page Application (SPA) UI              | Widely used in production
| **UI Styling**                     | **Tailwind CSS**     | Rapid styling        | Works well with Next.js.   Keeps bundles sizing small and easy to learn and maintain
| **UI Component Library**                     | **shadcn/ui**       | Prebuilt components       | Works well with Next.js and Tailwind CSS. Matches modern design standards            |           |
| **State Management & Data Fetching** | **TanStack Query**   | Caches, syncs, and manages API data          | Handles caching and loading/error UI states             |
| **Visualization**         | **Recharts**                       | Task metrics and analytics                   | Built for React-native applications with simple charting requirements.                                              |
| **Application Framework (Backend)**                | **NestJS**TypeScript | Core API and business logic                  | Operationally  mature and allows faster time to deployment  |
| **Database**                         | **PostgreSQL**                     | Stores users and tasks      |Mature and best for relational data                                             |
| **ORM**                | **Prisma**                         | Schema definition and database CRUD          | Type-safe, human-readable schema, easy migrations and seeding                                                |
| **API Style**                        | **RESTful API**                    | Defines endpoints for frontend consumption   | Simple, widely understood, ideal for smaller services                                                        |
| **Containerization**                 | **Docker**                         | Local development and deployment consistency | Encapsulates dependencies, easy to deploy anywhere                                                           |
| **Hosting (Frontend)**               | **Render**              | Deploy static assets and frontend app        | Seamless Next.js integration, auto-deployment from Git                                                       |
| **Hosting (Backend)**                | **Render**      | Run backend APIs and Postgres                | Simple managed environments for small services, avoiding heavy ops cost                                               |
| **Environment Management**           | **dotenv + .env files**            | Manage config and secrets                    | Keeps configuration secure and environment-specific                                                          |
| **Logging**                          | **Pino**                | Structured logging for backend               | Lightweight, JSON-friendly logs                                    |
| **AI Integration**        | **OpenAI API (Node SDK)**          | Smart task suggestions or summaries          | To support AI powered workflows       |
| **Version Control**                  | **Git + GitHub**                   | Source control and portfolio visibility      | Standard practice                                          |

**UX design**  
Lo-fi wireframe:  https://www.figma.com/make/5eAzamI2XJLJ3Ub47xR1dN/Task-Organizer-Wireframe?node-id=0-4&t=m3Mw5W6N24p2mgna-0