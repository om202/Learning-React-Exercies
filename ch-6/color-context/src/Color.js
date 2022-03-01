import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import "./Color.css";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove,
  onRateStar,
}) {
  return (
    <section className="main-color-div">
      <h1 className="color-title">{title}</h1>
      <button className="delete" onClick={() => onRemove(id)}>
        <FaTrash className="delete-icon" /> 
        Delete
      </button>
      <div className="color-div" style={{backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(newRating) => {
          onRateStar(newRating, id);
        }}
      />
    </section>
  );
}
