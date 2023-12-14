import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import TopBar from './components/home/TopBar'
import MegaMenu from './components/shared/MegaMenu'
import NextTopLoader from 'nextjs-toploader'
import MobileMenu from './components/shared/MobileMenu'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Skill Darpan',
  description: 'Learn, Skill, Success ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader
        color="#F09D25"
        />
        <TopBar />
      <MegaMenu />
      <MobileMenu />

        {children}
      <Footer />
        </body>
    </html>
  )
}
