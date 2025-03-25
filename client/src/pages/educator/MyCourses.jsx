import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const { allCourses } = useContext(AppContext);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]); // Added `allCourses` as a dependency

  return courses.length > 0 ? (
    <div className="p-4 w-full overflow-x-auto min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">My Courses</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full bg-white border-collapse min-w-max">
          <thead className="bg-gray-200 text-xs md:text-sm">
            <tr className="text-gray-600 text-left">
              <th className="p-3">All Courses</th>
              <th className="p-3">Earning</th>
              <th className="p-3">Students</th>
              <th className="p-3">Published On</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 text-xs md:text-sm">
                <td className="p-3 flex items-center gap-2 md:gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-10 h-10 md:w-16 md:h-10 object-cover"
                  />
                  <p className="truncate max-w-[100px] md:max-w-none font-medium text-gray-800">{course.courseTitle}</p>
                </td>
                <td className="p-3 text-gray-700">
                  ${Math.floor(course.enrolledStudents.length * (course.coursePrice - course.coursePrice * course.discount / 100))}
                </td>
                <td className="p-3 text-gray-700">
                  {course.enrolledStudents.length}
                </td>
                <td className="p-3 text-gray-700">{
                  new Date(course.createdAt).toLocaleDateString()
                }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
