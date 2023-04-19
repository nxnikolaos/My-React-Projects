import React, { useState, useEffect } from "react";

let nextId = 0;

const ToDo = () => {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);

  const mySubmit = (e) => {
    setEntries([...entries, { id: nextId++, text: text }]);
    e.preventDefault(); //stops page refreshing on submit
  };

  return (
    <>
      <h1>ToDo List:</h1>
      <form id="form" className="nxn-form" onSubmit={mySubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <input type="submit" value="Add"></input>
      </form>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.text}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
