import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Hero from './components/Hero'
import { AboutSection } from './components/AboutUs'
import { ClientsSection } from './components/Clients'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/ContactUs'
import FeaturedSection from './components/FeaturedSection'
import IdeaCTA from './components/Idea'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <>
      <Hero />
      <AboutSection />
      <ClientsSection />
      <Projects />
      <Services />
      <Contact />
      <FeaturedSection />
      <IdeaCTA />
    </>
  )
}
