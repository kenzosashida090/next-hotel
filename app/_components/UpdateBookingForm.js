"use client"
import { useFormStatus } from "react-dom"

export default function Button({children, pendingLabel}){
    const {pending} = useFormStatus()
    return(
	    <div className="flex justify-end items-center gap-6">
		<button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
		    { pending ? pendingLabel:  children}
		</button>
	    </div>    )
}
