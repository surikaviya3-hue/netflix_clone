import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import News from "./pages/news/News"

const App = () => {
  console.log("https://drive.google.com/drive/u/0/folders/1Z5C2HQYAJvTlikeuCZL4S5kesw4K4Xsk");

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn && location.pathname !== "/login") {
      navigate("/login")
    }

    if (isLoggedIn && location.pathname === "/login") {
      navigate("/")
    }

  }, [location.pathname])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  )
}

export default App