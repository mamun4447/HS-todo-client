import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import UpdateModal from "./UpdateModal";

const SingleToDo = ({ item }) => {
  const [todo, setTodo] = useState({});
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      });
  };
  return (
    <>
      <div className="border w-full lg:w-[75%] mx-auto p-5 rounded-md flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{item?.title}</h2>
          <h5 className="text-xs text-slate-400 ml-1">{`${item?.time.date}/ ${item?.time?.month}  /${item?.time?.year}`}</h5>
          <p className="py-3 mx-3 text-slate-600">{item?.description}</p>
          <label
            htmlFor="modal-update"
            className="cursor-pointer underline text-rose-400"
            onClick={() => setTodo(item)}
          >
            Update
          </label>
        </div>
        <div className="justify-center items-center">
          <button
            onClick={() => handleDelete(item?._id)}
            title="Delete"
            className="bg-red-600 p-1 rounded-full w-7 text-center cursor-pointer h-7"
          >
            X
          </button>
        </div>
      </div>
      <UpdateModal todo={todo} />
    </>
  );
};

export default SingleToDo;
