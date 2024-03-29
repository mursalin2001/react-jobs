import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPages from './pages/JobsPages'
// import TestingHooks from './components/TestingHooks'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
     <Route index element={<HomePage />}/>
     <Route  path='/jobs' element={<JobsPages />}/>


    </Route>

  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App