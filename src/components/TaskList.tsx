import React from 'react';
import { format } from 'date-fns';
import { Check, Trash2, Edit2 } from 'lucide-react';
import type { Task } from '../types';
import clsx from 'clsx';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (task: Task, newStatus: Task['status']) => void;
}

export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}: TaskListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={clsx(
            'bg-white rounded-lg shadow p-6 space-y-4',
            task.status === 'completed' && 'bg-gray-50'
          )}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="text-gray-400 hover:text-gray-500"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="text-gray-600">{task.description}</p>
          {task.due_date && (
            <p className="text-sm text-gray-500">
              Due: {format(new Date(task.due_date), 'PPP')}
            </p>
          )}
          <div className="flex justify-between items-center pt-4">
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task, e.target.value as Task['status'])}
              className="block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            {task.status === 'completed' && (
              <Check className="h-5 w-5 text-green-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}