import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexst/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { user, loading, GoogleLogin, SinUpWithEmail, EmailVerification } =
    useContext(AuthContext);
  const Provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGmailSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (user) {
      setError("User already loged in!");
    } else {
      if (password === confirm) {
        if (password < 6) {
          setError("Password can't be less than 6");
          return;
        }
        SinUpWithEmail(email, password)
          .then((result) => {
            form.reset();
            EmailVerification().then(() =>
              toast.success(
                "Check your email, spam folder also for verification!"
              )
            );
            toast.success("User created successfully!");
            setError("");
            navigate(from, { replace: true });
          })
          .catch((error) => setError(error.message));
      } else {
        setError("Password doesn't match!");
      }
    }
  };

  // ==> Google SignUp <===//
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
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content ">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleGmailSignUp} className="card-body">
              {/* ==>Email<== */}
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
              {/* ==>password<== */}
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
              </div>
              {/* ==>Confirm Password<== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
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
                <div
                  onClick={handleGoogleLogin}
                  className="form-control mt-6 w-12 rounded-full"
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
    </div>
  );
};

export default SignUp;
