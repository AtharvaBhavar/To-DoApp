import React from 'react';

export const TodoFooter = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;

  return (
    <footer className="mt-6 text-sm text-gray-500">
      <p>
        {completed} of {total} tasks completed
      </p>
    </footer>
  );
};