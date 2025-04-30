import React from 'react'

const Card = ({icon, mode, price, free, duration}) => {
  return (
    <div className='border hover:border-[#02479b] border-gray-300 rounded-xl pt-5 pb-2 flex flex-col gap-10 items-start'>
        <img src={icon} alt={mode} className='h-9 px-5'/>
        <div className='flex flex-col gap-1.5 w-full px-4.5'>
            <h1 className='text-[#02479b] font-ubuntu-bold'>{mode}</h1>
            <p className='text-gray-400 '>${price}/{duration}</p>
            <p className={`text-sm text-[#02479b] font-ubuntu-medium ${free ? 'block': 'opacity-0'}`}>2 months free</p>
        </div>
    </div>
  )
}

export default Card