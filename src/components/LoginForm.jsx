import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import Button from './common/Button';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Movie Explorer</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-gray-500"
          />
          <Button  className={"w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
