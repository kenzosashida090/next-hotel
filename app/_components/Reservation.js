import { auth } from "../_lib/auth"
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import LoginMessage from "./LoginMessage"
import { ReservationProvider } from "./ReservationContext"
import ReservationForm from "./ReservationForm"


 async function Reservation({cabin}) {
    const [settings,bookedDates] = await Promise.all([ getSettings(), getBookedDatesByCabinId(cabin.id)  ])
    const session = await auth()
    return (
        <>
           <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
           { session?.user ?
              <ReservationForm  cabin={cabin} user={session.user}/>
             :
             <LoginMessage/>
            }
        </>

    )
}

export default Reservation
