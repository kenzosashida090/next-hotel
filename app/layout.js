
import {Josefin_Sans} from "next/font/google"; // import fonts better performance if the fonts actual came from our server not from aniother like google
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
}) // craeting font, returns an object with data of the font
import "@/app/_styles/globals.css"
import Header from "@/app/_components/Header";
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
      <body className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}>
          <Header/>
        <div className="flex-1 px-8 py-12 grid" >
          <main className="max-w-7xl  w-full mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
