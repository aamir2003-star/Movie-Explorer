import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movies.watchlist);
  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);
  const handleAdd = () => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <div className="border border-gray-200 rounded p-3 shadow-sm flex flex-col gap-2">
      {movie.Poster && movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-56 object-cover rounded"
        />
      ) : (
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center rounded text-gray-400 text-sm">
          No Poster
        </div>
      )}
      <h3 className="font-semibold text-sm leading-tight">{movie.Title}</h3>
      <p className="text-gray-500 text-xs">{movie.Year}</p>
      <button
        onClick={handleAdd}
        disabled={isInWatchlist}
        className={`mt-auto text-sm py-1 px-3 rounded border ${
          isInWatchlist
            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
            : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer'
        }`}
      >
        {isInWatchlist ? 'Added' : '+ Watchlist'}
      </button>
    </div>
  );
};

export default MovieCard;
