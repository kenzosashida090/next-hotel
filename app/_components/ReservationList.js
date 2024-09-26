"use client"

import ReservationCard from "@/app/_components/ReservationCard"
import { useOptimistic } from "react"
import { deleteReservation } from "../_lib/action" 


export default function ReservationList ({bookings}) {
    //bookings prop is a initialState
    const [optimisticBookings, optimisticDelete ] =
	useOptimistic(bookings, ()=>{
	    (state, bookingId) =>{
		return state.filter((booking)=> booking !== bookingId)
	    }
	}
	)
    
    async function handleDelete(bookingId){
	optimisticDelete(bookingId)
	await deleteReservation(bookingId)
    }
    return(
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
              <ReservationCard onDelete={handleDelete} booking={booking} key={booking.booking_id} />
            ))}
        </ul>
    )
}
