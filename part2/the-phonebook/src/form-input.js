import React from "react";

const FormInput = (
  { placeholder, id, type, className, value, onChange },
) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
