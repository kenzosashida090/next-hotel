"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '../_lib/action';
import { useTransition } from 'react';

async function DeleteReservation({ booking_id }) {
    
  return (
    <Button onClick={()=>deleteReservation(booking_id)} >
      <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
    </Button>
  );
}

const Button = ({children, onClick})=>{
    //useTransition is a non blocking concurrent model
    //It doesnt block de ui 
    const [isPending, startTransistion] = useTransition();
    if(isPending) return <span className='mx-auto'>Deleting...</span>
    return(
	<button className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
	    onClick={()=>{
		confirm("Do you want to delete this reservation?")
		startTransistion(()=>{
		onClick(); 
	    })
	    }} >
	    {children}
	</button>
    )
}
export default DeleteReservation;
