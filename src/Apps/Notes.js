import React, { useState } from "react";

const Notes = () => {
  const [text, setText] = useState("");

  const mySubmit = (e) => {
    e.preventDefault(); //stops page refreshing on submit
    setText(""); //wipe input field on submition
  };

  return (
    <>
      <h1>Notes App</h1>
      <h3 className="text-align-left">Add Note:</h3>
      <form id="form" className="nxn-form" onSubmit={mySubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <input type="submit" value="Add"></input>
      </form>
    </>
  );
};

export default Notes;
