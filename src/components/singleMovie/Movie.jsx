import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Movie.scss';

const Movie = () => {
  const { id } = useParams();
  const [moviedata, setmoviedata] = useState([]);

  useEffect(() => {
    const fetchmovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8bee160639f926b57449b9c3344e5d34`
        );
        const data = await res.json();
        setmoviedata(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovie();
    console.log(moviedata);
  }, [id]);
 let rating=moviedata.vote_average;
  return (
  <div className="singlemovie">
    {/* <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original/${moviedata?.poster_path}`}
        alt=""
      />
    </div>   */}
      <div className="detail">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/original/${moviedata?.poster_path}`}
            alt=""
          />
        </div> 
        <div className="info">
          <h2 className="name ">{moviedata.original_title}</h2>
          <h2 className="date">{moviedata.release_date}</h2>
          <p className="desc">{moviedata.overview}</p>
          <h4 className="rate">{rating?.toFixed(1)}⭐</h4>
          <h6 className="revenue">{`$`+((moviedata?.revenue)/1000000)?.toFixed(1)} Million</h6>
          <a href={moviedata.homepage} className="moviewebsite" target="_blank">Visit Movie</a>
        </div>
      </div>
      </div>
  );
};

export default Movie;
