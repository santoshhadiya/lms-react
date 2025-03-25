import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  useEffect(() => {
    setEnrolledStudents(dummyStudentEnrolled);
  }, []);

  return enrolledStudents ? (
    <div className="p-4 w-full overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">Students Enrolled</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border-collapse bg-white min-w-max">
          <thead>
            <tr className="bg-gray-100 text-xs md:text-sm">
              <th className="p-3 text-left font-semibold text-gray-700 border-b">#</th>
              <th className="p-3 text-left font-semibold text-gray-700 border-b">Student Name</th>
              <th className="p-3 text-left font-semibold text-gray-700 border-b">Course Title</th>
              <th className="p-3 text-left font-semibold text-gray-700 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors text-xs md:text-sm">
                <td className="p-3 text-gray-700 border-b">{index + 1}</td>
                <td className="p-3 text-gray-700 border-b">
                  <div className="flex items-center gap-2 md:gap-3">
                    <img
                      src={student.student?.imageUrl || student[" "]?.imageUrl}
                      alt={student.student?.name || student[" "]?.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                    />
                    <span className="truncate max-w-[100px] md:max-w-none">{student.student?.name || student[" "]?.name}</span>
                  </div>
                </td>
                <td className="p-3 text-gray-700 border-b truncate max-w-[100px] md:max-w-none">{student.courseTitle}</td>
                <td className="p-3 text-gray-700 border-b">
                  {new Date(student.purchaseDate).toLocaleDateString()}
                </td>
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

export default StudentsEnrolled;
