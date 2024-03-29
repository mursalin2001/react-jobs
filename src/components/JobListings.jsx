import React from 'react'
import { useState } from 'react'
import { FaMapMarker} from 'react-icons/fa'

const JobListings = ({Job}) => {

    const [showFullDesc, setShowFullDesc] = useState(true);
    let desc = Job.description;

    if(!showFullDesc)
    {
        desc = desc.substring(0,90)+'...';
    }
    return (
        <div className='W-1/4 p-6 m-5 rounded-md bg-white'>
            <p className='text-xs p-2 text-gray-500'>{Job.type}</p>
            <h6 className='font-bold py-4'>{Job.title}</h6>
            <p className='mb-5 text-sm'>{desc}</p>
            <button
             onClick={()=>setShowFullDesc((prev)=>!prev)} 
             className="text-indigo-500 mb-5 hover:text-indigo-600 " >{showFullDesc ? 'Less' : 'More'}</button>
            <p className='text-indigo-500 mb-2'>{Job.salary} / Year</p>
            <div className='text-orange-700 mb-4'>
            <FaMapMarker className='inline ' />
           {Job.location}
            </div>
            
            <button className='bg-indigo-500 hover:bg-indigo-600 p-1 rounded-md text-white font-sans text-sm'>Read More</button>
        </div>
    )
}

export default JobListings