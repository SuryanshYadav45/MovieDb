import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import Popularmovie from "./components/Popularmovie/Popularmovie";
import HeroBanner from "./components/hero/HeroBanner";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Movie from "./components/singleMovie/Movie";
import Rated from "./pages/toprated/Rated";
import Upcoming from "./pages/Upcoming/Upcoming";

//  api=https://www.omdbapi.com/?i=tt3896198&apikey=645267c8

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/popular" element={<Popularmovie />} />
          <Route path="/toprated" element={<Rated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* <Route path="/card" element={<SearchCard/>} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
