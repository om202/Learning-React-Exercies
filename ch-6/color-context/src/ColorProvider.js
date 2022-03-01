import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import ColorData from "./color-data.json";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(ColorData);

  const addColor = (title, color) => {
    setColors([
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
      ...colors,
    ]);
  };

  const rateColor = (rating, id) => {
    setColors(
      colors.map((color) => {
        return color.id === id
          ? {
              ...color,
              rating,
            }
          : color;
      })
    );
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider
      value={{ colors, setColors, addColor, rateColor, deleteColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}
