import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WatchlistItem from './WatchlistItem';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.movies.watchlist);
  const tvWatchList = useSelector((state) => state.movies.tvWatchList);
  const [activeTab, setActiveTab] = useState('movies');

  const currentList = activeTab === 'movies' ? watchlist : tvWatchList;
  const isTV = activeTab === 'tv';

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('movies')}
          className={`flex-1 py-2.5 text-sm font-bold  border border-gray-500 cursor-pointer rounded-lg ${
            activeTab === 'movies'
              ? 'bg-violet-700 text-white'
              : 'bg-[#1e1e2e] text-gray-500 hover:text-white'
          }`}
        >
          Movies {watchlist.length > 0 && `(${watchlist.length})`}
        </button>
        <button
          onClick={() => setActiveTab('tv')}
          className={`flex-1 py-2.5 text-sm font-bold  border border-gray-500 cursor-pointer rounded-lg ${
            activeTab === 'tv'
              ? 'bg-rose-700 text-white'
              : 'bg-[#1e1e2e] text-gray-500 hover:text-white'
          }`}
        >
          TV Shows {tvWatchList.length > 0 && `(${tvWatchList.length})`}
        </button>
      </div>

      {currentList.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-base">
            {isTV ? 'No TV shows in your list' : 'No movies in your list'}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Go to Discover and add some {isTV ? 'TV shows' : 'movies'}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {currentList.map((item) => (
            <WatchlistItem key={item.imdbID} movie={item} isTV={isTV} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
