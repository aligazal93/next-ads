import React from 'react'
import './styles.css'
import { Header } from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ar">
      <body className="min-h-screen bg-black bg-[url('/images/layer.png')] bg-center bg-cover bg-top bg-no-repeat text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
