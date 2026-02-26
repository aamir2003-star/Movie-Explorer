import React from 'react';
import { useSelector } from 'react-redux';
import WatchlistItem from './WatchlistItem';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.movies.watchlist);

  if (watchlist.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">Your watchlist is empty.</p>
    );
  }

  return (
    <div className='flex flex-col gap-3'>
      {watchlist.map((movie)=>{
        return <WatchlistItem key={movie.imdbID} movie={movie} />
      })}
    </div>
  );
};

export default Watchlist;
