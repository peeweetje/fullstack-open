import React from "react";
import Label from "../label";
import FormInput from "../form-input";

const FilterPersons = ({ filterPersons, handleFilterPersons }) => {
  return (
    <Label htmlFor="search">
      Filter shown with
      <FormInput
        value={filterPersons}
        onChange={handleFilterPersons}
        type="text"
      />
    </Label>
  );
};

export default FilterPersons;
