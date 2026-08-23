'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ArrowUpLeft, Phone, ScanLine } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function IdeaCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  const whatsappUrl =
    'https://wa.me/218926272620?text=مرحباً%20Next%20Ad،%20أرغب%20في%20الاستفسار%20عن%20خدماتكم'

  useGSAP(
    () => {
      const section = sectionRef.current

      if (!section) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })

      timeline
        .from('.cta-box', {
          opacity: 0,
          y: 70,
          scale: 0.96,
          duration: 1,
          ease: 'power4.out',
        })
        .from(
          '.cta-badge',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.55',
        )
        .from(
          '.cta-title',
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4',
        )
        .from(
          '.cta-content',
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.45',
        )
        .from(
          '.cta-qr',
          {
            opacity: 0,
            scale: 0.8,
            rotate: -8,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.55',
        )
    },
    {
      scope: sectionRef,
    },
  )

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white lg:px-10 lg:py-28"
    >
      <div className="cta-box relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-[#ff174f]/25 bg-[#120509]">
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main glow */}

          <div className="absolute left-1/2 top-[-300px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#ec0050]/30 blur-[150px]" />

          <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff512f]/15 blur-[150px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />

          {/* Bottom fade */}

          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#070707] to-transparent" />
        </div>

        {/* Decorative stars */}

        <span className="absolute left-[7%] top-[25%] hidden text-2xl text-white/15 lg:block">
          +
        </span>

        <span className="absolute left-[18%] top-[50%] hidden text-3xl text-white/10 lg:block">
          +
        </span>

        <span className="absolute right-[8%] top-[28%] hidden text-2xl text-white/15 lg:block">
          +
        </span>

        <span className="absolute right-[17%] top-[58%] hidden text-3xl text-white/10 lg:block">
          +
        </span>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 grid min-h-[520px] items-center gap-12 px-6 py-14 md:px-12 lg:grid-cols-[1fr_320px] lg:px-20 lg:py-16">
          {/* ================= TEXT ================= */}

          <div className="text-center lg:text-right">
            <h2 className="cta-title max-w-[780px] text-[38px] font-black leading-[1.35] tracking-tight sm:text-[50px] lg:text-[58px] xl:text-[64px]">
              حيث تتحول
              <br />
              <span className="bg-gradient-to-l from-[#ff0054] via-[#ff254f] to-[#ff6537] bg-clip-text text-transparent">
                الأفكار إلى هوية.
              </span>
            </h2>

            {/* Description */}

            <div className="cta-content mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.08]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6438] to-[#ef0052]" />

                <span dir="ltr" className="text-[14px] font-medium tracking-[0.18em] text-white/80">
                  Next Step...
                </span>
              </div>

              <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.08]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6438] to-[#ef0052]" />

                <span dir="ltr" className="text-[14px] font-medium tracking-[0.18em] text-white/80">
                  Next Design...
                </span>
              </div>
            </div>
          </div>

          {/* ================= QR ================= */}

          <div className="cta-qr flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Glow */}

              <div className="absolute inset-0 scale-90 rounded-[30px] bg-primary/30 opacity-30 blur-[40px] transition-all duration-500 group-hover:scale-110 group-hover:opacity-60" />

              {/* Card */}

              <div className="relative rounded-[26px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40">
                <div className="rounded-[18px] bg-white p-5">
                  <QRCodeSVG
                    value={whatsappUrl}
                    size={185}
                    bgColor="#ffffff"
                    fgColor="#090909"
                    level="H"
                  />
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <ScanLine size={16} className="text-primary" />

                  <span className="text-[12px] font-medium text-white/60">
                    امسح الكود وابدأ الحديث
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
