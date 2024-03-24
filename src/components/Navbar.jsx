import React from 'react'
import logo from "../assets/images/react.jpg"
import logo2 from "../assets/react.svg"

const Navbar = () => {
    return (
        <div className=' bg-slate-900'>

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='ml-20 my-6' src={logo2} alt="" />
                    <h6 className='mx-2 my-7 text-green-900 text-2xl font-bold p-4'>React Jobs</h6>
                </div>

                <div className='flex'>
                    <ul className='flex flex-row'>
                        <li className='my-9 m-2' > <a href="#" className='text-white  p-4 hover:bg-slate-700 rounded-lg'> Home</a></li>
                        <li className='my-9 m-2'> <a href="#" className='text-white  p-4 hover:bg-slate-700 rounded-lg'>Jobs</a> </li>
                        <li className='my-9 m-2' > <a href="#" className='text-white  p-4 hover:bg-slate-700 rounded-lg'>Add jobs</a> </li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className='flex justify-center items-center flex-col mt-20'>
                <h1 className='text-5xl font-mono text-white mt-10 '>Become a React Dev </h1>
                <h1 className='text-white mb-20 pt-6'>Find the React jobs that fits your skills and needs</h1>
            </div>

        </div>
    )
}

export default Navbar