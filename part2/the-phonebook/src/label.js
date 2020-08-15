import React from "react";

const Label = ({ children, className, htmlFor }) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>{children}</label>;
    </>
  );
};

export default Label;
