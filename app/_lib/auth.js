import NextAuth from "next-auth"

import Google from "next-auth/providers/google"

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
        }
    },
    pages:{
        signIn:"/login"
    }
}

export const {auth,signIn,signOut, handlers:{GET,POST}}=NextAuth(authConfig)