import {Outlet} from 'react-router-dom'
import React from 'react'
import Nabar from '../components/Navbar'
const MainLayout = () => {
  return (
    <div>
        <Nabar />
        <Outlet />
    </div>
  )
}

export default MainLayout