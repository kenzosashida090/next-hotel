//import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard"

async function CabinList({filter}) {
    //noStore(); Still experimental but this will work as a cache  component level
    //noStore will no store cache and in every render will try to fetch to the server
    const cabins= await getCabins();
    if(!cabins.length) return null;
    let displayedCabins

    switch(filter){
      case 'all': displayedCabins = cabins; break
      case "small" : displayedCabins = cabins.filter((cabin) => cabin.max_capacity <= 3); break
      case "medium": displayedCabins = cabins.filter((cabin) => cabin.max_capacity >=4 && cabin.max_capacity <= 7); break
      case "large": displayedCabins = cabins.filter((cabin)=> cabin.max_capacity > 8 ); break
      default: displayedCabins = cabins
    }
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
    )
}

export default CabinList
