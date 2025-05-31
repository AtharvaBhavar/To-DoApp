import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { TodoFooter } from './components/TodoFooter';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    sort,
    setSort,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <TodoHeader />
        <main className="bg-white rounded-xl shadow-sm p-6">
          <TodoForm onAdd={addTodo} />
          <TodoFilter
            filter={filter}
            sort={sort}
            onFilterChange={setFilter}
            onSortChange={setSort}
          />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <TodoFooter todos={todos} />
        </main>
      </div>
    </div>
  );
}

export default App;