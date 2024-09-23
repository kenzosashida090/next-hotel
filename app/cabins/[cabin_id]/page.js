
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";


//Generate dynamic metadata

export async function generateMetadata({params}){
  
  const {name} = await getCabin(params.cabin_id)
  return { title: `Cabin ${name}`}
  /////////////
}

export async function generateStaticParams() {
  //This is a method to generate static pages
  // we tell to next to "prefetch this data" to know the number of cabins that we have
  //this will be more faster 
  //also the name of this function its provided by next to identify  
  const cabins = await getCabins()

  const ids = cabins.map((el)=>({cabin_id:String(el.id)}))
  return ids;
  
}

export default async function Page({params}) { // by default next pass as a prop the url params
  const cabin = await getCabin(params.cabin_id)
  // const settings = await getSettings()
  // const bookedDates = await getBookedDatesByCabinId(params.cabin_id) 
  //for better aproach we run in paralel with promise each rquest, for better performance
  //const [cabin,settings,bookedDates] = await Promise.all([ getCabin(params.cabin_id), getSettings(), getBookedDatesByCabinId(params.cabin_id)  ])
  const { name } =
  cabin;
  return (
    <div className="max-w-6xl mx-auto mt-8">
     <Cabin cabin={cabin}/>
     <div>
        <h2 className="text-5xl font-semibold text-center mb-5 text-accent-400">
        Reserve {name} today. Pay on arrival.
      </h2>
      <Suspense fallback={<Spinner/>}>  
         <Reservation cabin={cabin} />
      </Suspense>
    </div>
    </div>
  );
}
