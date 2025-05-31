import React from 'react';
import { ListTodo } from 'lucide-react';

export const TodoHeader = () => {
  return (
    <header className="flex items-center gap-3 mb-8">
      <ListTodo className="w-8 h-8 text-blue-500" />
      <h1 className="text-3xl font-bold text-gray-800">TaskMaster</h1>
    </header>
  );
};