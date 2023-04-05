import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Contexst/AuthProvider";

const UpdateModal = ({ item }) => {
  const { user } = useContext(AuthContext);
  //   console.log(todo);
  let now = new Date();
  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log()
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const todoDetails = {
      title,
      description,
      email: user?.email,
      time: {
        date: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
        day: now.getDay(),
      },
    };
    fetch(`http://localhost:5000/todo/${item?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoDetails),
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
    <div>
      <input type="checkbox" id="modal-update" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="modal-update"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-rose-400 border-none"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate}>
            <h3 className="font-bold text-lg">Write your task here </h3>
            <input
              type="text"
              name="title"
              className="input border w-full my-2 border-rose-200"
              placeholder="title"
              defaultValue={item?.title}
            />
            <textarea
              name="description"
              defaultValue={item?.description}
              className="w-full border border-rose-200 input textarea h-40"
            ></textarea>
            <input
              type="text"
              className="input border w-full my-2 border-rose-200"
              name="date"
              defaultValue={`${item?.time.date}/${item?.time?.month + 1}/${
                item?.time?.year
              }`}
            />
            <div className="modal-action items-center justify-center">
              <button>
                <label
                  htmlFor="modal-update"
                  className="btn bg-rose-400 border-none"
                >
                  Add
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
