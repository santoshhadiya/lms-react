import React, { useContext } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk,UserButton,useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";



const Navbar = () => {
  const {openSignIn}=useClerk();
  const {user}=useUser();
  const isCourseListPage = location.pathname.includes("/course-list");

  const {navigate,isEducator}=useContext(AppContext);

  return (
    <>
      <div
        className={`flex items-center justify-between px-4 sm:px-10 md:px-[110px]
1g:px-36 border-b border-gray-500 py-4 ${
          isCourseListPage ? "bg-white" : "bg-cyan-100/70"
        }`}
      >
        <img
          src={assets.logo}
          alt="Logo"
          onClick={()=>navigate("/")}
          className="w-28 1g:w-32 cursor-pointer"
        />
        <div className="hidden md:flex items-center gap-5 text-gray-500">
        {user && <div>
          <button onClick={()=>navigate("/educator")} className="cursor-pointer">{isEducator ? "Educator Dashboard" : "Become Educator"}</button> |{" "}
          <Link to="/my-enrollments">My Enrollments</Link>
        </div>}
        {user? <UserButton/>:
          <button
          onClick={()=>openSignIn()}
          className="bg-blue-600 text-white px-5 py-2 
rounded-full"
        >
          Create Account
        </button>}
        </div>
        
       {/*  Mobile View */}
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
          <div>
            <button>Become Educator</button>|{" "}
            <Link to="/my-enrollments">My Enrollments</Link>
          </div>
          <button>
            <img src={assets.user_icon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
