'use client'

import Image from 'next/image'
import { useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const projects = [
  {
    id: 1,
    category: 'الواجهات واللافتات',
    title: 'المغيربي iPhone',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    image: '/images/project-1.png',
  },
  {
    id: 2,
    category: 'الطباعة والمواد الدعائية',
    title: 'معجنات دمشقية',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    image: '/images/project-2.png',
  },
  {
    id: 3,
    category: 'الهوية البصرية',
    title: 'هوية تجارية',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    image: '/images/project-2.png',
  },
  {
    id: 4,
    category: 'التصميم والإبداع',
    title: 'مشروع متكامل',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    image: '/images/project-1.png',
  },
  {
    id: 5,
    category: 'الحملات الإعلانية',
    title: 'حملة إعلانية',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    image: '/images/project-1.png',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="relative bg-[#050505] lg:h-screen lg:overflow-hidden">
      <div className="flex h-full flex-col">
        <div className="text-right mx-auto w-full max-w-[1400px]  px-6 pb-8 pt-20 lg:px-10 lg:pb-6 lg:pt-10">
          <span className="mb-3 mt-[30px] lg:mt-[100px] block text-[20px] mb-4 font-semibold uppercase  text-primary">
            المشاريع
          </span>

          <h2 className="text-4xl font-bold leading-[0.95] mb-[30px] lg:mb-[100px] tracking-tight sm:text-5xl lg:text-4xl">
            أفكار خرجت من الشاشة إلى الواقع
          </h2>
        </div>

        <div ref={viewportRef} className="relative min-h-0 flex-1 lg:overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-full flex-col gap-8 px-6 pb-24 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:pb-8"
          >
            {projects.map((project) => (
              <article
                key={project.id}
                dir="rtl"
                className="project-card group w-full shrink-0 overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#111111] lg:w-[58vw] xl:w-[50vw] 2xl:w-[46vw]"
              >
                <div className="grid min-h-[370px] grid-cols-1 md:grid-cols-2">
                  {/* ================= CONTENT ================= */}

                  <div className="order-2 flex flex-col justify-center px-7 py-10 text-right md:order-1 md:px-9 lg:px-8 xl:px-10">
                    {/* Category */}

                    <span className="mb-5 w-fit rounded-full border border-[#e63c3c]/25 bg-[#e63c3c]/10 px-4 py-[7px] text-xs font-medium text-[#ef4949]">
                      {project.category}
                    </span>

                    {/* Title */}

                    <h3 className="mb-5 text-[24px] font-bold leading-tight lg:text-[27px]">
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p className="mb-7 max-w-[420px] text-[13px] leading-7 text-white/50 lg:text-sm">
                      {project.description}
                    </p>

                    {/* Button */}

                    <button
                      type="button"
                      className="group/button cursor-pointer flex w-fit items-center gap-2 text-sm font-semibold text-[#ef4444]"
                    >
                      عرض التفاصيل
                      <span className="transition-transform duration-300 group-hover/button:-translate-x-1">
                        ←
                      </span>
                    </button>
                  </div>

                  {/* ================= IMAGE ================= */}

                  <div className="relative order-1 min-h-[280px] overflow-hidden md:order-2 md:min-h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />

                    {/* Overlay */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-black/20" />
                  </div>
                </div>
              </article>
            ))}

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
                  href="/projects"
                  className="group relative flex h-[48px] min-w-[160px] items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-black/20 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:shadow-[0_10px_30px_rgba(245,17,96,0.25)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="relative z-10">عرض جميع المشاريع</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
