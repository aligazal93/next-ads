'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const services = [
  {
    id: 1,
    title: 'الواجهات واللافتات',
    description:
      'نصمم وننفذ الواجهات واللافتات الخارجية والداخلية بأعلى جودة، باستخدام أحدث الخامات وتقنيات الإضاءة لإظهار علامتك بشكل احترافي.',
    image: '/images/serv-1.png',
  },
  {
    id: 2,
    title: 'الطباعة والمواد الدعائية',
    description:
      'نحوّل هويتك إلى مطبوعات احترافية، من بطاقات الأعمال والبروشورات إلى المطبوعات والمواد الدعائية بمختلف المقاسات.',
    image: '/images/serv-2.png',
  },
  {
    id: 3,
    title: 'المنتجات الترويجية',
    description:
      'نقدم منتجات ترويجية مخصصة تحمل علامتك التجارية وتترك انطباعاً مميزاً لدى عملائك وتزيد من حضور علامتك.',
    image: '/images/serv-3.png',
  },
  {
    id: 4,
    title: 'تجهيز المعارض',
    description:
      'نصمم وننفذ أجنحة المعارض والمساحات التجارية بشكل متكامل يعكس هوية علامتك ويمنح الزوار تجربة مختلفة.',
    image: '/images/serv-2.png',
  },
  {
    id: 5,
    title: 'الهوية البصرية',
    description:
      'نبني هوية بصرية متكاملة تبدأ من الفكرة والشعار وتمتد لكل نقاط التواصل لتظهر علامتك بصورة قوية ومتناسقة.',
    image: '/images/serv-1.png',
  },
  {
    id: 6,
    title: 'المنتجات الترويجية',
    description:
      'نقدم منتجات ترويجية مخصصة تحمل علامتك التجارية وتترك انطباعاً مميزاً لدى عملائك وتزيد من حضور علامتك.',
    image: '/images/serv-3.png',
  },
  {
    id: 7,
    title: 'تجهيز المعارض',
    description:
      'نصمم وننفذ أجنحة المعارض والمساحات التجارية بشكل متكامل يعكس هوية علامتك ويمنح الزوار تجربة مختلفة.',
    image: '/images/serv-2.png',
  },
  {
    id: 8,
    title: 'الهوية البصرية',
    description:
      'نبني هوية بصرية متكاملة تبدأ من الفكرة والشعار وتمتد لكل نقاط التواصل لتظهر علامتك بصورة قوية ومتناسقة.',
    image: '/images/serv-3.png',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  const [visibleServices, setVisibleServices] = useState(4)

  const handleLoadMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, services.length))

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }

  useGSAP(
    () => {
      const section = sectionRef.current
      const viewport = viewportRef.current
      const track = trackRef.current

      if (!section || !viewport || !track) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const getScrollAmount = () => {
          return Math.max(0, track.scrollWidth - viewport.clientWidth)
        }

        const horizontalTween = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,

            start: 'top top',

            end: () => `+=${getScrollAmount() + window.innerHeight}`,

            pin: true,

            pinSpacing: true,

            scrub: 1,

            anticipatePin: 1,

            invalidateOnRefresh: true,
          },
        })

        const images = gsap.utils.toArray<HTMLElement>('.project-image')

        images.forEach((image) => {
          gsap.fromTo(
            image,
            {
              scale: 1.12,
            },
            {
              scale: 1,

              ease: 'none',

              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${getScrollAmount()}`,

                scrub: 1,
              },
            },
          )
        })

        gsap.fromTo(
          '.projects-heading',
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.8,

            scrollTrigger: {
              trigger: section,

              start: 'top 80%',
              end: 'top 40%',

              scrub: 1,
            },
          },
        )

        ScrollTrigger.refresh()

        return () => {
          horizontalTween.kill()
        }
      })

      mm.add('(max-width: 1023px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card')

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 70,
            },
            {
              opacity: 1,
              y: 0,

              scrollTrigger: {
                trigger: card,

                start: 'top 90%',
                end: 'top 65%',

                scrub: 1,
              },
            },
          )
        })
      })

      return () => {
        mm.revert()
      }
    },
    {
      scope: sectionRef,
    },
  )

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#050505] lg:h-screen lg:overflow-hidden"
    >
      <div className="flex h-full flex-col">
        <div className="text-center mx-auto w-full max-w-[1400px]  px-6 pb-8 pt-20 lg:px-10 lg:pb-6 lg:pt-10">
          <span className="mb-3 mt-[0px] lg:mt-[100px] block text-[20px] mb-4 font-semibold uppercase  text-primary">
            خدماتنا
          </span>

          <h2 className="text-[22px] font-bold leading-[0.95] mb-[30px] lg:mb-[100px] tracking-tight sm:text-5xl lg:text-4xl">
            كل ما تحتاجه علامتك لتظهر كما يجب
          </h2>
        </div>

        {/* ================= VIEWPORT ================= */}

        <div ref={viewportRef} className="relative min-h-0 flex-1 lg:overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-full flex-col gap-8 px-6 pb-24 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:pb-8"
          >
            {services.map((service) => (
              <article
                key={service.id}
                dir="rtl"
                className={`service-card group mb-4 relative h-[380px] w-full shrink-0 snap-start overflow-hidden rounded-[16px] border border-white/[0.12] bg-[#111] sm:w-[360px] lg:h-[355px] lg:w-[335px] xl:h-[390px] xl:w-[365px] ${
                  service.id >= visibleServices ? 'hidden lg:block' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 365px"
                  className="service-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* ================= OVERLAY ================= */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />

                {/* ================= CONTENT ================= */}

                <div className="service-content absolute inset-x-0 bottom-0 z-10 p-5 text-right lg:p-6">
                  {/* Red Line */}

                  <div className="mb-3 h-[2px] w-0 rounded-full bg-primary transition-all duration-500 ease-out group-hover:w-10" />

                  {/* Title */}

                  <h3 className="mb-3 text-[18px] font-bold leading-tight lg:text-[20px]">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-[11px] leading-[1.9] text-white/65 lg:text-[12px]">
                    {service.description}
                  </p>
                </div>

                {/* ================= HOVER BORDER ================= */}

                <div className="pointer-events-none absolute inset-0 rounded-[16px] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-white/20" />

                {/* ================= HOVER LIGHT ================= */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-[60px] transition-all duration-700 group-hover:opacity-100" />
              </article>
            ))}
            {visibleServices < services.length ? (
              <div className="flex w-full justify-center pt-2 lg:hidden">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="group relative flex h-[48px] min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-black/20 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:shadow-[0_10px_30px_rgba(245,17,96,0.25)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">تحميل المزيد</span>
                </button>
              </div>
            ) : (
              <Link
                href="/services"
                className="group relative flex h-[48px] min-w-[160px] items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-black/20 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:shadow-[0_10px_30px_rgba(245,17,96,0.25)] lg:hidden block"
              >
                <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10">عرض جميع الخدمات</span>
              </Link>
            )}
            <div className="hidden shrink-0 w-[300px] items-center justify-center lg:flex">
              <div className="text-center block mx-auto">
                <div className="group relative w-fit mx-auto cursor-pointer">
                  <span className="absolute inset-0 rounded-full bg-red-500/20 blur-xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />

                  <Image
                    className="relative block mx-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:drop-shadow-[0_8px_18px_rgba(239,68,68,0.35)]"
                    src="/images/next-ad-icon.png"
                    width={80}
                    height={14}
                    alt="arrow-right"
                  />
                </div>

                <Link
                  href="/services"
                  className="group relative flex h-[48px] min-w-[160px] items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-black/20 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:shadow-[0_10px_30px_rgba(245,17,96,0.25)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">عرض جميع الخدمات</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
