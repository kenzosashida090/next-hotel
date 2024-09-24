import { auth } from "../_lib/auth"

export const metadata = {
    title:"Guest area"
}
async function page() {
    const session = await auth()
    const firstName = session.user.name.split(" ")[0]
    return (
        <div>
            <h2 className="font-semibold text-accent-400 mb-7 text-2xl">Welcome, {firstName}</h2>
        </div>
    )
}

export default page
