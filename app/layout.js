import { Inter } from 'next/font/google'
import '../css/globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rejdov Kviz',
  description: 'Rejdov Kviz - Created by kojiado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey1 px-[8vw] min-h-[100vh] h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
