import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard';
import { fetchMovies } from '../features/movies/moviesSlice';

const MovieGrid = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, hasMore, searchTerm, currentPage } =
    useSelector((state) => state.movies);
  const loadMore = () => {
    dispatch(fetchMovies({ searchTerm, page: currentPage + 1 }));
  };

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!loading && movies.length === 0 && searchTerm) {
    return <p className="text-center text-gray-500 mt-4">No results found.</p>;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center items-center py-4">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-gray-500"></div>
        </div>
      }
      endMessage={
        movies.length > 0 && (
          <p className="text-center text-gray-400 py-4 text-sm">
            You're all caught up.
          </p>
        )
      }
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {loading && movies.length === 0 && (
        <p className='text-center text-gray-400 py-4'>Loading....</p>
      )}
    </InfiniteScroll>
  );
};

export default MovieGrid;
