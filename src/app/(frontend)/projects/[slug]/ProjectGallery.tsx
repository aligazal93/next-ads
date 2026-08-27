'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'

import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'yet-another-react-lightbox/styles.css'

type Props = {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="relative">
        {/* Main Slider */}
        <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0c0c0c] sm:rounded-[30px]">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            className="project-main-slider"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="relative block h-[330px] w-full cursor-zoom-in overflow-hidden sm:h-[430px] md:h-[520px] lg:h-[620px]"
                >
                  <Image
                    src={image}
                    alt={`${title} - ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button
            type="button"
            className="gallery-prev absolute right-4 top-1/2 z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:right-6 sm:h-[50px] sm:w-[50px]"
            aria-label="الصورة السابقة"
          >
            <FiArrowRight className="text-[19px]" />
          </button>

          <button
            type="button"
            className="gallery-next absolute left-4 top-1/2 z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:left-6 sm:h-[50px] sm:w-[50px]"
            aria-label="الصورة التالية"
          >
            <FiArrowLeft className="text-[19px]" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Thumbs]}
            freeMode
            watchSlidesProgress
            spaceBetween={10}
            slidesPerView={3.3}
            breakpoints={{
              640: {
                slidesPerView: 4.5,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="project-thumbs-slider"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-thumb-${index}`}>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="relative h-[78px] w-full overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111] opacity-60 transition-all duration-300 hover:opacity-100 sm:h-[90px] lg:h-[100px]"
                >
                  <Image
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeIndex}
        plugins={[Zoom, Fullscreen]}
        slides={images.map((image) => ({
          src: image,
          alt: title,
        }))}
        carousel={{
          finite: false,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        zoom={{
          maxZoomPixelRatio: 4,
          scrollToZoom: true,
        }}
      />
    </>
  )
}
