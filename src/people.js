import React from "react";

const People = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt="people pic" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default People;
