import JobListings from './components/JobListings'
import React from 'react'
import jobs from './jobs.json'
const JobListing = () => {
    const recentJobs = jobs.slice(0,3);
    return (
        <div className='bg-green-100'>
            <h1 className='text-center text-2xl font-bold font-mono p-4 text-blue-600'>Browse Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {recentJobs.map((xx) => (
                    <JobListings key={xx.id} Job={xx} />
                ))}
            </div>
        </div>
    )
}
export default JobListing