import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexst/AuthProvider";

const TodoModal = () => {
  const { user } = useContext(AuthContext);
  let now = new Date();

  const handlePostTodo = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    const info = {
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
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      });
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-rose-400 border-none"
          >
            ✕
          </label>
          <form onSubmit={handlePostTodo}>
            <h3 className="font-bold text-lg">Write your task here </h3>
            <input
              type="text"
              name="title"
              className="input border w-full my-2 border-rose-200"
              placeholder="title"
            />
            <textarea
              name="description"
              className="w-full border border-rose-200 input textarea h-40"
            ></textarea>
            <div className="modal-action items-center justify-center">
              <button>
                <label
                  htmlFor="my-modal-6"
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

export default TodoModal;
