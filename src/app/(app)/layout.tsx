import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={inter.className}>

      <body>{children}</body>
    </html>
  )
}

export default Layout
