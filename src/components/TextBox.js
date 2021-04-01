import React from "react";
import "../index.css";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

socket.on("text", (text) => {
  console.log(text);
  localStorage.setItem("text", text);
  document.getElementById("textbox").value = text;
});

function TextBox() {
  const handleChange = (e) => {
    localStorage.setItem("text", e.target.value);
    socket.emit("text", e.target.value);
  };

  return (
    <>
      <textarea
        className="textbox"
        id="textbox"
        onChange={(e) => handleChange(e)}
        defaultValue={localStorage.getItem("text")}
      ></textarea>
    </>
  );
}

export default TextBox;
