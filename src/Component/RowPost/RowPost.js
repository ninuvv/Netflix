import React, { useEffect, useState } from "react";
import "./RowPost.css";
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const movieTrailer = (movie_id) => {
    console.log(movie_id);
    axios
      .get(`movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array is empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((movie,index) => {
          return (
            <img
              onClick={() => movieTrailer(movie.id)} key={index}
              className={props.isSmall ? "smallPoster_img" : "poster_img"}
              src={`${imageUrl + movie.backdrop_path}`}
              alt=""
            />
          );
        })}
      </div>

      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
