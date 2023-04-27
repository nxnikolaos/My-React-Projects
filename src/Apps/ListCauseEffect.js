import React, { useState } from "react";
import { data } from "./Data/ListCauseEffectData";

const ListCauseEffect = () => {
  const [people, setPeople] = useState(data);

  const showPerson = (id) => {
    let newPeople = data.filter((person) => person.id === id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1>Show Object Details</h1>
      <div className="flex">
        <section className="width-50 text-align-left">
          Click a User :
          <ul>
            {data.map((person) => {
              const { id, name } = person;
              return (
                <li key={id}>
                  <button
                    className="clear-button"
                    onClick={() => showPerson(id)}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="width-50 text-align-left">
          Result :
          {people.map((person) => {
            const { id, name, birthday, city } = person;
            if (people.length === 1) {
              return (
                <ul key={id}>
                  <li>{name}</li>
                  <li>{birthday}</li>
                  <li>{city}</li>
                </ul>
              );
            }
          })}
        </section>
      </div>
    </>
  );
};

export default ListCauseEffect;
