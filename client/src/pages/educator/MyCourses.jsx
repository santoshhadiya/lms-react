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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr className="text-gray-600 text-left">
            <th className="p-3">All Courses</th>
            <th className="p-3">Earning</th>
            <th className="p-3">Students</th>
            <th className="p-3">Published On</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-3 flex items-center">
                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                  className="w-16 h-10 "
                />
                <p className="ml-4 font-medium text-gray-800">{course.courseTitle}</p>
              </td>
              <td className="p-3 text-gray-700">
                ${Math.floor(course.enrolledStudents.length *( course.coursePrice - course.coursePrice * course.discount / 100))}
              </td>
              <td className="p-3 text-gray-700">
                {course.enrolledStudents.length} {/* Updated to show enrolled students */}
              </td>
              <td className="p-3 text-gray-700">{
                new Date(course.createdAt).toLocaleDateString()
                }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;