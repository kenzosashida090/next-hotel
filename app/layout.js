import Logo from "@/app/_components/Logo"
import Navigation from ".@/app/_components/Navigation"
export const metadata = {
  title: "The React Next",
}
function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
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
