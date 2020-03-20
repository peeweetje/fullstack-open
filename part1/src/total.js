import React from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

export default Total;
