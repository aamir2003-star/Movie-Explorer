import React from 'react';
import Watchlist from '../components/Watchlist';

const WatchlistPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-white text-xl font-bold mb-5">My Watchlist</h2>
      <Watchlist />
    </div>
  );
};

export default WatchlistPage;
