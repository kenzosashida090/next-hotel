import NextAuth from "next-auth"

import Google from "next-auth/providers/google"
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks: {
        authorized({auth, request}){
            //authorized needs to return true/false 
            return !!auth?.user; //this is a way to transform to a boolean
        },
        async signIn({user,account,profile}){
            //this function register the user in supabase if its the first signIn
            try{
              const existingGuest =   await getGuest(user.email)
              if(!existingGuest){
                await createGuest({email:user.email, full_name:user.name})
              }
              return true
            }catch{
                return false
            }
        },
        async session({session, user}){
            //setting to the session the id guest
            const guest = await getGuest(session.user.email)
            session.user.guestId = guest.id
            return session
        }
    },
    pages:{
        signIn:"/login"
    }
}

export const {auth,signIn,signOut, handlers:{GET,POST}}=NextAuth(authConfig)