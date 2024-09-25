"use server";
// the server action we need always set the use server
// Mutation its the manipulation to the server as a Update or Post request
import { signIn, signOut } from "./auth";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";
const regex = /^[a-zA-Z0-9]{6,12}$/;
import supabase from "./supabase";

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
export async function SignInAction(){
    await signIn("google", {redirectTo:"/account"})
}

export async function signOutAction(params) {
    await signOut({redirectTo:"/"})
}
