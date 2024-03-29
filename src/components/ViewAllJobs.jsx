import { Link } from 'react-router-dom'
import React from 'react'

const ViewAllJobs = () => {
  return (
    <div className='flex items-center justify-center my-10'>
        <Link to='/jobs' className='block text-center bg-black text-white hover:bg-gray-700 cursor-pointer  px-8 rounded-lg'>View all jobs</Link>
    </div>
  )
}

export default ViewAllJobs