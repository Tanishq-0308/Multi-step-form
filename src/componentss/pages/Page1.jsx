import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Page1 = () => {
  const [formData, setFormData]= useState({
    name:"",
    email:"",
    number:""
  });
  const navigate=useNavigate();

  const [errors, setErrors]= useState({});

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormData((prev)=> ({...prev, [name]:value}));

    setErrors((prev)=> ({...prev, [name]:""}));
  }

  const handleForm = (e) => {
    e.preventDefault();

    const newErrors ={};

    if(!formData.name.trim()) newErrors.name = "This field is required";
    if(!formData.email.trim()) newErrors.email = "This field is required";
    if(!formData.number.trim()) newErrors.number = "This field is required";

    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return;
    }

    alert("Form submitted:\n" + JSON.stringify(formData, null, 2));
    navigate('/step-2');
  }
  return (
    <div className='flex flex-col h-full justify-between items-end'>
      <div>
        <h1 className='text-[#02295a] text-[2rem] font-ubuntu-bold mb-0.5'>Personal info</h1>
        <p className='text-[#9699ab] font- text-[0.97rem] '>Please provide your name, email address, and phone number.</p>

        <form className='mt-8 flex flex-col gap-6' onSubmit={handleForm}>
          <div className=''>
          <h2 className='text-[#02479b] flex justify-between font-ubuntu-medium mb-1 '><p>Name</p> {errors.name && <p className='text-red-500'>{errors.name}</p>}</h2>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className='border border-gray-400 rounded-lg w-full py-2 px-4 text-xl focus:text-[#02479b] font-ubuntu-medium text-gray-600  focus:outline-none focus:ring-1 focus:border-none focus:ring-[#02479b]'
              placeholder='e.g. Stephen King'
            />
          </div>
          <div>
          <h2 className='text-[#02479b] flex justify-between font-ubuntu-medium mb-1 '><p>Email Address</p> {errors.email && <p className='text-red-500'>{errors.email}</p>}</h2>
            <input 
            value={formData.email} 
            onChange={handleChange} 
            type="email" 
            name="email" 
            id="email" 
            className='border border-gray-400 rounded-lg w-full py-2 px-4 text-xl text-[#02479b] font-ubuntu-medium  focus:outline-none focus:ring-1 focus:border-none focus:ring-[#02479b]' 
            placeholder='e.g. stephanking@lorem.com'
            />
          </div>
          <div>
            <h2 className='text-[#02479b] flex justify-between font-ubuntu-medium mb-1 '><p>Phone Number</p> {errors.number && <p className='text-red-500'>{errors.number}</p>}</h2>
            <input 
            value={formData.number} 
            onChange={handleChange} 
            type="text" 
            name="number" 
            id="number" 
            className='border border-gray-400 rounded-lg w-full py-2 px-4 text-xl text-[#02479b] font-ubuntu-medium  focus:outline-none focus:ring-1 focus:border-none focus:ring-[#02479b]' 
            placeholder='e.g. +1 234 567 890'
            />
          </div>
          <div className='flex justify-end mt-10'>
            <input 
            type="submit" 
            value="Next Step" 
            className='border flex items-end justify-end bg-[#02479b] text-white px-3 py-2 rounded-md text-[0.9rem]' 
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page1