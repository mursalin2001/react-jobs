import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import JobListing from '../JobListing'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
    
    <Hero title="Become a React Dev" subTitle= "Find the React job that fits your skill set" />
    <Card />
    <JobListing/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Card from './components/Card'
// import JobListing from './JobListing'
// import ViewAllJobs from './components/ViewAllJobs'

// (
//     <>
//     <Navbar/>
//     <Hero title = "Become a React Dev " subTitle="Find the React jobs that fits your skills and needs"/>
//     <Card/>
//     <JobListing/>
//     <ViewAllJobs />
//     {/* <TestingHooks/> */}
//     <div>App</div>

//     </>
//   )