import React, { useState } from "react";

import { peoples } from "./people-list";
import People from "./people";

const Card = () => {
  const [people, setPeople] = useState(peoples);

  const clearAll = () => {
    setPeople((prevState) => {
      return [];
    });
  };
  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      <section>
        {people.map((person, id) => {
          return <People key={id} {...person}></People>;
        })}
      </section>
      <button type="button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Card;
