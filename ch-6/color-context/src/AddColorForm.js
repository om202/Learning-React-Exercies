import React from "react";
import { useInput } from "./hooks";
import "./AddColorForm.css";
import {FaPlus} from "react-icons/fa";
import { useColors } from "./ColorProvider";

export default function AddColorForm() {
  const [txtTitle, setTxtTitle] = useInput("");
  const [hexColor, setHexColor] = useInput("#000000");
  const {addColor} = useColors()

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.value;
    const color = hexColor.value;

    if(title!=='') {
      addColor(title, color);
      setTxtTitle("");
      setHexColor("");
    } else {
      window.alert("Form cannot be empty")
    }
  };


  return (
    <div className="add-color-div">
      <p className="title">Add Color Form</p>
      <form className="add-color-form">
        <input className="title-input" {...txtTitle} type="text" placeholder="color title" required />
        <input  className="color-picker" {...hexColor} type="color" required />
        <button  className="color-add" onClick={submit}> <FaPlus className="form-add-icon"/> Add </button>
      </form>
    </div>
  );
}
