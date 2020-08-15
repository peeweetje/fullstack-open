import React, { useState } from "react";
import FormInput from "./form-input";
import Label from "./label";
import "./app.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const submitName = (event) => {
    event.preventDefault();

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

  return (
    <>
      <h2>Phonebook</h2>
      <form className="form-container" onSubmit={submitName}>
        <Label htmlFor="name">
          Name:
          <FormInput value={newName} onChange={handleNewName} id="name" />
        </Label>
        <Label htmlFor="number">
          Number:
          <FormInput
            value={newNumber}
            onChange={handleNewNumber}
            id="number"
          />
        </Label>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <li key={i}>{person.name} {person.number}</li>
      ))}
    </>
  );
};

export default App;
