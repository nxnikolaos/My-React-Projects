import React from "react";
import { people } from "./Data/ListCauseEffectData";

const ListCauseEffect = () => {
  const showPerson = (id) => {
    console.log(id);
  };

  return (
    <>
      <h1>Show Object Details</h1>
      <div className="flex">
        <section className="width-50 text-align-left">
          Users :
          <ul>
            {people.map((person) => {
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
          <ul>
            <li>Etros</li>
            <li>Nikos</li>
            <li>Nikos</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ListCauseEffect;
