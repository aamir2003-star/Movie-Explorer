import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

const Discover = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Discover Movies</h2>
      <SearchBar />
      <MovieGrid />
    </div>
  );
};

export default Discover;
