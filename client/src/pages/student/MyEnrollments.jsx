import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 3, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 53 },
  ]);

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-gradient-to-b from-cyan-100/70 min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-semibold">My Enrollments</h1>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100 text-gray-900 text-xs sm:text-sm md:text-base">
              <tr>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Duration</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Completed</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-xs sm:text-sm">
              {enrolledCourses.map((course, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 flex items-center gap-4">
                    <img src={course.courseThumbnail} className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg" alt={course.courseTitle} />
                    <div className="flex-1">
                      <p className="mb-1 font-medium">{course.courseTitle}</p>
                      <Line
                        percent={(progressArray[index].lectureCompleted / progressArray[index].totalLectures) * 100}
                        className="rounded-full bg-gray-300"
                      />
                    </div>
                  </td>

                  <td className="px-4 py-3 hidden md:table-cell">{calculateCourseDuration(course)}</td>

                  <td className="px-4 py-3 hidden md:table-cell">
                    {progressArray[index].lectureCompleted}/{progressArray[index].totalLectures} <span>Lectures</span>
                  </td>

                  <td className="px-4 py-3">
                    <button
                      className={`px-3 sm:px-5 py-1.5 sm:py-2 text-white w-full sm:w-auto rounded-lg ${
                        progressArray[index].lectureCompleted === progressArray[index].totalLectures ? "bg-green-600" : "bg-blue-600"
                      }`}
                      onClick={() => navigate(`/player/${course._id}`)}
                    >
                      {progressArray[index].lectureCompleted === progressArray[index].totalLectures ? "Completed" : "Ongoing"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
