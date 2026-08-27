import React from 'react'
import './styles.css'
import { Header } from './components/Header'
import Footer from './components/Footer'
import IdeaCTA from './components/Idea'

export const metadata = {
  title: 'Next Ads',
  description: 'Next Ads',
  icons: {
    icon: '/icon.png',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ar">
      <body className="min-h-screen bg-black bg-[url('/images/layer.png')] bg-center bg-contain bg-top bg-no-repeat text-white">
        <Header />
        <main>{children}</main>
        <IdeaCTA />
        <Footer />
      </body>
    </html>
  )
}
