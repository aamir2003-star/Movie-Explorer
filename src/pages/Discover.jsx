import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { useSelector } from 'react-redux';

const Discover = () => {
  const searchType = useSelector((state) => state.movies.searchType);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-white text-xl font-bold mb-5">
        Discover {searchType === 'movie' ? 'Movies' : 'TV Shows'}
      </h2>
      <SearchBar />
      <MovieGrid />
    </div>
  );
};

export default Discover;
