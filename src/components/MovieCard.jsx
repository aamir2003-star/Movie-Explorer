import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWatchlist,
  addToTvWatchList,
} from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movies.watchlist);
  const tvWatchList = useSelector((state) => state.movies.tvWatchList);
  const [showMenu, setShowMenu] = useState(false);

  const isInMovieList = watchlist.some((m) => m.imdbID === movie.imdbID);
  const isInTvList = tvWatchList.some((m) => m.imdbID === movie.imdbID);

  const handleAddToMovies = () => {
    dispatch(addToWatchlist(movie));
    setShowMenu(false);
  };

  const handleAddToTv = () => {
    dispatch(addToTvWatchList(movie));
    setShowMenu(false);
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
        <div className="relative mt-auto pt-2">
          <button
            onClick={() => setShowMenu((v) => !v)}
            disabled={isInMovieList && isInTvList}
            className={`w-full py-1.5 text-xs rounded border cursor-pointer ${
              isInMovieList && isInTvList
                ? 'bg-[#333] text-gray-600 border-gray-700 cursor-not-allowed'
                : 'bg-violet-700 text-white border-violet-700'
            }`}
          >
            {isInMovieList && isInTvList
              ? '✓ In Both Lists'
              : '+ Add to Watchlist'}
          </button>
          {showMenu && (
            <div className="absolute bottom-full left-0 right-0 mb-1 bg-[#111] border border-gray-600 rounded z-10">
              <button
                onClick={handleAddToMovies}
                disabled={isInMovieList}
                className={`w-full text-left px-3 py-2 text-xs bg-transparent border-0 cursor-pointer ${
                  isInMovieList
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-violet-400'
                }`}
              >
                {isInMovieList ? '✓ In Movies List' : '+ Movies List'}
              </button>
              <div className="border-t border-gray-700" />
              <button
                onClick={handleAddToTv}
                disabled={isInTvList}
                className={`w-full text-left px-3 py-2 text-xs bg-transparent border-0 cursor-pointer ${
                  isInTvList
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-rose-400'
                }`}
              >
                {isInTvList ? '✓ In TV List' : '+ TV List'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
