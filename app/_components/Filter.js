"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"


function Filter() {
    const [filterName, setFilterName] = useState("all")
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    
    function handleFilter (filter){
        setFilterName(filter)
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }
    const params = searchParams.get("capacity")
    return (
        <div className="border border-primary-800 flex">
            <Button handleFliter={handleFilter} filter={"all"}>All Cabins</Button>
            <Button handleFliter={handleFilter} filter={"small"} >1&mdash; 3 guests</Button>
            <Button handleFliter={handleFilter} filter={"medium"}>3&mdash; 7 guests</Button>
            <Button handleFliter={handleFilter} filter={"large"}>8&mdash; 12 guests</Button>
        </div>
    )
}   
function Button ({handleFliter, filter,children}){
    const searchParams = useSearchParams()
    const params = searchParams.get("capacity")
    return <button className={`px-5 py-2 hover:bg-primary-700  ${filter=== params ? "bg-primary-900": ""}`} onClick={()=>handleFliter(filter)}>{children}</button>
}
export default Filter
