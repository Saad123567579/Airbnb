import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ['latin'] })
export const metadata = {
  title: 'Airbnb',
  description: 'Hotel Booking App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}

      </body>
    </html>
  )
}

