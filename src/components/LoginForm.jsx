import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login(username.trim()));
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
      <div className="w-80 bg-[#16213e] border border-gray-600 rounded-lg p-6">
        <h1 className="text-white text-center text-xl font-bold mb-1">Movie Explorer</h1>
        <p className="text-gray-500 text-center text-sm mb-5">Discover and track your favourites</p>

        <h2 className="text-gray-400 text-sm mb-3">Sign in to continue</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-400 text-sm mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter any username"
              autoFocus
              className="w-full bg-[#0f0f1a] border border-gray-600 rounded px-3 py-2 text-sm text-white outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-700 text-white text-sm font-bold py-2 rounded cursor-pointer border-0"
          >
            Continue →
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
