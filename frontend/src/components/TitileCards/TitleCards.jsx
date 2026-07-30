import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

 useEffect(() => {
  if (!category) return; 
  fetch(
    `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?api_key=864ef5356ee7d7e3c949fe62c7128ffc&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => {
      setApiData(data.results);
    })
    .catch((err) => console.error(err));
}, [category]);;

  return (
    <div className="title-cards">
      <h2>{title ? title : ""}</h2>

      <div
        className="card-list"
        ref={cardsRef}
        onWheel={handleWheel}
      >
        {apiData.map((movie) => (
          <Link to={`/player/${movie.id}`} className="card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <p>Year: {movie.release_date?.split("-")[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;