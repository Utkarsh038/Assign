import { config } from '../config';
import type { Task } from '../types';

const API_URL = 'http://localhost:3000/api';

export const api = {
  tasks: {
    list: async (userId: string): Promise<Task[]> => {
      const response = await fetch(`${API_URL}/tasks`, {
        headers: {
          'user-id': userId,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch tasks');
      return response.json();
    },

    create: async (userId: string, task: Omit<Task, 'id' | 'user_id' | 'created_at' | 'updated_at'>): Promise<Task> => {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-id': userId,
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error('Failed to create task');
      return response.json();
    },

    update: async (userId: string, taskId: string, task: Partial<Task>): Promise<Task> => {
      const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'user-id': userId,
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error('Failed to update task');
      return response.json();
    },

    delete: async (userId: string, taskId: string): Promise<void> => {
      const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'user-id': userId,
        },
      });
      if (!response.ok) throw new Error('Failed to delete task');
    },
  },
};