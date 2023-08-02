import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./PopulateMovie.scss";

const PopulateMovie = (props) => {

    console.log("top movie"+props.data);
  return (
    <div className="populate">
    <h3>{props.title}</h3>
      <div className="populatewrapper">
      
        {props.data?.results?.map((items) => (
          <Card key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default PopulateMovie;
