import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  

  const {id} = useParams(); 
  const navigation = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:"",

  })

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjRlZjUzNTZlZTdkN2UzYzk0OWZlNjJjNzEyOGZmYyIsIm5iZiI6MTc3MTAwOTQ0MC4xNDUsInN1YiI6IjY5OGY3NWEwZmJiMDg0MDYxMjEwYTA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4EC96s512UgAIUnqhMutV8XxwEgW9Xu0mhuqfeBNLKI'
  }
};

useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
} ,[]);

  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=""  onClick={()=>{navigation(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10) }</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

export default Player
