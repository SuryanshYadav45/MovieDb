import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./Rated.scss";

import PopulateMovie from "../../components/populatemovie/PopulateMovie";

const Rated = () => {
  const [rated, setrated] = useState([]);
  useEffect(() => {
    const fetchmovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=8bee160639f926b57449b9c3344e5d34`
        );
        const data = await res.json();
        setrated(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovie();
  }, []);

  useEffect(() => {
    console.log(rated);
  }, [rated]);
  return <div className="rated">
    <PopulateMovie title="Top Rated" data={rated}/>
  </div>;
};

export default Rated;
