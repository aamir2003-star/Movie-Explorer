import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-[#16213e] border-b-2 border-gray-600 py-3">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg">Movie Explorer</span>
        </div>
        <nav className="flex gap-2">
          <Link
            to="/"
            className={`px-4 py-1.5  text-sm border rounded-2xl border-gray-500 no-underline ${
              location.pathname === '/'
                ? 'bg-violet-700 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Discover
          </Link>
          <Link
            to="/watchlist"
            className={`px-4 py-1.5  text-sm border border-gray-500 rounded-2xl no-underline flex items-center gap-2 ${
              location.pathname === '/watchlist'
                ? 'bg-violet-700 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Watchlist
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm capitalize">Hi, {username}</span>
          <button
            onClick={() => {
              dispatch(logout());
              navigate('/');
            }}
            className="bg-red-600 text-white text-sm px-3 py-1.5 rounded-xl cursor-pointer border-0"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
