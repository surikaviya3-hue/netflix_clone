import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TitleCards from '../../components/TitileCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      {/* ===== HERO – same structure as the screenshot ===== */}
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />

        <div className="hero-caption">
          {/* Title image (same as your original) */}
          <img src={hero_title} alt="" className='caption-img' />

          {/* Meta line – same format as screenshot */}
          <div className="hero-meta">
            <span>Series</span>
            <span className="dot">•</span>
            <span>Action</span>
            <span className="dot">•</span>
            <span>2023</span>
            <span className="dot">•</span>
            <span className="rating">U/A 16+</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>

          {/* Buttons – Play (white) + Episodes (gray) like the screenshot */}
          <div className="hero-btns">
            <button className='btn play-btn'>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className='btn episodes-btn'>
              Episodes
            </button>
          </div>
        </div>
      </div>

      {/* Content rows */}
      <div className="more-cards">
        <TitleCards title={"My List"} category={"now_playing"} />
        <TitleCards title={"Blockbuster Hits"} category={"now_playing"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
      </div>

      <Footer />
    </div>
  )
}

export default Home