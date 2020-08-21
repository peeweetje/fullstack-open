import React from "react";
import Label from "../label";
import FormInput from "../form-input";

const PersonForms = (
  { submitName, newName, handleNewName, newNumber, handleNewNumber, className },
) => {
  return (
    <form className={className} onSubmit={submitName}>
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
  );
};

export default PersonForms;
