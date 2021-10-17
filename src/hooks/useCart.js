import { useEffect, useState } from "react";

const useCart = () => {
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setSelectedCourse(cart);
  }, []);

  function getCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }

  function addToCart(course) {
    const isHave = selectedCourse.find(
      (selected) => selected.key === course.key
    );

    if (isHave) {
      alert("course has been selected!");
    } else {
      const newSelection = [...selectedCourse, course];
      localStorage.setItem("cart", JSON.stringify(newSelection));
      setSelectedCourse(newSelection);
    }
  }

  function remove(key) {
    const selectAfterRemove = selectedCourse.filter(
      (course) => course.key !== key
    );
    localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
    setSelectedCourse(selectAfterRemove);
  }

  return { setSelectedCourse, remove, addToCart, selectedCourse };
};

export default useCart;
