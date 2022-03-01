import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import "./Color.css";
import { useColors } from "./ColorProvider";

export default function Color({
  id,
  title,
  color,
  rating
}) {

  const {rateColor, deleteColor} = useColors();

  return (
    <section className="main-color-div">
      <h1 className="color-title">{title}</h1>
      <button className="delete" onClick={() => deleteColor(id)}>
        <FaTrash className="delete-icon" /> 
        Delete
      </button>
      <div className="color-div" style={{backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(newRating) => {
          rateColor(newRating, id);
        }}
      />
    </section>
  );
}
