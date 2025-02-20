import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {Line} from 'rc-progress'
import Footer from "../../components/student/Footer";

const MyEnrollments = () => {

  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 53 },
  ])

  return (
    <>
      <div className="md:px-[110px] px-8 pt-10 py-8 bg-gradient-to-b from-cyan-100/70">
        <h1 className="text-2x1 font-semibold">My Enrollments</h1>
        <table
          className="md:table-auto table-fixed w-full overflow-hidden border mt-10"
        >
          <thead
            className="text-gray-900  text-sm text-left max-sm:hidden border"
          >
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              enrolledCourses.map((course, index) => (
                <tr key={index} className="border-b border-gray-500/20">

                  <td className='md:px-4 pl-2 md:p1-4 py-3 flex items-center space-x-3'>
                    <img src={course.courseThumbnail} className="w-30"></img>
                    <div className="flex-1">
                      <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                     <Line  percent={progressArray[index].lectureCompleted/progressArray[index].totalLectures*100} className="rounded-full bg-gray-300"></Line>
                    </div>
                  </td>

                  <td className="px-4 py-3 max-sm:hidden">
                    {calculateCourseDuration(course)}
                  </td>

                  <td className="px-4 py-3 max-sm:hidden">{progressArray[index].lectureCompleted}/{progressArray[index].totalLectures} <span>Lectures</span>
                  </td>

                  <td className="px-4 py-3 max-sm:text-right">
                    <button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white w-30 cursor-pointer' onClick={() => navigate(`/player/${course._id}`)}>
                      {
                        progressArray[index].lectureCompleted == progressArray[index].totalLectures ? "Completed" : "On Going"
                      }
                    </button>
                  </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default MyEnrollments;
