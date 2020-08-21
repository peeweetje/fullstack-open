import React from "react";
import Label from "../label";
import FormInput from "../form-input";

const FilterPersons = ({ filterPersons, handleFilterPersons, className }) => {
  return (
    <div className={className}>
      <Label htmlFor="search">
        Filter shown with
        <FormInput
          value={filterPersons}
          onChange={handleFilterPersons}
          type="text"
        />
      </Label>
    </div>
  );
};

export default FilterPersons;
