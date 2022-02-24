import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({totalstars=5, selectedStars=0}) {
  
  const [rating, setRating] = useState(0)

  return (
    <div style={{padding: "5px"}}>
      {createArray(totalstars).map((n, i) => (
        <Star key={i} selected={rating > i} onSelect={()=>{setRating(i+1)}}/>
      ))}
      <p>
        {rating} of {totalstars}
      </p>
    </div>
  );
}
