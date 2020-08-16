import React, { useState } from "react";
import FormInput from "./form-input";
import Label from "./label";
import "./app.css";

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: "Arto Hellas", number: "040-123456" },
      { name: "Ada Lovelace", number: "39-44-5323523" },
      { name: "Dan Abramov", number: "12-43-234345" },
      { name: "Mary Poppendieck", number: "39-23-6423122" },
    ],
  );
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
      <Label htmlFor="search">
        search
        <FormInput
          value={filterPersons}
          onChange={handleFilterPersons}
          type="text"
        />
      </Label>
      <form className="form-container" onSubmit={submitName}>
        <h2>Add a new</h2>
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
      {filterPersons === ""
        ? persons?.map((person, i) =>
          <li key={i}>
            {person.name},
            {person.number}
          </li>
        )
        : filteredPersons?.map((person, i) => (
          <li key={i}>
            {person.name},
            {person.number}
          </li>
        ))}
    </>
  );
};

export default App;
