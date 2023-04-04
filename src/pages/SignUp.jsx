import React from "react";
import { GrGoogle } from "react-icons/gr";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content ">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              {/* ==>Email<== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              {/* ==>password<== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              {/* ==>Confirm Password<== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />

                <label className="label">
                  <a
                    href="/login"
                    className="label-text-alt link link-hover hover:text-rose-400"
                  >
                    Already have an account?
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
