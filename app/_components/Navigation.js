import Link from "next/link"

function Navigation() {
    return (
        <ul className="flex flex-col flex-col-reverse">
           <li ><Link href="/cabins">cabins</Link></li> 
           <li><Link href="/about">about</Link></li> 
           <li><Link href="/account">account</Link></li> 
           <li><Link href="/">home</Link></li> 
        </ul>
    )
}

export default Navigation
