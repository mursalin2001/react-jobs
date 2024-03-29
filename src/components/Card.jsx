import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-row justify-between'>

            <div className='m-auto w-1/2 mx-4 mt-4 mb-3 bg-slate-100 p-7 rounded-lg shadow-lg'>
                <div className='text-left '>
                    <h1 className='text-2xl font-bold'>For Developers</h1>
                    <p className='mt-2 mb-2'>Browse our React jobs and start your carrer today</p>
                    <button className='text-white bg-black p-1 rounded-md'>Browse Jobs</button>
                </div>
            </div>
            <div className='m-auto w-1/2 mx-4 mt-4 mb-3 bg-slate-300 p-7 rounded-lg shadow-lg'>
                <div className='text-left '>
                    <h1 className='text-2xl font-bold'>For Employers</h1>
                    <p className='mt-2 mb-2'>List your job to find the perfect developer for the role </p>
                    <button className='bg-blue-700 text-white rounded-lg p-1'>Add Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default Card