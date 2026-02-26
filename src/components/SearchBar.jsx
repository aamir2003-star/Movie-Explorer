import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, clearMovies, fetchMovies } from '../features/movies/moviesSlice';
import Button from './common/Button';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(setSearchTerm(input.trim()));
    dispatch(clearMovies());
    dispatch(fetchMovies({ searchTerm: input.trim(), page: 1 }));
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies...."
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-500"
      />
      <Button
        type="submit"
        className={"bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
