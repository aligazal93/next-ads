'use client'

import { FormEvent, useRef, useState } from 'react'
import { ArrowUpLeft } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useGSAP(
    () => {
      const section = sectionRef.current

      if (!section) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      })

      timeline
        .from('.contact-badge', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        })
        .from(
          '.contact-title',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.35',
        )
        .from(
          '.contact-field',
          {
            opacity: 0,
            y: 25,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4',
        )
        .from(
          '.contact-button',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.25',
        )
    },
    {
      scope: sectionRef,
    },
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsSubmitting(true)

      const formData = new FormData(event.currentTarget)

      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      }

      // حط الـ API هنا
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })

      console.log(data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      dir="rtl"
      className="relative flex min-h-screen items-center mt-[100px] overflow-hidden bg-[#050505] px-5 py-20 text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[400px] w-[750px] -translate-x-1/2 rounded-full bg-[#b24b24]/10 blur-[130px]" />
        <div className="absolute bottom-[-30%] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-black blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[760px]">
        <div className="mb-12 text-center">
          <span className="contact-badge mb-5 block text-[15px] font-semibold text-primary lg:text-[17px]">
            تواصل معنا
          </span>

          <h2 className="contact-title text-[28px] font-bold leading-[1.45] sm:text-[32px] lg:text-[40px]">
            عندك مشروع في بالك؟ خلّينا نبدأ من التفاصيل.
          </h2>
        </div>

        {/* ================= FORM ================= */}

        <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[650px] flex-col gap-4">
          {/* Name */}

          <div className="contact-field">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              required
              className="h-[52px] w-full rounded-[11px] border border-white/[0.15] bg-black/70 px-5 text-right text-[14px] text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-primary/70 focus:bg-black focus:shadow-[0_0_0_3px_rgba(239,68,68,0.06)]"
            />
          </div>

          <div className="contact-field">
            <input
              type="text"
              name="company"
              placeholder="اسم الشركة / المشروع"
              className="h-[52px] w-full rounded-[11px] border border-white/[0.15] bg-black/70 px-5 text-right text-[14px] text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-primary/70 focus:bg-black focus:shadow-[0_0_0_3px_rgba(239,68,68,0.06)]"
            />
          </div>

          {/* Phone */}

          <div className="contact-field">
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              required
              inputMode="tel"
              className="h-[52px] w-full rounded-[11px] border border-white/[0.15] bg-black/70 px-5 text-right text-[14px] text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-primary/70 focus:bg-black focus:shadow-[0_0_0_3px_rgba(239,68,68,0.06)]"
            />
          </div>

          {/* Message */}

          <div className="contact-field">
            <textarea
              name="message"
              placeholder="اخبرنا عن مشروعك"
              required
              rows={5}
              className="min-h-[120px] w-full resize-none rounded-[11px] border border-white/[0.15] bg-black/70 px-5 py-4 text-right text-[14px] leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-primary/70 focus:bg-black focus:shadow-[0_0_0_3px_rgba(239,68,68,0.06)]"
            />
          </div>

          {/* ================= BUTTON ================= */}

          <div className="contact-button mt-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-stretch overflow-hidden rounded-[12px] bg-white text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,255,255,0.12)] disabled:pointer-events-none disabled:opacity-60"
            >
              <span className="flex items-center px-6 py-4 text-[14px] font-bold">
                {isSubmitting ? 'جاري الإرسال...' : 'أرسل تفاصيل المشروع'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
