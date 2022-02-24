import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove,
  onRateStar,
}) {
  return (
    <section>
      <h1 style={{ "texTransform": "capitalize" }}>{title}</h1>
      <button
        style={{ padding: "5px", margin: "5px" }}
        onClick={() => onRemove(id)}
      >
        Delete <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(newRating) => {
          onRateStar(newRating, id);
        }}
      />
    </section>
  );
}
