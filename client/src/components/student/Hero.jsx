import React from "react";
import assets, { dummyTestimonial } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 px-4 sm:px-6 lg:px-8 space-y-6 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-3xl mx-auto relative">
        Empower your future with the courses designed to
        <span className="text-blue-600"> fit your choice.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-7 right-0 w-24 md:w-32"
        />
      </h1>
      <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;