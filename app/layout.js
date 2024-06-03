import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"

import "@/app/_styles/globals.css"
export const metadata = {
  title: "The React Next",
}

//THE LAYOUT SHOULD RETURN LIKE  THIS WITH A HTML TAG BODY TAG AND A HEADER 
function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo/>
        </header>
        <Navigation/>
        <main>
          {children}
        </main>
        <footer>Copyright by Sashida&apos;s DEV</footer>
      </body>
    </html>
  )
}

export default RootLayout
