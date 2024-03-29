import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements, createRoute} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import JobListing from './JobListing'
import ViewAllJobs from './components/ViewAllJobs'
// import TestingHooks from './components/TestingHooks'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>}/>)
)
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title = "Become a React Dev " subTitle="Find the React jobs that fits your skills and needs"/>
    <Card/>
    <JobListing/>
    <ViewAllJobs />
    {/* <TestingHooks/> */}
    <div>App</div>

    </>
  )
}

export default App