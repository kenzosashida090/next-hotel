import { Suspense } from "react"
import CabinList from "@/app/_components/CabinList"
import Spinner from "@/app/_components/Spinner"

/////////////////////// THIS IS A ROUTE CACHE LEVEL
// FULL ROUTE CACHE //
//export const revalidate = 0 // by this force the page to be dinamyc 
//revalidate  will set the time to erase the cache will fetch data every single render
//////////////////////

//This is call incremental static regeneration (ISR)
export const revalidate = 3600 // by this every hour will try to fetch to the server and render the new data

export const metadata = {
    title:"Cabins / "
}
function  Page() {


  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <Suspense fallback={<Spinner/>}> 
      {/* Suspense needs to works outside the component that fetch in other words the fetching component will be set as a children of the Suspense component */}
        <CabinList/>
      </Suspense>
    
    </div>
    )
}

export default Page
