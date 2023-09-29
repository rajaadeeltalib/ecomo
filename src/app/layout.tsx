// "use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { store } from '@/redux/store'
import { Provider } from 'react-redux';




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecomo Cosmetics',
  description: 'Find Worlds Best Cosmetics Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
  )
}
