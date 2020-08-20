import React from "react";

const Person = ({ person }) => (
  <>
    <span>{person.name}</span>
    <span>{person.number}</span>
  </>
);

export default Person;
