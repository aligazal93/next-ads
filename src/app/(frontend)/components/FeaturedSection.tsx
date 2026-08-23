'use client'

import Image from 'next/image'
import { useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const floatingImages = [
  {
    id: 1,
    image: '/images/pic-1.png',
    alt: 'تصميم داخلي',
    className: 'left-[6%] top-[14%] h-[190px] w-[190px] lg:h-[200px] lg:w-[200px]',
    clipPath: 'polygon(35% 0%, 100% 0%, 100% 76%, 76% 100%, 0% 100%, 0% 35%)',
    movement: -45,
  },
  {
    id: 2,
    image: '/images/pic-2.png',
    alt: 'تصميم معرض',
    className: 'right-[7%] top-[20%] h-[155px] w-[155px] lg:h-[160px] lg:w-[160px]',
    clipPath: 'polygon(30% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 30%)',
    movement: 35,
  },
  {
    id: 3,
    image: '/images/pic-3.png',
    alt: 'هوية بصرية',
    className: 'left-[18%] bottom-[14%] h-[155px] w-[155px] lg:h-[160px] lg:w-[160px]',
    clipPath: 'polygon(30% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 30%)',
    movement: 40,
  },
  {
    id: 4,
    image: '/images/pic-4.png',
    alt: 'منتجات ترويجية',
    className: 'right-[12%] bottom-[12%] h-[185px] w-[185px] lg:h-[195px] lg:w-[195px]',
    clipPath: 'polygon(28% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 28%)',
    movement: -40,
  },
]

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current

      if (!section) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        })

        timeline
          .from('.featured-badge', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
          })
          .from(
            '.featured-title',
            {
              opacity: 0,
              y: 45,
              duration: 0.9,
              ease: 'power3.out',
            },
            '-=0.3',
          )
          .from(
            '.featured-description',
            {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.5',
          )
          .from(
            '.featured-image',
            {
              opacity: 0,
              scale: 0.8,
              duration: 1,
              stagger: 0.12,
              ease: 'power3.out',
            },
            '-=0.7',
          )

        const images = gsap.utils.toArray<HTMLElement>('.featured-image')

        images.forEach((image, index) => {
          const movement = floatingImages[index]?.movement ?? 30

          gsap.to(image, {
            y: movement,
            ease: 'none',

            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('.featured-content', {
          opacity: 0,
          y: 40,

          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
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
      dir="rtl"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 py-24 text-white lg:h-screen lg:min-h-[800px] lg:py-0"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#36100c]/10 blur-[180px]" />
      </div>

      {/* ================= FLOATING IMAGES ================= */}

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingImages.map((item) => (
          <div key={item.id} className={`featured-image absolute ${item.className}`}>
            <div
              className="absolute inset-0 bg-white/20"
              style={{
                clipPath: item.clipPath,
              }}
            />

            <div
              className="absolute inset-[1px] overflow-hidden bg-[#111]"
              style={{
                clipPath: item.clipPath,
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="220px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="featured-content relative z-10 mx-auto w-full max-w-[850px] text-center">
        {/* Badge */}

        <div className="featured-badge mb-7 flex justify-center">
          <span className="rounded-full border border-primary/40 bg-primary/[0.05] px-6 py-2 text-[13px] font-medium text-white/80">
            التفاصيل تصنع الفرق
          </span>
        </div>

        {/* Title */}

        <h2 className="featured-title mx-auto max-w-[820px] text-[35px] font-black leading-[1.4] tracking-tight sm:text-[45px] lg:text-[52px] xl:text-[58px]">
          ما يميّز العمل الجيد ليس ما تراه من
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-l from-[#ff1f5b] via-[#ff3e57] to-[#ff7a3d] bg-clip-text text-transparent">
            {' '}
            بعيد، بل ما تكتشفه عندما تقترب.
          </span>
        </h2>

        {/* Description */}

        <p className="featured-description mb-[70px] mx-auto mt-8 max-w-[720px] text-[13px] leading-[2.1] text-white/50 sm:text-[14px] lg:text-[15px]">
          نختار الخامات والتقنيات وفق طبيعة كل مشروع، ونهتم بالتفاصيل التي قد تبدو صغيرة، لكنها تصنع
          الفارق في النتيجة النهائية. من دقة الطباعة ووضوح الألوان إلى جودة الحروف، تجانس الإضاءة،
          متانة التثبيت ودقة التشطيب — كل عنصر له دوره في أن يظهر التنفيذ بالصورة التي تستحقها
          علامتك.
        </p>
      </div>

      {/* ================= MOBILE IMAGES ================= */}

      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3 px-5 lg:hidden">
        {floatingImages.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="relative h-[75px] w-[75px] overflow-hidden border border-white/15 sm:h-[90px] sm:w-[90px]"
            style={{
              clipPath: item.clipPath,
            }}
          >
            <Image src={item.image} alt={item.alt} fill sizes="90px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
