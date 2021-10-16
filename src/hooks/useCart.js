import { useState } from "react";

const useCart = () => {
  const [selectedCourse, setSelectedCourse] = useState([]);
  function addToCart(course) {
    const isHave = selectedCourse.find(
      (selected) => selected.key === course.key
    );

    if (isHave) {
      alert("course has been selected!");
    } else {
      const newSelection = [...selectedCourse, course];
      setSelectedCourse(newSelection);
    }
  }

  function remove(key) {
    const selectAfterRemove = selectedCourse.filter(
      (course) => course.key !== key
    );
    setSelectedCourse(selectAfterRemove);
  }

  return { setSelectedCourse, remove, addToCart, selectedCourse };
};

export default useCart;
