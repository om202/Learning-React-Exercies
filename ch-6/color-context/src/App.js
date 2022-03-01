import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
import {v4} from "uuid"

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
    <AddColorForm onNewColor={(title, color)=>{
      console.log(ColorList)
      const newColors = [
        {
          id: v4(),
          rating: 0,
          title,
          color
        },
        ...colorData,
      ];
      setColors(newColors)
    }}/>
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
      onRateColor={(rating, id) => {
        const newColors = colors.map((color) =>
          color.id === id
            ? {
                ...color,
                rating,
              }
            : color
        );
        setColors(newColors);
      }}
    />
    </>
  );
}

export default App;
