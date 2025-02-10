import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../redux/recipeSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      dispatch(getRecipes(query)); // Fetch recipes based on search query
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-2 rounded-lg w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
