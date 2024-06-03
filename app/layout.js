import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"

import "@/app/_styles/globals.css"
export const metadata = {
  title:{
    template:"%s The Next Hotel", //exports the title of each page and replace the %s.
    default:"Welcome / The Next Hotel" //By default the page that has not title will set as a default title
  },
  description:"Luxurius cabin hotel, located in the heart of Gotham City, sourranded by the beautiful Arkham Asylum" //Better CEO
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
