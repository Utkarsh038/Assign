export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Task Manager',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Manage your tasks efficiently',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
} as const;