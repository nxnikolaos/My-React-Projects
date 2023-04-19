import React, { useState, useEffect } from "react";

let nextId = 0;

const ToDo = () => {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);

  const mySubmit = (e) => {
    setEntries(
      //replace the state
      [
        //with a new array
        ...entries, //contains all the old items
        { id: nextId++, text: text }, //new item at the end
      ]
    );
    e.preventDefault(); //stops page refreshing on submit
  };

  const removeItem = (id) => {
    let newEntries = entries.filter((entry) => entry.id != id); //return entries that dont match the id
    setEntries(newEntries);
  };

  return (
    <>
      <h1>ToDo List:</h1>
      <form id="form" className="nxn-form" onSubmit={mySubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <input type="submit" value="Add"></input>
      </form>
      <ol>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.text}
            <button onClick={() => removeItem(entry.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ToDo;
