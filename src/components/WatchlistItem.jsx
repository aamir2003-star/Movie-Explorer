import { useDispatch } from 'react-redux';
import {
  removeFromWatchlist,
  toggleWatched,
  removeFromTvWatchList,
  toggleTvWatched,
} from '../features/movies/moviesSlice';

const WatchlistItem = ({ movie, isTV }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (isTV) dispatch(removeFromTvWatchList(movie.imdbID));
    else dispatch(removeFromWatchlist(movie.imdbID));
  };

  const handleToggle = () => {
    if (isTV) dispatch(toggleTvWatched(movie.imdbID));
    else dispatch(toggleWatched(movie.imdbID));
  };

  return (
    <div
      className={`flex items-center gap-3 bg-[#16213e] border border-gray-600 rounded p-2.5 ${movie.watched ? 'opacity-60' : ''}`}
    >
      <div className="relative shrink-0">
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-12 h-18 object-cover rounded block"
          />
        ) : (
          <div className="w-12 h-18 bg-[#0f0f1a] rounded flex items-center justify-center text-gray-600 text-xs">
            N/A
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className={`text-sm font-bold m-0 truncate ${movie.watched ? 'line-through text-gray-500' : 'text-white'}`}
        >
          {movie.Title}
        </h3>
        <p className="text-gray-500 text-xs mt-0.5 m-0">{movie.Year}</p>

        <label className="flex items-center gap-1.5 mt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={movie.watched || false}
            onChange={handleToggle}
            className="cursor-pointer"
          />
          <span className="text-gray-500 text-xs">
            {movie.watched ? 'Watched' : 'Mark as watched'}
          </span>
        </label>
      </div>

      <button
        onClick={handleRemove}
        className="shrink-0 border border-red-600 text-red-500 bg-transparent px-2.5 py-1 rounded text-xs cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default WatchlistItem;
