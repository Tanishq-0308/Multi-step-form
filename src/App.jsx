import React from 'react'
import Nav from './componentss/nav/Nav'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='overflow-hidden rounded-2xl flex flex-col md:flex-row w-full max-w-5xl gap-1 bg-white p-2.5'>
        <div className='w-full md:w-[32%] md:h-140 '>
        <Nav/>
        </div>
        <div className='md:w-[68%] w-full p-8 flex flex-col items-center'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App