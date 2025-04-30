import React from 'react'
import AddOn from '../addOn/AddOn';
import usePlanContext from '../../context/PlanContext';

const Page3 = () => {
  const { planDuration } = usePlanContext();

  const addOns = [
    {
      checked: false,
      name: 'Online service',
      type: 'Access to multiplayer games',
      price: 10
    },
    {
      checked: false,
      name: 'Large storage',
      type: 'Extra 1TB of cloud save',
      price: 20
    },
    {
      checked: false,
      name: 'Customizable profile',
      type: 'Custom theme on your profile',
      price: 20
    }
  ];


  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Pick add-ons</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>Add-ons help enhance your gaming experience.</p>

        <div className='mt-8 flex flex-col gap-4.5'>
          <AddOn />
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

export default Page3