import React from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";

export default function ColorList() {
  const {colors, addColor} = useColors();
  return !colors.length ? (
    <div>No Colors Listed</div>
  ) : (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
