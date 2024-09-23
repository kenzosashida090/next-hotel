import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service"

//this params are provided by next
export async function GET(request, {params}) {
    const {cabin_id} = params
    try{
        const [cabin, bookedDates] = await Promise.all([getCabin(cabin_id),getBookedDatesByCabinId(cabin_id)])
        return Response.json({
            cabin,
            bookedDates
        })
    }catch{
        return Response.json({message:"Cabin not found"})
    }

    
}