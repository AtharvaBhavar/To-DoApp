import React from 'react';
import { FILTERS, SORTS } from '../constants';

export const TodoFilter = ({ filter, sort, onFilterChange, onSortChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex gap-2">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              filter === value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        {SORTS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};