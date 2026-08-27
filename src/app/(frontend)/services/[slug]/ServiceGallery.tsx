'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import 'yet-another-react-lightbox/styles.css'

type ServiceGalleryProps = {
  images: string[]
  title: string
}

export default function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  if (!images?.length) return null

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
              nextEl: '.service-gallery-next',
              prevEl: '.service-gallery-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            loop={images.length > 1}
            className="service-main-slider"
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
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  {/* Image Number */}
                  <span className="absolute right-5 top-5 flex h-[40px] min-w-[60px] items-center justify-center rounded-full border border-white/15 bg-black/35 px-3 text-[11px] text-white/70 backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                  </span>

                  {/* Zoom Button */}
                  <span className="absolute bottom-5 left-5 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">
                    <FiMaximize2 className="text-[18px]" />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="الصورة السابقة"
                className="service-gallery-prev absolute right-4 top-1/2 z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:right-6 sm:h-[50px] sm:w-[50px]"
              >
                <FiArrowRight className="text-[19px]" />
              </button>

              <button
                type="button"
                aria-label="الصورة التالية"
                className="service-gallery-next absolute left-4 top-1/2 z-20 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:left-6 sm:h-[50px] sm:w-[50px]"
              >
                <FiArrowLeft className="text-[19px]" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
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
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 14,
                },
              }}
              className="service-thumbs-slider"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`${image}-thumb-${index}`}>
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="relative h-[78px] w-full cursor-pointer overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111] opacity-60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:opacity-100 sm:h-[90px] lg:h-[100px]"
                  >
                    <Image
                      src={image}
                      alt={`${title} - ${index + 1}`}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/10" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeIndex}
        slides={images.map((image) => ({
          src: image,
          alt: title,
        }))}
        plugins={[Zoom, Fullscreen]}
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
