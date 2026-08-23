'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

const clients = [
  {
    name: 'Hulu',
    image: '/images/b-1.png',
  },
  {
    name: 'Tembo',
    image: '/images/b-2.png',
  },
  {
    name: 'Pandas',
    image: '/images/b-3.png',
  },
  {
    name: 'Bytecode Alliance',
    image: '/images/b-1.png',
  },
  {
    name: 'Scale',
    image: '/images/b-2.png',
  },
  {
    name: 'Purescript',
    image: '/images/b-2.png',
  },
  {
    name: 'Hulu 2',
    image: '/images/b-1.png',
  },
  {
    name: 'Tembo 2',
    image: '/images/b-2.png',
  },
  {
    name: 'Pandas 2',
    image: '/images/b-3.png',
  },
  {
    name: 'Bytecode Alliance 2',
    image: '/images/b-1.png',
  },
  {
    name: 'Scale 2',
    image: '/images/b-2.png',
  },
  {
    name: 'Purescript 2',
    image: '/images/b-2.png',
  },
]

export const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (!section) return

    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        },
      )

      gsap.fromTo(
        sliderRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 88%',
            once: true,
          },
        },
      )
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-30 lg:py-24">
      <div className="pointer-events-none absolute inset-0 " />
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-12">
        <p
          ref={titleRef}
          className="mb-10 text-center text-[26px] font-medium text-white sm:text-[18px] lg:mb-14"
        >
          نفخر بتنفيذ مشاريع لكبرى الجهات
        </p>

        <div ref={sliderRef} className="relative">
          {/* Gradient Mask Right */}
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[70px] bg-gradient-to-l from-black to-transparent sm:w-[120px]" />

          {/* Gradient Mask Left */}
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-[70px] bg-gradient-to-r from-black to-transparent sm:w-[120px]" />

          <Swiper
            dir="rtl"
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={5000}
            grabCursor
            allowTouchMove
            spaceBetween={30}
            slidesPerView={2.2}
            breakpoints={{
              480: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 3.5,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 45,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="clients-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={`${client.name}-${index}`}>
                <div className="group flex h-[90px] cursor-grab items-center justify-center active:cursor-grabbing">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={170}
                      height={70}
                      className="max-h-[75px] w-[90px] max-w-[185px] object-cover transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.2] group-hover:opacity-100  sm:max-w-[255px] lg:max-w-[255px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
