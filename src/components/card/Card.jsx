import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Card = (props) => {
  const navigate=useNavigate();
  
  return (
    <div className="card" onClick={()=>
    {navigate(`/movie/${props.data.id}`)
    props.setshowSearch(false);
    }}>
      <div className="card-content">
        <span className="title">{props.data.original_title}</span>
        <span className="releasedate">{props.data.release_date}</span>
        <span className="rating">{props.data.vote_average}⭐</span>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.data.poster_path ? props.data.poster_path:props.data.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default Card;
