import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../context/AppContext";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-40">
      <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {allCourses.slice(4).map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500/30 px-6 py-2 rounded hover:bg-gray-100"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
