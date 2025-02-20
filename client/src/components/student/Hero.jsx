import React from "react";
import assets from "../../assets/assets";
import SearchBar from "./SearchBar";


const Hero = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full md:pt-30 pt-2 px-0 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3x1 mx-auto w-[60%] text-[39px]">
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600"> fit your choice.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2x1 mx-auto w-[40%]">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <SearchBar/>
    </div>
    </>
  )
};

export default Hero;
