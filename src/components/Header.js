import React from "react";
import { Form, Navbar } from "react-bootstrap";
import "../index.css";

function Header(props) {
  const handleAttributeChange = (e, att) => {
    let selectedDom = window.getSelection();
    let selectedText = selectedDom.toString();
    let newElement = document.createElement("span");
    newElement.style =
      att === "size"
        ? `font-size: ${e.target.value}px;`
        : `color: ${e.target.value};`;
    newElement.innerHTML = selectedText;
    let range = selectedDom.getRangeAt(0);
    range.deleteContents();
    range.insertNode(newElement);
  };

  return (
    <>
      <Navbar className="header col-12" sticky="top">
        <div className="d-flex col-4">
          <Form.Control
            as="select"
            size="sm"
            onChange={(e) => handleAttributeChange(e, "size")}
            className="col-md-2 col-sm-4 utility"
          >
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
          </Form.Control>
          <input
            type="color"
            style={{ padding: "0" }}
            className="col-md-2 col-sm-4 utility"
            defaultValue="#faebd7"
            onChange={(e) => handleAttributeChange(e, "color")}
          />
        </div>
        <Navbar.Brand className="col-4 d-flex justify-content-center">
          Text-Editor
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
