import { Inter } from 'next/font/google'
import '../css/globals.css'
import Navbar from '@/components/navigation/Navbar'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rejdov Kviz',
  description: 'Rejdov Kviz - Created by kojiado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary px-[8vw] min-h-[100vh] h-full`}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
