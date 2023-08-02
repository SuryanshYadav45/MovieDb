import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate=useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=1`
        );
        const data = await response.json();
        setUpcomingMovies(data.results.slice(0, 6)); // Slice the array to get only the first 6 items
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpcomingMovies();
  }, []);
  useEffect(() => {
    console.log(upcomingMovies);
  }, [upcomingMovies]);
  return (
    <div className="banner">
      <Carousel
        ariaLabel={false}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        transitionTime={3}
      >
        {upcomingMovies.map((item) => (
          <div className="carouselContent" key={item.id} onClick={()=>navigate(`/movie/${item.id}`)}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            />
            <div className="moviedetail">
              <div className="moviedetailwrapper">
                <p className="name">{item.original_title}</p>
                <div className="info">
                  <span className="releasedate">{item.release_date}</span>
                  <span className="rating">{item.vote_average} ⭐</span>
                </div>
                <p>{item.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
