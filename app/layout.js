import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SN Silos',
  description: 'Task for Intern',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <hr className='mx-4'/>
        {children}
        
      </body>
    </html>
  )
}
