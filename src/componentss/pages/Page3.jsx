import React from 'react'
import AddOn from '../addOn/AddOn';
import usePlanContext from '../../context/PlanContext';
import { useNavigate } from 'react-router';

const Page3 = () => {
  const {allAddOns,setAllAddOns }= usePlanContext();
  const navigate= useNavigate();

  const printAdds=()=>{
    console.log(allAddOns);
    if(allAddOns.length >0){
      navigate('/step-4');
    }else{
      alert('select any one');
    }
  }

  const goBack=()=>{
    setAllAddOns([]);
    navigate('/step-2');
  }
  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Pick add-ons</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>Add-ons help enhance your gaming experience.</p>

        <div className='mt-8 flex flex-col gap-4.5'>
          <AddOn />
          <div className='flex justify-between items-center mt-15'>
            <p className='text-gray-400 hover:cursor-pointer' onClick={goBack}>Go Back</p>
            <input
            onClick={printAdds}
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