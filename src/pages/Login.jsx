import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexst/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { user, GoogleLogin, LogInWithEmail } = useContext(AuthContext);
  const Provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (user) {
      setError("User already logged in!");
    } else {
      LogInWithEmail(email, password)
        .then((result) => {
          navigate(from, { replace: true });
          setError("");
          toast.success("Loged in succesfully!");
        })
        .catch((error) => setError(error.message));
    }
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    if (user) {
      setError("User already loged in!");
    } else {
      GoogleLogin(Provider)
        .then((result) => {
          setError("");
          navigate(from, { replace: true });
          toast.success("Loged in succesfully!");
        })
        .catch((error) => setError(error.message));
    }
  };
  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content ">
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
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
              <div
                className="form-control mt-6 w-12 rounded-full"
                onClick={handleGoogleLogin}
              >
                <button className="btn bg-rose-400 border-none rounded-full text-xl">
                  <GrGoogle />
                </button>
              </div>
            </div>
            <p className="text-red-600">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
