'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'عن نكست', href: '#about' },
  { label: 'المشاريع', href: '#projects' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'تواصل معنا', href: '#contact' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      dir="rtl"
      className="fixed top-0 left-0 z-[9999999999] w-full bg-[url('/images/layer.png')] backdrop-blur-[50px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/layer.png')] bg-cover bg-center bg-no-repeat opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-[90px] items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center justify-start lg:justify-self-start">
            <Link href="/" aria-label="Next Ad" className="flex items-center">
              <Image
                src="/images/next-ad-icon.png"
                width={120}
                height={70}
                className="h-[58px] w-auto object-contain sm:h-[65px] lg:h-[70px] scale-180"
                priority
                alt="Next Ad"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-center gap-8 xl:gap-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="relative block whitespace-nowrap text-[16px] font-medium text-white transition-all duration-300 hover:text-primary-gradient"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-end lg:flex lg:justify-self-end">
            <Link
              href="#contact"
              className="group relative flex h-[50px] min-w-[170px] items-center justify-center overflow-hidden rounded-[12px] bg-primary-gradient px-6 text-[15px] font-bold text-white shadow-[0_8px_30px_rgba(245,17,96,0.20)] transition-all duration-500 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(245,17,96,0.35)]"
            >
              <span className="absolute -left-[70%] top-0 h-full w-[50%] -skew-x-[25deg] bg-white/25 blur-[2px] transition-all duration-700 ease-out group-hover:left-[130%]" />

              <span className="relative z-10 flex items-center gap-4">
                ابدأ مشروعك
                <Image
                  src="/images/1.svg"
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px]"
                  alt=""
                />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="فتح القائمة"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative cursor-pointer z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[0.04] lg:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? 'scale-x-0 opacity-0' : ''
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[90px] right-0 left-0 z-[9999999999] overflow-hidden border-t border-white/10 bg-[#050505]/98 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          isOpen
            ? 'max-h-[600px] translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-3 opacity-0'
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((item, index) => (
              <li key={item.label} className="border-b border-white/[0.06] last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 text-[16px] font-medium text-white transition-all duration-300 hover:text-[#FC8948] ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 60}ms` : '0ms',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="group relative mt-6 flex h-[52px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-primary-gradient text-[15px] font-bold text-white"
          >
            <span className="absolute -left-[70%] top-0 h-full w-[45%] -skew-x-[25deg] bg-white/25 transition-all duration-700 group-hover:left-[130%]" />

            <span className="relative z-10 flex items-center gap-4">
              ابدأ مشروعك
              <Image src="/images/1.svg" width={12} height={12} alt="" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
