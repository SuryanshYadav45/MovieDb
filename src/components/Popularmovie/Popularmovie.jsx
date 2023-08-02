import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Popularmovie.scss";

const PopularMovie = () => {
  const [popularmovie, setpopularmovie] = useState([]);

  useEffect(() => {
    const fetchmovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=8bee160639f926b57449b9c3344e5d34`
        );
        const data = await response.json();
        setpopularmovie([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovie();
    
  }, []);
  // useEffect(() => {
  //   console.log(popularmovie);
  // }, [popularmovie]);

  return (
    <div className="popularmovie">
    <h3>Popular Movie</h3>
      <div className="popularwrapper">
      
        {popularmovie?.[0]?.results?.map((items) => (
          <Card key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
