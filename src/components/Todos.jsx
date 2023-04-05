import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AuthContext } from "../Contexst/AuthProvider";
import SingleToDo from "./SingleToDo";
import TodoModal from "./TodoModal";

const Todos = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://hstodo.vercel.app/todo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data?.data));
  }, [items, user]);
  return (
    <div className="grid grid-cols-1 gap-2 mt-10 mx-5">
      {items?.length > 0 ? (
        items?.map((item) => <SingleToDo item={item} key={item._id} />)
      ) : (
        <h1 className="mx-auto my-20 text-2xl ">There is no todo!</h1>
      )}
      <div className="text-lg flex gap-2 justify-center items-center text-black my-5">
        <label
          htmlFor="my-modal-6"
          className="bg-rose-200 rounded-full p-1 cursor-pointer"
        >
          <AiOutlinePlus />
        </label>
        Add
      </div>
      <TodoModal />
    </div>
  );
};

export default Todos;
