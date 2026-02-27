import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWatchlist,
  addToTvWatchList,
} from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.movies.searchType);
  const watchlist = useSelector((state) => state.movies.watchlist);
  const tvWatchList = useSelector((state) => state.movies.tvWatchList);
  const isMovie = searchType === 'movie';
  const isAlreadyAdded = isMovie
    ? watchlist.some((m) => m.imdbID === movie.imdbID)
    : tvWatchList.some((m) => m.imdbID === movie.imdbID);

  const handleAddToWatchlist = () => {
    if (isAlreadyAdded) return;
    if (isMovie) {
      dispatch(addToWatchlist(movie));
    } else {
      dispatch(addToTvWatchList(movie));
    }
  };

  return (
    <div className="border border-gray-600 rounded overflow-hidden bg-[#16213e] flex flex-col">
      <div className="relative">
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full object-cover block"
            style={{ aspectRatio: '2/3' }}
          />
        ) : (
          <div
            className="bg-[#0f0f1a] text-gray-600 text-xs flex items-center justify-center"
            style={{ aspectRatio: '2/3' }}
          >
            No Poster
          </div>
        )}
      </div>

      <div className="p-2.5 flex flex-col gap-1 flex-1">
        <h3 className="text-white text-sm font-bold m-0 leading-snug line-clamp-2">
          {movie.Title}
        </h3>
        <p className="text-gray-500 text-xs m-0">{movie.Year}</p>
        <div className="mt-auto pt-2">
          <button
            onClick={handleAddToWatchlist}
            disabled={isAlreadyAdded}
            className={`w-full py-1.5 text-xs rounded border cursor-pointer transition-colors ${
              isAlreadyAdded
                ? 'bg-[#333] text-gray-500 border-gray-700 cursor-not-allowed'
                : isMovie
                ? 'bg-violet-700 hover:bg-violet-600 text-white border-violet-700'
                : 'bg-rose-700 hover:bg-rose-600 text-white border-rose-700'
            }`}
          >
            {isAlreadyAdded
              ? `✓ In ${isMovie ? 'Movies' : 'TV'} Watchlist`
              : `+ Add to ${isMovie ? 'Movies' : 'TV'} Watchlist`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
