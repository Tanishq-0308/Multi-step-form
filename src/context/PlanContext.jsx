import { createContext, useContext, useState } from "react";

export const PlanContext = createContext();

export const PlanContextProvider = ({ children }) => {
    const [planDuration, setPlanDuration] = useState('monthly');
    const [allData, setAllData] = useState(
        {
            mode: "NA",
            price: "NA"
        }
    );
    const [allAddOns, setAllAddOns] = useState([]);
    return (
        <PlanContext.Provider value={{ planDuration, setPlanDuration, allData, setAllData, allAddOns, setAllAddOns }}>
            {children}
        </PlanContext.Provider>
    )
}

export default function usePlanContext() {
    return useContext(PlanContext);
}