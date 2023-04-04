import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* ===> Mobile screen <=== */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <div
                tabIndex={0}
                className="navbar-end gap-5 mx-4 flex flex-col justify-center items-center"
              >
                <div className="text-lg flex gap-2 justify-center items-center">
                  <a href="/" className="bg-slate-400 rounded-full p-1">
                    <AiOutlinePlus />
                  </a>
                  Add
                </div>
                <a href="/login" className="text-lg">
                  LogIn
                </a>
                <div className="w-10 rounded-full">
                  <img
                    src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
                    className="rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </a>
        </div>

        {/* ===> Large Screen <=== */}
        <div className="navbar-end gap-10 mx-4 hidden lg:flex  ">
          <div className="text-lg flex gap-2 justify-center items-center">
            <a href="/" className="bg-slate-400 rounded-full p-1">
              <AiOutlinePlus />
            </a>
            Add
          </div>
          <a href="/login" className="text-lg">
            LogIn
          </a>
          <div className="w-10 rounded-full">
            <img
              src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
