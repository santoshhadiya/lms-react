import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../../components/student/CourseCard";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useNavigate, useParams } from "react-router-dom";
import assets from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
  const { allCourses } = useContext(AppContext);
  const navigate = useNavigate();
  const { input } = useParams();

  const [filteredCourse, setFilteredCourse] = useState([]);
  useEffect(() => {
    input
      ? setFilteredCourse(
          allCourses.filter((item) =>
            item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilteredCourse(allCourses);
  }, [allCourses, input]);

  return (
    <>
    <div className=" max-w-7xl mx-auto px-[110px] py-8 ">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-3xl font-bold">Course List</h1>
          <p className="text-sm text-gray-500 mt-1">
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / Course List
          </p>
        </div>

        <SearchBar/>
      </div>

      {input && (
        <div
          className="inline-flex items-center gap-4 px-4 py-2 border mt-8 
-mb-8 text-gray-600"
        >
          <p>{input}</p>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => navigate("/course-list")}
          />
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCourse.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default CoursesList;
