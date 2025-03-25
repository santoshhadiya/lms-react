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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Course List</h1>
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
          <SearchBar />
        </div>

        {/* Search Filter Section */}
        {input && (
          <div className="flex flex-wrap items-center gap-4 px-4 py-2 border mt-6 mb-6 text-gray-600 rounded-lg w-fit">
            <p className="truncate">{input}</p>
            <img
              src={assets.cross_icon}
              alt="Clear Search"
              className="cursor-pointer w-5 h-5"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}

        {/* Course Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
