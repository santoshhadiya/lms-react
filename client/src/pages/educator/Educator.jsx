import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/aducator/NavBar'
import Sidebar from '../../components/aducator/Sidebar'
import Footer from '../../components/aducator/Footer'


const Educator = () => {
  return (
    <>
      <NavBar />
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Educator