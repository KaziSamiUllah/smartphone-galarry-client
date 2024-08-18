import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { user, signOut } = useContext(AuthContext);

  console.log(user);
  // const user = true;

  const handleSignOut = () => {
    signOut().then().catch();
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Phone Gallery</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {user ? (
                <>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-9 rounded-full">
                        {user ? (
                          <img
                            src={
                              user.photoURL ? (
                                user?.photoURL
                              ) : (
                                <FaUserCircle className="w-full text-4xl" />
                              )
                            }
                            alt=""
                          />
                        ) : (
                          <FaUserCircle className="w-full dark:bg-white text-4xl" />
                        )}
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[10] menu p-4 space-y-2 right-4 shadow bg-base-100 w-52"
                    >
                      <li className="text-center">{user?.displayName}</li>
                      <li className="text-center">{user?.email}</li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="btn text-xs btn-sm md:btn-md rounded-none font-poppins font-semibold text-white hover:bg-white hover:text-black bg-[#C19D68] border-none"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button>
                    <NavLink
                      className="btn text-xs btn-sm md:btn-md rounded-none font-poppins font-semibold text-white hover:bg-white hover:text-black bg-[#C19D68] border-none"
                      to="/login"
                    >
                      Sign In
                    </NavLink>
                  </button>
                  <button>
                    <NavLink
                      className="btn text-xs btn-sm md:btn-md rounded-none font-poppins font-semibold text-white hover:bg-white hover:text-black bg-[#C19D68] border-none"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
