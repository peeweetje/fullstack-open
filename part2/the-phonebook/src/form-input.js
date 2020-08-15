import React from "react";

const FormInput = ({  placeholder, htmlFor, type, className value, onChange }) => {
  <>
    <input
    placeholder={placeholder}
      type={type}
      className={className}
      id={htmlFor}
      value={value}
      onChange={onChange}
    />
  </>;
};

export default FormInput;
