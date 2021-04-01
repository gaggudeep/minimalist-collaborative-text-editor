import React from "react";
import { Form, Navbar } from "react-bootstrap";
import "../index.css";

function Header(props) {
  const handleFontChange = (e) => {
    const textbox = document.getElementById("textbox");
    textbox.style.fontSize = `${e.target.value}px`;
  };

  return (
    <>
      <Navbar className="header col-12" sticky="top">
        <div className="utilities d-flex col-4">
          <Form.Control
            as="select"
            size="sm"
            onChange={(e) => handleFontChange(e)}
            className="col-md-2 col-sm-4 font-size-selector"
          >
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option>Custom value</option>
          </Form.Control>
        </div>
        <Navbar.Brand className="col-4 d-flex justify-content-center">
          Text-Editor
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
