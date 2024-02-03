import React from "react";
import logInImg from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email;
    const password = form.password;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:mr-40">
          <img src={logInImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] btn-outline text-white">
                Login
              </button>
            </div>
          </form>
          <p className="my-4 text-center ">
            New Car Doctor ?{" "}
            <Link to="/register" className="text-[#FF3811] font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
