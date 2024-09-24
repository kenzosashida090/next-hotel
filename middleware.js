// import { NextResponse } from "next/server"

import { auth } from "./app/_lib/auth"

// export function middleware(request){
//     console.log(request)
//     return NextResponse.redirect(new URL("/about"), request.url)
// }
export const middleware = auth
export const config = {
    matcher: ["/account"] // next middlewares will run on each page so we specifie the route 
}