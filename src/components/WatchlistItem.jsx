import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist, toggleWatched } from '../features/movies/moviesSlice';

const WatchlistItem = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded p-3 shadow-sm">
      {movie.Poster && movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-16 h-24 object-cover rounded shrink-0"
        />
      ) : (
        <div className='w-16 h-24 bg-gray-100 flex items-center justify-center rounded text-gray-400 text-xs shrink'>
          No Poster
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-semibold">{movie.Title}</h3>
        <p className="text-gray-500 text-sm">{movie.Year}</p>
        <label className="flex items-center gap-2 mt-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={movie.watched}
            onChange={() => dispatch(toggleWatched(movie.imdbID))}
            className="cursor-pointer"
          />
          Watched
        </label>
      </div>
      <button
        onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}
        className="text-red-500 hover:text-red-700 text-sm border border-red-300 rounded px-2 py-1 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
};

export default WatchlistItem;
