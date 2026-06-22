import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard';
import fetchMovies from '../features/thunk/movieThunk';
import SkeletonCard from './common/SkeletonCard';



const MovieGrid = () => {
  const dispatch = useDispatch();
  const {
    movies,
    loading,
    error,
    hasMore,
    searchTerm,
    currentPage,
    searchType,
  } = useSelector((state) => state.movies);

  const loadMore = () => {
    dispatch(
      fetchMovies({ searchTerm, page: currentPage + 1, type: searchType })
    );
  };

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-400 text-base">{error}</p>
        <p className="text-gray-600 text-sm mt-1">
          Try a different search term
        </p>
      </div>
    );
  }

  if (loading && movies.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!loading && movies.length === 0 && searchTerm) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-base">No results found</p>
      </div>
    );
  }

  if (!searchTerm && movies.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-300 text-base font-bold">
          Search for something....
        </p>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <div className="grid grid-cols-5 gap-4 pt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      }
      endMessage={
        movies.length > 0 && (
          <p className="text-center text-gray-600 py-5 text-sm">
            You've seen everything
          </p>
        )
      }
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MovieGrid;
