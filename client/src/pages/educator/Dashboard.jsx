import React, { useEffect, useState } from "react";
import assets, { dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    setDashboardData(dummyDashboardData);
  }, []);

  return dashboardData?(
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Top Cards Section */}
      <div className="grid grid-cols-3 gap-3 mb-8 w-fit">
        <div className="bg-white p-2 rounded-lg flex items-center gap-2 border border-blue-700 w-50">
          <div className="text-blue-500 text-3xl">
            <img src={assets.patients_icon}></img>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Enrollments</p>
            <p className="text-xl font-semibold">{dashboardData.enrolledStudentsData?.length}</p>
          </div>
        </div>
        <div  className="bg-white p-2 rounded-lg flex items-center gap-2 border border-blue-700 w-50">
          <div className="text-blue-500 text-3xl">
          <img src={assets.appointments_icon}></img>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Courses</p>
            <p className="text-xl font-semibold">{dashboardData.totalCourses}</p>
          </div>
        </div>
        <div  className="bg-white p-2 rounded-lg flex items-center gap-2 border border-blue-700 w-50">
          <div className="text-blue-500 text-3xl">
            <img src={assets.earning_icon}></img>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Earnings</p>
            <p className="text-xl font-semibold">${dashboardData.totalEarnings}</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md p-6 rounded-lg w-fit">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Latest Enrollments</h2>
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr className="text-gray-600 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Student Name</th>
              <th className="p-3">Course Title</th>
              
            </tr>
          </thead>
          <tbody>
            {dashboardData.enrolledStudentsData?.map((student, index) => (
              <tr key={index} className="border-b text-gray-700 text-sm">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={student.student.imageUrl}
                    alt={student.student.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {student.student.name}
                </td>
                <td className="p-3">{student.courseTitle}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  ):<Loading/>
};

export default Dashboard;
