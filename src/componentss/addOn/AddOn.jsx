import React, { useEffect, useState } from 'react'
import usePlanContext from '../../context/PlanContext';
import { addOnsMonthly, addOnsYearly } from '../../Data';

const AddOn = () => {
    const { planDuration, setAllAddOns } = usePlanContext();
    const [addOnMonthly, setAddOnMonthly] = useState(addOnsMonthly);
    const [addOnYearly, setAddOnYearly] = useState(addOnsYearly);

    const toggleButtonMonthly = (name, price) => {
        setAddOnMonthly((prev) =>
            prev.map((list) =>
                list.name === name ? { ...list, checked: !list.checked } : list
            )
        );
    }

    const toggleButtonYearly = (name, price) => {
        setAddOnYearly((prev) => prev.map((list) => list.name === name ? { ...list, checked: !list.checked } : list));
    }

    const checker=()=>{
        setAllAddOns(addOnMonthly.filter((list)=> list.checked=== true ? list : ''));
    }

    const checkerY=()=>{
        setAllAddOns(addOnYearly.filter((list)=> list.checked=== true ? list : ''));
    }
    useEffect(()=>{
        checker();
    },[addOnMonthly])

    useEffect(()=>{
        checkerY();
    },[addOnYearly])
    return (
        <>
            {
                planDuration === 'monthly' ?
                    addOnMonthly.map((adds) => (
                        <div key={adds.name} className={`flex border rounded-lg border-gray-300 justify-between sm:gap-22 px-6 py-3 items-center ${adds.checked ? 'ring ring-[#473dff] bg-gray-100' : ''}`}>
                            <div className='flex gap-6'>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    checked={adds.checked}
                                    onChange={() => toggleButtonMonthly(adds.name, adds.price)}
                                    className='w-5 accent-[#473dff]'
                                />
                                <div>
                                    <h1 className='text-[#02479b] font-ubuntu-bold'>{adds.name}</h1>
                                    <p className='text-gray-400 text-[0.9rem]'>{adds.type}</p>
                                </div>
                            </div>
                            <p className='text-[#473dff] font-ubuntu-medium'>${adds.price}/mo</p>
                        </div>
                    ))
                    :
                    addOnYearly.map((adds) => (
                        <div key={adds.name} className={`flex border rounded-lg border-gray-300 justify-between sm:gap-22 px-6 py-3 items-center ${adds.checked ? 'ring ring-[#473dff] bg-gray-100' : ''}`}>
                            <div className='flex gap-6'>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    checked={adds.checked}
                                    onChange={() => toggleButtonYearly(adds.name, adds.price)}
                                    className='w-5 accent-[#473dff]'
                                />
                                <div>
                                    <h1 className='text-[#02479b] font-ubuntu-bold'>{adds.name}</h1>
                                    <p className='text-gray-400 text-[0.9rem]'>{adds.type}</p>
                                </div>
                            </div>
                            <p className='text-[#473dff] font-ubuntu-medium'>${adds.price}/yr</p>
                        </div>
                    ))
            }
        </>
    )
}

export default AddOn