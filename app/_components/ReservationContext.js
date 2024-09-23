"use client"

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialState = {
    from:undefined,
    to:undefined
}
export function ReservationProvider({children}){
    const [range,setRange] = useState(initialState)

    return(
        <ReservationContext.Provider value={{range,setRange}}>
            {children}
        </ReservationContext.Provider>
    )
}
//create a custom hook to access to the data
export function useReservation(){
    const context = useContext(ReservationContext)
    if(context===undefined) throw new Error("Context was used outside of the provider")
    return context
}

