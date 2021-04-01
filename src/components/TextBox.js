import React, { useState, useEffect } from "react";
import "../index.css";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

socket.on("text", (text) => console.log(text));

function TextBox() {
  const [state, setState] = useState({
    text: localStorage.getItem("text"),
  });

  const handleChange = (e) => {
    setState({ text: e.target.value });
    localStorage.setItem("text", e.target.value);
    socket.emit("text", e.target.value);
  };

  useEffect(() => socket.once("text", (text) => setState({ text: text })));

  return (
    <>
      <textarea
        className="textbox"
        id="textbox"
        value={state.text}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </>
  );
}

export default TextBox;
