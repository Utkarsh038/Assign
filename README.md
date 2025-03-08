# Task Management System

A full-stack task management application built with React, TypeScript, Node.js, and Supabase.

## Features

- 🔐 User Authentication
- ✅ Task Management (CRUD operations)
- 📱 Responsive Design
- 🚀 Real-time Updates
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- React Hot Toast
- Lucide React Icons

### Backend
- Node.js
- Express
- TypeScript
- Supabase
- Zod (validation)

## Prerequisites

- Node.js (v18 or higher)
- npm
- Supabase account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_NAME=Task Manager
VITE_APP_DESCRIPTION=Manage your tasks efficiently
VITE_APP_VERSION=1.0.0
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

This will start both the frontend and backend servers concurrently:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Project Structure

```
├── server/                 # Backend code
│   ├── index.ts           # Server entry point
│   ├── routes/            # API routes
│   └── middleware/        # Express middleware
├── src/                   # Frontend code
│   ├── components/        # React components
│   ├── context/          # React context
│   ├── lib/              # Utilities and API client
│   ├── pages/            # Page components
│   └── types/            # TypeScript types
└── public/               # Static assets
```

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Authentication
Authentication is handled through Supabase authentication service.

## Database Schema

### Tasks Table
```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

## Security

- JWT-based authentication via Supabase
- Input validation using Zod
- CORS protection
- Helmet security headers
- Row Level Security in Supabase

## Development

Run tests:
```bash
npm run test
```

Build for production:
```bash
npm run build
```

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. The frontend build will be in the `dist` directory
3. Deploy the backend to your preferred hosting service
4. Update the API URL in the frontend configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request