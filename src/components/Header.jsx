import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold">Movie Explorer</h1>
      <nav className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Discover
        </Link>
        <Link to="/watchlist" className="hover:underline">
          Watchlist
        </Link>
        <span className="text-gray-300 text-sm capitalize">Hi, {username}</span>
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/');
            window.location.reload()
          }}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm cursor-pointer"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
