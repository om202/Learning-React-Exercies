import React from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({totalstars=5, selectedStars=0, onRate=f=>f }) {
  return (
    <div>
      {createArray(totalstars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={()=>onRate(i+1)}/>
      ))}
      <p>
        {selectedStars} of {totalstars}
      </p>
    </div>
  );
}
