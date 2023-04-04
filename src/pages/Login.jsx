import React from "react";
import { GrGoogle } from "react-icons/gr";

const Login = () => {
  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content ">
        <div className="card w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="/signup"
                  className="label-text-alt link link-hover hover:text-rose-400"
                >
                  Don't have any account?
                </a>
              </label>
            </div>

            {/* ==>Button<== */}
            <div className="flex w-full gap-1">
              <div className="form-control mt-6 flex-1 ">
                <button className="btn bg-rose-400 border-none rounded-full">
                  Login
                </button>
              </div>
              <div className="form-control mt-6 w-12 rounded-full">
                <button className="btn bg-rose-400 border-none rounded-full text-xl">
                  <GrGoogle />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
