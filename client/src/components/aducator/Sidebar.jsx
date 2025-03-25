import React, { useContext } from 'react'
import assets from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);
  const path = window.location.pathname;

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-cours', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ];

  return isEducator && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col bg-white'>
      {menuItems.map((item) => (
        <Link 
          to={item.path} 
          key={item.name} 
          className={`flex items-center gap-3 md:gap-5 py-3 px-4 md:px-8 transition-colors ${item.path === path ? 'bg-blue-100 border-r-4 border-blue-700' : 'hover:bg-gray-100'}`}
        >
          <img src={item.icon} className='w-6 h-6 flex-shrink-0' alt={item.name} />
          <p className='hidden md:block'>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;