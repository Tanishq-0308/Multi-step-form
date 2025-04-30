import { createContext, useContext, useState } from "react";

export const PlanContext= createContext();

export const PlanContextProvider=({children})=>{
    const [planDuration, setPlanDuration] = useState('monthly');
    const [allData, setAllData]= useState({
        plan:{
            mode:"",
            price:"",
            duration:""
        },
        addOns:{
            
        }
    });
    return(
        <PlanContext.Provider value={{planDuration, setPlanDuration}}>
            {children}
        </PlanContext.Provider>
    )
}

export default function usePlanContext(){
    return useContext(PlanContext);
}