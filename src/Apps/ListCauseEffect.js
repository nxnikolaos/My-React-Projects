import React from "react";
import { people } from "./Data/ListCauseEffectData";

const ListCauseEffect = () => {
  return (
    <>
      <h1>Show Object Details</h1>
      <div className="flex">
        <section className="width-50 text-align-left">
          <ul>
            {people.map((person) => {
              return <li>{person.name}</li>;
            })}
          </ul>
        </section>
        <section className="width-50 text-align-left">
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
