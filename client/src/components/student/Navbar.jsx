import React, { useContext } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const isCourseListPage = location.pathname.includes("/course-list");
  const { navigate, isEducator } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-24 xl:px-36 border-b border-gray-300 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
        className="w-24 sm:w-28 md:w-32 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-600">
        {user && (
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/educator")} className="hover:text-blue-600">
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>
            <span>|</span>
            <Link to="/my-enrollments" className="hover:text-blue-600">
              My Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 text-gray-600">
        {user && (
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => navigate("/educator")} className="hover:text-blue-600">
              Become Educator
            </button>
            <span>|</span>
            <Link to="/my-enrollments" className="hover:text-blue-600">
              My Enrollments
            </Link>
          </div>
        )}
        <button className="w-8 h-8 flex items-center justify-center">
          <img src={assets.user_icon} alt="User" className="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
