import React from 'react'
import Nav from './componentss/nav/Nav'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='flex sm:items-center sm:justify-center min-h-screen w-full'>
      <div className='overflow-hidden sm:rounded-2xl flex flex-col sm:flex-row w-full max-w-5xl gap-1 sm:bg-white sm:p-2.5'>
        <div className='w-full sm:w-[32%] sm:h-140 h-40 '>
        <Nav/>
        </div>
        <div className='md:w-[68%] p-8 flex flex-col items-center  max-sm:relative -top-15 rounded-2xl left-5 w-[90%] bg-white'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App