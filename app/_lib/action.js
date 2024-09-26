"use server";
// the server action we need always set the use server
// Mutation its the manipulation to the server as a Update or Post request
import { signIn, signOut } from "./auth";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";
import supabase from "./supabase";

const regex = /^[a-zA-Z0-9]{6,12}$/;

export async function updateGuest(formData){
    const session = await auth()
    
    if(!session)throw new Error("You must be logged in")

    const national_id=formData.get("national_id")
    if(!regex.test(national_id)) throw new Error("Please provide a valid national id")
    const [nationality,country_flag]  = formData.get("nationality").split("%")
    const updateData = {
	nationality,
	country_flag,
	national_id 
    }

    const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId)
    .select()

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
  //this is a cache on demand validation
    //basically we tell next to fetch again the data an erase the old cache
  revalidatePath("/account/profile")
  
}

export async function deleteReservation(bookingId){
    const session = await auth();
    if(!session) throw new Error("You need to sign in to delete a Reservation")
    const guestBookings = await getBookings(session.user.guestId)
    const bookingsIds = guestBookings.map((booking)=> booking.booking_id)
    if(!bookingsIds.includes(bookingId)) throw new Error("You dont have that reservetion")
    const { error } = await supabase.from('bookings').delete().eq('booking_id', bookingId);
    
    if (error) {
	console.error(error);
	throw new Error('Booking could not be deleted');
    }
   revalidatePath("/account/reservations")
}
export async function SignInAction(){
    await signIn("google", {redirectTo:"/account"})
}
export async function updateReservation(formData){
    const session = await auth();
    if(!session) throw new Error("You need to sign in to update a reservetion")
    const bookingId = formData.get("booking_id")
    const bookings = await getBookings(session.user.guestId)
    const bookingIds = bookings.map((booking)=> booking.booking_id)
    if(!bookingIds.includes(Number(bookingId))) throw new Error("You dont have this reservation")
    const num_guests = formData.get("num_guests")
    const observations = formData.get("observations")
    const updatedFields = {
	num_guests,
	observations
    }
    const { error } = await supabase
	.from('bookings')
	.update(updatedFields)
	.eq('booking_id', bookingId)
	.select()
	.single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
    
    redirect("/account/reservations")
}
export async function signOutAction(params) {
    await signOut({redirectTo:"/"})
}
