import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchTerm,
  setSearchType,
  clearMovies,
  fetchMovies,
} from '../features/movies/moviesSlice';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.movies.searchType);

  const handleTypeChange = (type) => {
    dispatch(setSearchType(type));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(setSearchTerm(input.trim()));
    dispatch(clearMovies());
    dispatch(
      fetchMovies({ searchTerm: input.trim(), page: 1, type: searchType })
    );
  };

  return (
    <div className="mb-6">
      <div className="flex gap-2 justify-center mb-3">
        <button
          onClick={() => handleTypeChange('movie')}
          className={`px-5 py-2  text-sm font-bold cursor-pointer rounded-2xl border border-gray-500 ${
            searchType === 'movie'
              ? 'bg-violet-700 text-white'
              : 'bg-[#222] text-gray-400'
          }`}
        >
          Movies
        </button>
        <button
          onClick={() => handleTypeChange('series')}
          className={`px-5 py-2 rounded-2xl text-sm font-bold cursor-pointer border border-gray-500 ${
            searchType === 'series'
              ? 'bg-rose-700 text-white'
              : 'bg-[#222] text-gray-400'
          }`}
        >
          TV Shows
        </button>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={searchType === 'movie' ? 'Search movies...' : 'Search TV shows...'}
          className="flex-1 bg-[#0f0f1a] border border-gray-600 rounded px-3 py-2 text-sm text-white outline-none"
        />
        <button
          type="submit"
          className={`px-5 py-2 rounded-xl  text-sm font-bold text-white cursor-pointer border-0  ${
            searchType === 'movie' ? 'bg-violet-700 hover:bg-violet-800' : 'bg-rose-700 hover:bg-rose-800'
          }`}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
