import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  useEffect(() => {
    setEnrolledStudents(dummyStudentEnrolled);
  }, []);

  return enrolledStudents ? (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Students Enrolled</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
  <table className="w-full border-collapse bg-white">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">#</th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Student Name</th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Course Title</th>
        <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
      </tr>
    </thead>
    <tbody>
      {enrolledStudents.map((student, index) => (
        <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="p-3 text-sm text-gray-700 border-b">{index + 1}</td>
          <td className="p-3 text-sm text-gray-700 border-b">
            <div className="flex items-center gap-3">
              <img
                src={student.student?.imageUrl || student[" "]?.imageUrl}
                alt={student.student?.name || student[" "]?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{student.student?.name || student[" "]?.name}</span>
            </div>
          </td>
          <td className="p-3 text-sm text-gray-700 border-b">{student.courseTitle}</td>
          <td className="p-3 text-sm text-gray-700 border-b">
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