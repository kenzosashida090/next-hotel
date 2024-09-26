import UpdateBookingForm from "@/app/_components/UpdateBookingForm"
import { getBooking } from "@/app/_lib/data-service"
import { auth } from "@/app/_lib/auth"
import { updateReservation } from "@/app/_lib/action";
import { getCabin } from "@/app/_lib/data-service";
import Button from "@/app/_components/UpdateBookingForm";
export default async function page({params}){
    const session = await auth();
    console.log("Params=====", params)
    if(!session) throw new Error("You must log in to edit your reservation")
    const booking = await getBooking(params.booking_id) 
    const cabin  = await getCabin(booking?.cabin_id)
    return(
	<div>
	    <h2 className="font-semibold text-2xl text-accent-400 mb-7">Edit Reservation</h2>
	    <form action={updateReservation} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
	    	<div className="space-y-2">
		    <label>How many guests</label>
		    <select 
			name="num_guests" 
			id="num_guests" 
			required 
			className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
			defaultValue={booking.num_guests}
		        >
			<option value="" key="">
			    Select num of guest... 
			</option>
			{
			Array.from(
			    {length:cabin.max_capacity},
			    (_,i)=> i+1).map((x)=>
				<option value={x} key={x}>
				    {x} {x==="1" ? "guest" : "guests"}
				</option>
			    )
			}
		    </select>
		</div>
		<div className="space-y-2">
		    <label htmlFor="observations">Everything we should know about your stay?</label>
		    <textArea name="observations" className="px-5 py-3 bg-primary-200 px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"/>
		</div>
		<input name="booking_id" id="booking_id" value={params.booking_id}  hidden/>
		<Button pendingLabel="Updating..."  >
		    Update Reservation
		</Button>
	    </form>
	</div>
    )
}
