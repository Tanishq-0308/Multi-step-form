import React, { useEffect, useState } from "react";
import bgImage from "/assets/images/bg-sidebar-desktop.svg";
import mobileImage from "/assets/images/bg-sidebar-mobile.svg";
import { NavLink } from "react-router";

const Nav = () => {
  const [image, setImage]= useState(window.innerWidth < 640 ? mobileImage : bgImage);
  const handleImage=()=>{
    if(window.innerWidth < 640){
      setImage(mobileImage);
    }
    else{
      setImage(bgImage)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleImage)

    return()=>{
      window.removeEventListener('resize', handleImage);
    }
  })
  return (
    <div className="h-full w-full relative max-sm:flex justify-center ">
      <img src={image} alt="" className="h-full absolute w-full object-cover sm:rounded-2xl" />
      <nav className="absolute p-8 text-white flex mt-4 sm:mt-0 sm:flex-col gap-5">
        <li className=" list-none flex items-center gap-4">
        <NavLink to='/' className={({isActive})=>` ${isActive ? 'bg-[#adbeff] text-black border-transparent' : ''} border rounded-full px-3 py-1 `}>
          <p className="">1</p>
        </NavLink>
          <div className="md:block hidden">
            <h1 className="text-gray-400">STEP 1</h1>
            <h2 className="font-ubuntu-bold tracking-widest text-[1rem]">YOUR INFO</h2>
          </div>
        </li>
        <li className=" list-none flex items-center gap-4">
        <NavLink to='/step-2' className={({isActive})=>` ${isActive ? 'bg-[#adbeff] text-black border-transparent' : ''} border rounded-full px-3 py-1 pointer-events-none`}>
          <p className="">2</p>
        </NavLink>
          <div className="md:block hidden">
            <h1 className="text-gray-400">STEP 2</h1>
            <h2 className="font-ubuntu-bold tracking-widest">SELECT PLAN</h2>
          </div>
        </li>
        <li className=" list-none flex items-center gap-4">
        <NavLink to='/step-3' className={({isActive})=>` ${isActive ? 'bg-[#adbeff] text-black border-transparent' : ''} border rounded-full px-3 py-1 pointer-events-none`}>
          <p className="">3</p>
        </NavLink>
          <div className="md:block hidden">
            <h1 className="text-gray-400">STEP 3</h1>
            <h2 className="font-ubuntu-bold tracking-widest">ADD-ONS</h2>
          </div>
        </li>
        <li className=" list-none flex items-center gap-4">
        <NavLink to='/step-4' className={({isActive})=>` ${isActive ? 'bg-[#adbeff] text-black border-transparent' : ''} border rounded-full px-3 py-1 pointer-events-none`}>
          <p className="">4</p>
        </NavLink>
          <div className="md:block hidden">
            <h1 className="text-gray-400">STEP 4</h1>
            <h2 className="font-ubuntu-bold tracking-widest">SUMMARY</h2>
          </div>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
