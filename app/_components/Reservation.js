import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import { ReservationProvider } from "./ReservationContext"
import ReservationForm from "./ReservationForm"


 async function Reservation({cabin}) {
    const [settings,bookedDates] = await Promise.all([ getSettings(), getBookedDatesByCabinId(cabin.id)  ])
    
    return (
        <>
            <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
            <ReservationForm  cabin={cabin}/>
        </>

    )
}

export default Reservation
