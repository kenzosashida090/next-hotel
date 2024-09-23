import { Suspense } from "react"

import Spinner from "@/app/_components/Spinner"
import Filter from "../_components/Filter"
import CabinList from "../_components/CabinList";

/////////////////////// THIS IS A ROUTE CACHE LEVEL
// FULL ROUTE CACHE //
//export const revalidate = 0 // by this force the page to be dinamyc 
//revalidate  will set the time to erase the cache will fetch data every single render
//////////////////////

//This is call incremental static regeneration (ISR)
//export const revalidate = 3600 // by this every hour will try to fetch to the server and render the new data

export const metadata = {
    title:"Cabins / "
}
//seatchParams is passed by next as an objecet ?capacity=small
// will return an object {capacity:"small"}
// searchparams will set the page dinamyc and not static
//const CabinList = dynamic(() => import("./CabinList"), { loading: ()=><Spinner/> });

function  Page({searchParams}) {
  const filter = searchParams?.capacity ?? "all";

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
      <div className="flex justify-end mb-8">
        <Filter/>
      </div>
      <Suspense fallback={<Spinner/>} key={searchParams.capacity}> 
      {/* All because react wraps all in a transaction suspense will not work when we set filters so we assign a key to allow the suspsense work again */}
      {/* Suspense needs to works outside the component that fetch in other words the fetching component will be set as a children of the Suspense component */}
        <CabinList filter={filter}/>
      </Suspense>
    
    </div>
    )
}


export default Page
