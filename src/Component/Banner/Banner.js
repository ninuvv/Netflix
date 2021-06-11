import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY,imageUrl} from "../../constants/constants";
import axios from "../../axios";
function Banner() {
  const[movie,setMovie]=useState('')

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0])
        // setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
            });
  }, []);
  return (
    <div style={{backgroundImage:`URL(${movie ? imageUrl+movie.backdrop_path:''})`}}
    className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title:''}</h1>
        <div className="banner_btns">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <h1 className="description">
        {movie ? movie.overview:''}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
