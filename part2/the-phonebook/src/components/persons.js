import React from "react";
import Person from "./person";

const Persons = ({ filterPersons, persons, filteredPersons }) => (
  <>
    {filterPersons === ""
      ? persons?.map((person) => (
        <Person
          className="person"
          key={person.name}
          person={person}
        />
      ))
      : filteredPersons?.map((person) => (
        <Person
          className="person"
          key={person.name}
          person={person}
        />
      ))}
  </>
);

export default Persons;
