import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Discover from '../pages/Discover'
import WatchlistPage from '../pages/WatchlistPage'

const AppContet = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default AppContet
