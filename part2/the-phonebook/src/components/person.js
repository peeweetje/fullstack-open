import React from "react";

const Person = ({ person, className }) => (
  <div className={className}>
    <span>{person.name}</span>
    <span>{person.number}</span>
  </div>
);

export default Person;
