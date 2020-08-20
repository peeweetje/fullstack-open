import React, { useState } from "react";
import PersonForm from "./components/person-form";
import FilterPersons from "./components/filter-persons";
import Persons from "./components/persons";
import "./app.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPersons, setFilterPersons] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(undefined);

  const submitName = (e) => {
    e.preventDefault();

    const filterDuplicateName = persons.filter(
      (person) => person.name === newName,
    );

    if (filterDuplicateName.length > 0) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterPersons = (e) => {
    setFilterPersons(e.target.value);
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredPersons(filteredPersons);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <FilterPersons
        filterPersons={filterPersons}
        handleFilterPersons={handleFilterPersons}
      />
      <PersonForm
        submitName={submitName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filterPersons={filterPersons}
        filteredPersons={filteredPersons}
        persons={persons}
      />
    </>
  );
};

export default App;
