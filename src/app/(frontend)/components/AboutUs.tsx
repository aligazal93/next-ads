'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (!section) return

    const mm = gsap.matchMedia()

    const context = gsap.context(() => {
      /*
       * Desktop
       */
      mm.add('(min-width: 1024px)', () => {
        gsap.set(imageWrapperRef.current, {
          perspective: 1200,
        })

        gsap.set(imageRef.current, {
          transformOrigin: 'center center',
          force3D: true,
        })

        /*
         * Image 3D Scroll
         */
        gsap.fromTo(
          imageRef.current,
          {
            y: 90,
            x: -30,
            scale: 0.88,
            rotateX: 10,
            rotateY: 16,
          },
          {
            y: 0,
            x: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              end: 'center 38%',
              scrub: 0.3,
              invalidateOnRefresh: true,
            },
          },
        )

        /*
         * Content Reveal
         * يعمل مرة واحدة فقط
         */
        gsap.fromTo(
          [badgeRef.current, titleRef.current, descriptionRef.current, buttonRef.current],
          {
            y: 32,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 78%',
              once: true,
            },
          },
        )
      })

      /*
       * Tablet + Mobile
       */
      mm.add('(max-width: 1023px)', () => {
        gsap.fromTo(
          [badgeRef.current, titleRef.current, descriptionRef.current, buttonRef.current],
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              once: true,
            },
          },
        )

        gsap.fromTo(
          imageRef.current,
          {
            y: 45,
            scale: 0.94,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })

      /*
       * Accessibility
       */
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [
            imageRef.current,
            badgeRef.current,
            titleRef.current,
            descriptionRef.current,
            buttonRef.current,
          ],
          {
            clearProps: 'all',
          },
        )
      })
    }, section)

    return () => {
      mm.revert()
      context.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0  bg-transparent" />

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          dir="ltr"
          className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24"
        >
          {/* =========================
              IMAGE - LEFT
          ========================= */}
          <div
            ref={imageWrapperRef}
            className="relative order-2 flex items-center justify-center lg:order-1"
          >
            <Image
              ref={imageRef}
              src="/images/about.png"
              width={900}
              height={850}
              alt="Next Ad Branding"
              className="h-auto w-full max-w-[560px] transform-gpu object-contain will-change-transform"
            />
          </div>

          {/* =========================
              CONTENT - RIGHT
          ========================= */}
          <div ref={contentRef} dir="rtl" className="order-1 text-right lg:order-2">
            <span
              ref={badgeRef}
              className="mb-5 block text-[14px] font-semibold text-secondary sm:text-[15px]"
            >
              من نحن
            </span>

            <h2
              ref={titleRef}
              className="max-w-[700px] text-[28px] font-bold leading-[1.55] text-white sm:text-[34px] md:text-[40px] lg:text-[38px] xl:text-[40px]"
            >
              نحن لا نصنع الأشياء التي تحمل علامتك فقط، بل نصنع الطريقة التي يراها بها الناس.
            </h2>

            <div
              ref={descriptionRef}
              className="mt-6 max-w-[760px] space-y-5 text-[14px] leading-[2.1] text-white/80 sm:text-[15px] lg:text-[16px]"
            >
              <p>
                في نكست، نؤمن أن الهوية الحقيقية للعلامة التجارية تبدأ عندما تخرج من الشاشة وتصبح
                جزءًا من المكان والحياة اليومية. نحول الأفكار والهويات البصرية إلى واقع ملموس، من
                الواجهات واللافتات المضيئة، إلى الطباعة والمواد الدعائية وتجهيز المساحات الداخلية،
                وصولًا إلى المعارض والفعاليات.
              </p>

              <p>
                نهتم بكل ما يراه العميل ويلامسه: الخامة، اللون، الإضاءة، المقاس، التشطيب والتفاصيل
                الصغيرة التي تصنع في النهاية صورة كبيرة ومتكاملة لعلامتك.
              </p>
            </div>

            <div ref={buttonRef} className="mt-8">
              <Link
                href="/services"
                className="group relative inline-flex h-[50px] min-w-[190px] items-center justify-center overflow-hidden rounded-xl bg-white px-6 text-[14px] font-bold text-black transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:shadow-[0_12px_35px_rgba(245,17,96,0.20)]"
              >
                <span className="absolute inset-0 translate-y-full bg-primary-gradient transition-transform duration-500 ease-out group-hover:translate-y-0" />

                <span className="relative z-10 flex items-center gap-4">
                  تعرف على خدماتنا
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black transition-transform duration-500 group-hover:-translate-x-1 ">
                    <Image
                      src="/images/1.svg"
                      width={11}
                      height={11}
                      alt=""
                      className="h-[11px] w-[11px] scale-125"
                    />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
