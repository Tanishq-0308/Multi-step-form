import React, { useState } from "react";
import { monthlyData, yearlyData } from "../../Data";
import usePlanContext from "../../context/PlanContext";

const Card = ({ icon, mode, price, free, duration, checked }) => {
  const { planDuration, setAllData, allData } = usePlanContext();
  const [monthly, setMonthly] = useState(monthlyData);
  const [yearly, setYearly] = useState(yearlyData);

  const handleSelected=(name, price)=>{
    console.log('clicked');
    setAllData({name:name, price:price});
    setMonthly((prev)=> prev.map((list)=>({...list, selected:false})));
    setMonthly((prev)=> prev.map((list)=> list.mode === name ? {...list, selected:true}: list))
  }
  
  const handleYearlySelected=(name, price)=>{
    console.log('clicked');
    setAllData({name:name, price:price});
    setYearly((prev)=> prev.map((list)=>({...list, selected: false})));
    setYearly((prev)=> prev.map((list)=> list.mode === name ? {...list, selected:true}: list));
  }
  return (
    <>
      {planDuration === "monthly"
        ? monthly.map((data) => (
          <div
          onClick={()=>handleSelected(data.mode, data.pricing)}
          className={`border hover:border-[#02479b] rounded-xl pt-5 sm:pb-2 flex sm:flex-col sm:gap-10 items-start ${
            data.selected ? "border-[#02479b] border-2" : "border border-gray-300"
          }`}
        >
          <img src={data.icon} alt={data.mode} className="sm:h-9 h-13 px-5" />
          <div className="flex flex-col gap-1.5 w-full sm:px-4.5">
            <h1 className="text-[#02479b] font-ubuntu-bold">{data.mode}</h1>
            <p className="text-gray-400 ">
              ${data.pricing}/mo
            </p>
            <p
              className={`text-sm text-[#02479b] font-ubuntu-medium opacity-0`}
            >
              2 months free
            </p>
          </div>
        </div>
          ))
        : yearly.map((data) => (
          <div
          onClick={()=>handleYearlySelected(data.mode, data.pricing)}
          className={`border hover:border-[#02479b] rounded-xl pt-5 pb-2 flex sm:flex-col sm:gap-10 items-start ${
            data.selected ? "border-[#02479b] border-2" : "border border-gray-300"
          }`}
        >
          <img src={data.icon} alt={data.mode} className="sm:h-9 h-13 px-5" />
          <div className="flex flex-col gap-1.5 w-full sm:px-4.5">
            <h1 className="text-[#02479b] font-ubuntu-bold">{data.mode}</h1>
            <p className="text-gray-400 ">
              ${data.pricing}/yr
            </p>
            <p
              className={`text-sm text-[#02479b] font-ubuntu-medium block`}
            >
              2 months free
            </p>
          </div>
        </div>
          ))}
    </>
  );
};

export default Card;
