import React, { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  const navRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img
          src={logo}
          alt="Netflix"
          onClick={() => navigate("/")}
          style={{ cursor: 'pointer' }}
        />
        <ul>
          <li
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li onClick={() => navigate("/news")}>News</li>
          <li>More ▾</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icon' />

        <div className="bell-wrap">
          <img src={bell_icon} alt="Notifications" className='icon' />
          <span className="badge">4</span>
        </div>

        <div className="children-btn">
          <span className="children-icon">😊</span>
          Children
        </div>

        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar