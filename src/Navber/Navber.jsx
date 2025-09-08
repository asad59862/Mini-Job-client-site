import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../Logo/Logo";
import ThemeToggle from "../Theme/ThemeToggole";

const Navber = ({ user, logout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const LogOut = () => {
    logout()
      .then(() => console.log("Logged out"))
      .catch(() => console.log("Logout failed"));
  };

  const handleUpdateRedirect = () => {
    setIsModalOpen(false);
    navigate("/update-profile");
  };

  const Links = (
    <>
      <Link className="btn btn-ghost mx-2">Home</Link>
      <Link to={"/addtask"} className="btn btn-ghost mx-2">
        Add Task
      </Link>
      <Link to={"/browseTask"} className="btn btn-ghost mx-2">
        Browse Task
      </Link>
      <Link to={"/myjob"} className="btn btn-ghost mx-2">
        My Posted Task
      </Link>
    </>
  );
       
  const AuthButton = (
    <>
      {user ? (
        <div className="flex items-center">
          <div
            className="avatar cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="w-12 rounded-full border-2 border-base-content">
              <img
                className="p-1 rounded-full"
                src={user.photoURL}
                alt="avatar"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
      
          <Link to={"/login"} className="btn btn-outline btn-sm">
            LogIn
          </Link>
        </div>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>

        <div className="navbar-end">
          <ThemeToggle />
          {AuthButton}
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-base-100 text-base-content p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-2"
              />
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-sm">{user.email}</p>
            </div>
            <div className="flex justify-between mt-4 gap-2">
              <button
                onClick={handleUpdateRedirect}
                className="btn btn-primary flex-1"
              >
                Update Profile
              </button>
              <button onClick={LogOut} className="btn btn-error flex-1">
                LogOut
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-outline flex-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navber;
