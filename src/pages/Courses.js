import React from "react";
import useAuth from "./../hooks/useAuth.js";

const Courses = () => {
  const { courses } = useAuth();

  return (
    <div>
      <h1>{courses.length}</h1>
    </div>
  );
};

export default Courses;
