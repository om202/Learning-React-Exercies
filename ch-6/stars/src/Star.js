import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect}) {
  return (
    <>
      <FaStar color={selected ? "orange" : "grey"} size="2rem" onClick={onSelect}/>
    </>
  );
}
