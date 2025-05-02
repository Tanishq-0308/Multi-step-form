import React, { useEffect, useState } from 'react'
import usePlanContext from '../../context/PlanContext'
import { useNavigation } from 'react-router';

const Page4 = () => {
  const { allData, allAddOns, planDuration } = usePlanContext();
  let value;
  const [total, setTotal]= useState('');
  const navigate= useNavigation();

  useEffect(() => {
    console.log(allAddOns);
    console.log(allData);
    if(allAddOns.length > 0){
      value= allAddOns.map((item)=> item.price);
    }
    const newVlaue= value.reduce((a, c)=> a+c);
    console.log(newVlaue);
    setTotal(newVlaue + allData.price);
  }, []);
  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Finishing up</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>Double-check everything looks OK before confirming.</p>

        <div className='mt-8 flex flex-col gap-4.5'>
          <div>
            <div className='bg-gray-100 rounded-lg flex flex-col gap-4 p-5'>
              <div className='flex justify-between items-center sm:gap-52'>
                <div className='flex flex-col items-start '>
                  <p className='text-[#02479b] font-ubuntu-bold'>{allData.name}({planDuration})</p>
                  <button className=' underline text-[#8c87f0] hover:text-[#5752b9]' onClick={()=> navigate('/step-3')}>Change</button>
                </div>
                <div>
                  <p className='text-[#02479b] font-ubuntu-bold'>${allData.price}/{planDuration === 'monthly' ? 'mo' : 'yr'}</p>
                </div>
              </div>
              <hr />
              {
                allAddOns.map((item) => (
                  <div className='flex justify-between items-center sm:gap-50' key={item.name}>
                    <p className='text-gray-400 text-[0.95rem]'>{item.name}</p>
                    <p className='text-[#02479b] font-ubuntu-medium text-[0.95rem]'>${item.price}/{planDuration === 'monthly' ? 'mo' : 'yr'}</p>
                  </div>
                ))
              }
            </div>
            <div className='p-5 flex justify-between items-center'>
              <p className='text-gray-400'>
                Total (per month)
              </p>
              <p className='font-ubuntu-bold text-[#3b32df]'>
                +${total}/{planDuration === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-15'>
            <p className='text-gray-400 hover:cursor-pointer'>Go Back</p>
            <input
              type="submit"
              value="Confirm"
              className='border hover:cursor-pointer flex items-end justify-end bg-[#8c87f0] text-white px-3 py-2 rounded-md text-[0.9rem]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page4