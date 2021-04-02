import React from "react";
import "../index.css";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

// BUG
/*
  1. Can't change color and font size simultaneously
  2. Can't send NodeList thtough socket
*/

// TODO
socket.on("text", (text) => {
  localStorage.setItem("text", text);
  document.getElementById("textbox", text);
});

function TextBox() {
  // TODO
  const handleChange = (e) => {
    localStorage.setItem("text", e.target.text);
    socket.emit("text", e.target.text);
  };

  return (
    <>
      <div
        contentEditable="true"
        className="textbox"
        id="textbox"
        onInput={(e) => handleChange(e)}
        defaultValue={localStorage.getItem("text")}
      ></div>
    </>
  );
}

export default TextBox;
