import React from 'react';
import Watchlist from '../components/Watchlist';

const WatchlistPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">My Watchlist</h2>
      <Watchlist />
    </div>
  );
};

export default WatchlistPage;
