import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { SignUp, UpdateUserData } = useContext(AuthContext);
  const Navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const userName = form.get("name");
    const url = form.get("url");
  

    const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validPass.test(password)) {
      if (password.length < 6) {
        toast("Password must be at least 6 characters long.");
      } else if (!/(?=.*[a-z])/.test(password)) {
        toast("Password must contain at least one lowercase letter.");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        toast("Password must contain at least one uppercase letter.");
      }
    } else {
      SignUp(email, password)
        .then((res) => {
          console.log(res.user);
          if(res.user){
            Navigate("/")
          }
        })
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-240px)]">
      <div className="flex-grow">
        <div>
          <div className=" lg:p-14 h-[68vh]">
            <div className=" max-w-lg animate__bounceIn mx-auto p-8 bg-slate-100 shadow-lg  rounded-xl ">
              <div className="flex justify-center items-center">
                <h1 className="text-black font-bold text-2xl">Register</h1>
              </div>
              <form
                className="mt-8 space-y-6 mx-auto"
                onSubmit={handleRegister}
              >
                <div className="flex flex-col space-y-5">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-l-md relative block w-full px-3 py-2 border bg-transparent border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-l-md relative block w-full px-3 py-2 border bg-transparent border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                  <input
                    type="url"
                    name="url"
                    autoComplete="url"
                    className="appearance-none rounded-l-md relative block w-full px-3 py-2 border bg-transparent border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Photo URL"
                  />
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="appearance-none rounded-r-md relative block w-full px-3 py-2 border bg-transparent border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
                <h2 className="text-black">
                  Already have an account?{" "}
                  <Link to="/Login" className="text-blue-500 font-bold">
                    LOGIN
                  </Link>
                </h2>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-none"></div>
      </div>
    </div>
  );
};

export default Register;
