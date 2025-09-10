import React, { useState } from "react";
import "./Todoinput.css";

const Todoinput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <>
      <h1>ToDo List</h1>
      <div className="add-input-container">
        <input
          type="text"
          placeholder="Add items ..."
          className="input-box"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Todoinput;
