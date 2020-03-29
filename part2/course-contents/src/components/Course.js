import React from "react";

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ id, exercises, name }) => (
        <Part key={id} part={name} exercises={exercises} />
      ))}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

export const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0);
  return (
    <>
      <p>total of exercises {total}</p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
