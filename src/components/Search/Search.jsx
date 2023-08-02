import React, { useState, useEffect } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import Card from "../card/Card";
import { FaArrowUp } from "react-icons/fa";

const Search = (props) => {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setsearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchMovies();
    }
  };

  return (
    <div className="search">
      <div className="top">
        <input
          type="text"
          placeholder="search for the movie"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <MdClose
          className="closebtn"
          onClick={() => props.setshowSearch(false)}
        />
      </div>
      <div className="content">
        {/* {searchResult.length < 1 && <p>oops no result found</p>} */}

        {searchResult?.results?.map((item) => (
          <Card setshowSearch={props.setshowSearch} data={item} />
        ))}
      </div>
      {searchResult.length>0 && 
        <FaArrowUp
        className="arrowbutton"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />}
    </div>
  );
};

export default Search;

// <button onClick={()=>props.setshowSearch(false)} >close</button>
