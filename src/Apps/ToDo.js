import React, { useState, useEffect } from "react";

const ToDo = () => {
  const [text, setText] = useState("");

  const mySubmit = (e) => {
    setText(document.getElementById("todo-entry").value);
    console.log(document.getElementById("todo-entry").value);
    e.preventDefault();
  };

  return (
    <>
      <h1>ToDo List:</h1>
      <form id="form" className="nxn-form" onSubmit={mySubmit}>
        <input type="text" id="todo-entry" name="todo-entry"></input>
        <input type="submit" value="Add"></input>
      </form>
      <p id="entries">{text}</p>
    </>
  );
};

export default ToDo;
