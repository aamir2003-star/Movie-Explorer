import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Discover from './pages/Discover';
import WatchlistPage from './pages/WatchlistPage';
import AppContet from './routes/AppContet';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <>
      <Header />
    <AppContet />
    </>
  );
};

export default App;
