import React, { useEffect, useState } from "react";
import SingleToDo from "./SingleToDo";

const Todos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setItems(data?.data));
  }, []);
  return (
    <div>
      {items.map((item) => (
        <SingleToDo item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Todos;
