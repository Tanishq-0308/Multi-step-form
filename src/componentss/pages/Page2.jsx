import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import { Switch } from '@mui/material';
import usePlanContext from '../../context/PlanContext';
import { useNavigate } from 'react-router';

const Page2 = () => {

  const {planDuration, setPlanDuration,  allData, setAllData}= usePlanContext();
  const navigate=useNavigate();

  const printData=()=>{
    if(allData.mode== 'NA'){
      alert('Please select a Plan');
    }else {
      navigate('/step-3');
    }
    console.log(allData);
  }
  const handleToggle = () => {
    if (planDuration === 'monthly') {
      setPlanDuration('yearly');
    } else {
      setPlanDuration('monthly');
    }
  }

  const goBack=()=>{
    setAllData({});
    navigate('/');
  }
  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Select your plan</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>You have the option of monthly or yearly billing.</p>

        <div className='mt-8 flex flex-col gap-6'>
          <div className='sm:grid grid-cols-3 gap-5 flex flex-col'>
            <Card/>
          </div>
          <div className='rounded-lg flex items-center justify-center gap-4 bg-[#e5f3fd98]'>
            <p className={`${planDuration === 'monthly' ? 'text-[#02479b] font-ubuntu-medium' : 'text-gray-400'}`}>Monthly</p>
            <Switch onChange={handleToggle} color='blue' checked={planDuration === 'monthly' ? false : true}/>
            <p className={`${planDuration === 'yearly' ? 'text-[#02479b] font-ubuntu-medium' : 'text-gray-400'}`}>Yearly</p>
          </div>
          <div className='flex justify-between items-center mt-15'>
            <p className='text-gray-400 hover:cursor-pointer' onClick={goBack}>Go Back</p>
            <input
              onClick={printData}
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