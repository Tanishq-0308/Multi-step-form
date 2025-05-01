import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { Switch } from '@mui/material';
import usePlanContext from '../../context/PlanContext';

const Page2 = () => {

  const {planDuration, setPlanDuration}= usePlanContext();

  const monthlyData = [
    {
      selected:false,
      icon: '/assets/images/icon-arcade.svg',
      mode: 'Arcade',
      pricing: 9
    },
    {
      selected:false,
      icon: '/assets/images/icon-advanced.svg',
      mode: 'Advanced',
      pricing: 12
    },
    {
      selected:false,
      icon: '/assets/images/icon-pro.svg',
      mode: 'Pro',
      pricing: 15
    }
  ];

  const yearlyData = [
    {
      selected:false,
      icon: '/assets/images/icon-arcade.svg',
      mode: 'Arcade',
      pricing: 90
    },
    {
      selected:false,
      icon: '/assets/images/icon-advanced.svg',
      mode: 'Advanced',
      pricing: 120
    },
    {
      selected:false,
      icon: '/assets/images/icon-pro.svg',
      mode: 'Pro',
      pricing: 150
    }
  ];


  const handleToggle = () => {
    if (planDuration === 'monthly') {
      setPlanDuration('yearly');
    } else {
      setPlanDuration('monthly');
    }
  }
  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Select your plan</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>You have the option of monthly or yearly billing.</p>

        <div className='mt-8 flex flex-col gap-6'>
          <div className='grid grid-cols-3 gap-5'>
            <Card/>
          </div>
          <div className='rounded-lg flex items-center justify-center gap-4 bg-[#e5f3fd98]'>
            <p className={`${planDuration === 'monthly' ? 'text-[#02479b] font-ubuntu-medium' : 'text-gray-400'}`}>Monthly</p>
            <Switch onChange={handleToggle} color='blue' checked={planDuration === 'monthly' ? false : true}/>
            <p className={`${planDuration === 'yearly' ? 'text-[#02479b] font-ubuntu-medium' : 'text-gray-400'}`}>Yearly</p>
          </div>
          <div className='flex justify-between items-center mt-15'>
            <p className='text-gray-400 hover:cursor-pointer'>Go Back</p>
            <input
              type="submit"
              value="Next Step"
              className='border hover:cursor-pointer flex items-end justify-end bg-[#02479b] text-white px-3 py-2 rounded-md text-[0.9rem]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2