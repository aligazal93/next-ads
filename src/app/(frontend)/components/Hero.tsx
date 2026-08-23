'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import HeroSmoke from './HeroSmoke'
import Link from 'next/link'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      timeline
        .fromTo(
          badgeRef.current,
          {
            y: 15,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
          },
        )
        .fromTo(
          titleRef.current,
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
          },
          '-=0.2',
        )
        .fromTo(
          descriptionRef.current,
          {
            y: 15,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
          },
          '-=0.35',
        )
        .set([badgeRef.current, titleRef.current, descriptionRef.current], {
          clearProps: 'transform,opacity,visibility',
        })
    }, section)

    return () => {
      context.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative mt-[80px] flex min-h-[100svh] overflow-hidden ">
      <HeroSmoke />

      <div className="relative z-[99] mx-auto flex  min-h-[100svh] w-full w-full items-center justify-center px-5 py-20 sm:px-8 md:py-24 lg:px-12">
        <div className="flex w-full max-w-[980px] flex-col items-center text-center">
          <div
            ref={badgeRef}
            className="mb-6 rounded-[18px] font-bold border border-[#F51160]/40 bg-black/30 px-8 py-3 text-[18px] text-white sm:text-[16px]"
          >
            نكست للدعاية والإعلان وتجهيز المعارض
          </div>

          <h1
            ref={titleRef}
            className="max-w-[980px] text-[30px] font-bold leading-[1.70] tracking-[-0.03em] sm:text-[42px] md:text-[50px] lg:text-[64px] xl:text-[70px]"
          >
            <span className="block text-primary-gradient">حين تتجاوز العلامة حدود الشاشة،</span>
            <span className="block text-primary-gradient">لتحمل هويتك كما أردتها أن تُرى</span>
          </h1>

          <p
            ref={descriptionRef}
            className="mt-6 max-w-[800px] text-[13px] leading-[2] text-white sm:text-[16px] md:text-[15px] lg:text-[16px]"
          >
            نقدم حلولاً متكاملة للدعاية والإعلان، تشمل تصميم وتنفيذ الواجهات واللافتات، الطباعة
            الدعائية، تجهيز المساحات، المنتجات الترويجية وتجهيز المعارض والفعاليات مع اهتمام
            بالتفاصيل من أول اختيار الخامة وحتى التسليم النهائي.
          </p>

          <div className="relative z-[999999999999] mt-8 flex w-full flex-row items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              className="group relative flex h-[48px] min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white px-5 text-[14px] font-semibold text-black transition-all duration-300 hover:-translate-y-[2px] hover:text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <span className="relative z-10 flex items-center justify-center gap-3">
                اكتشف Next
                <span className="flex h-7 w-7 items-center justify-center rotate-90 transform rounded-lg bg-black text-white transition-all duration-500 group-hover:-translate-x-1 group-hover:rotate-[-45deg]">
                  ↙
                </span>
              </span>
            </button>

            <Link
              href="/projects"
              className="group relative flex h-[48px] min-w-[160px] items-center justify-center overflow-hidden rounded-xl border border-white/35 bg-black/20 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-transparent hover:shadow-[0_10px_30px_rgba(245,17,96,0.25)]"
            >
              <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <span className="relative z-10">مشاريعنا</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[180px] bg-gradient-to-t from-[#030303] to-transparent" />
    </section>
  )
}
