import React, { useState } from "react";

let index = 0;

const Notes = () => {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);

  const mySubmit = (e) => {
    //submition function
    setEntries([...entries, { id: index++, text: text }]);

    e.preventDefault(); //stops page refreshing on submit
    setText(""); //wipe input field on submition
  };

  const editItem = (id) => {
    console.log("hi");
  };

  const deleteItem = (id) => {
    //deletion function
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);
    console.log(newEntries);
  };

  return (
    <>
      <h1>Notes App</h1>
      <h3 className="text-align-left">Add Note</h3>
      <form id="form" className="nxn-form" onSubmit={mySubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <input type="submit" value="Add"></input>
      </form>
      <h3>Your Notes :</h3>
      {entries.map((entry) => (
        <article className="article-note">
          <section className="header text-align-right">
            <button className="clear-button" onClick={() => editItem(entry.id)}>
              Edit
            </button>
            <button
              className="clear-button color-red"
              onClick={() => deleteItem(entry.id)}
            >
              Delete
            </button>
          </section>
          <p className="text-align-left">{entry.text}</p>
        </article>
      ))}
    </>
  );
};

export default Notes;
