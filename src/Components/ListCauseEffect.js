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
          Information :
          {people.map((person) => {
            const {
              id,
              name,
              street,
              city,
              state,
              country,
              telephone,
              birthday,
            } = person;
            if (people.length === 1) {
              return (
                <ul className="list-style-none" key={id}>
                  <li>Name : {name}</li>
                  <li>Birthday : {birthday}</li>
                  <li>Street : {street}</li>
                  <li>City : {city}</li>
                  <li>State : {state}</li>
                  <li>Country : {country}</li>
                  <li>Telephone : {telephone}</li>
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
