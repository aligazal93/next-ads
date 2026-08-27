import Image from 'next/image'
import Link from 'next/link'
import { FiPhoneCall } from 'react-icons/fi'

import {
  FaXTwitter,
  FaTiktok,
  FaSnapchat,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'

const exploreLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#projects' },
  { label: 'اتصل بنا', href: '#contact' },
]

const servicesLinks = [
  { label: 'الواجهات واللافتات', href: '#services' },
  { label: 'الطباعة والمواد الدعائية', href: '#services' },
  { label: 'المنتجات الترويجية', href: '#services' },
  { label: 'الهوية والتجهيزات الداخلية', href: '#services' },
  { label: 'تجهيز المعارض والفعاليات', href: '#services' },
]

const socialLinks = [
  {
    id: 1,
    icon: FaXTwitter,
    href: '#',
    label: 'X',
  },
  {
    id: 2,
    icon: FaTiktok,
    href: '#',
    label: 'TikTok',
  },
  {
    id: 3,
    icon: FaSnapchat,
    href: '#',
    label: 'Snapchat',
  },
  {
    id: 4,
    icon: FaWhatsapp,
    href: 'https://wa.me/218926272620',
    label: 'WhatsApp',
  },
  {
    id: 5,
    icon: FaInstagram,
    href: '#',
    label: 'Instagram',
  },
  {
    id: 6,
    icon: FaLinkedinIn,
    href: '#',
    label: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <>
      <footer
        dir="rtl"
        className="relative overflow-hidden border-t border-white/[0.03] bg-[#0d0d0d] text-white"
      >
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-150px] h-[400px] w-[500px] rounded-full bg-primary/[0.025] blur-[140px]" />

          <div className="absolute bottom-[-200px] left-[10%] h-[350px] w-[450px] rounded-full bg-white/[0.015] blur-[130px]" />
        </div>

        {/* ================= MAIN ================= */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-5 pt-14 lg:px-10 lg:pt-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] lg:gap-16">
            {/* ================= BRAND ================= */}

            <div>
              <Link href="/" className="mb-1 inline-block">
                <Image
                  src="/images/next-ad-icon.png"
                  width={95}
                  height={70}
                  alt="Next Ad"
                  className="h-auto w-[85px] object-cover"
                />
              </Link>

              <h3 className="mb-1 max-w-[420px] text-[25px] font-bold leading-[1.5] lg:text-[18px]">
                نبني بنية تحتية تخدم أجيالًا، ونصنع شراكات تدوم عقودًا.
              </h3>

              <p className="max-w-[480px] text-[13px] leading-[2.1] text-white/60 lg:text-[14px]">
                مجموعة هندسية وصناعية متكاملة تقدم حلولًا متقدمة في مجالات المقاولات والتصنيع
                والهندسة، والبنية التحتية، وإدارة المشاريع من خلال منظومة تشغيل متكاملة تدعم تنفيذ
                المشاريع الحكومية والاستثمارية الكبرى في المملكة العربية السعودية.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-[16px] font-bold text-primary">استكشف</h4>

              <ul className="space-y-4">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[14px] text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <span className="absolute -bottom-1 right-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= SERVICES ================= */}

            <div>
              <h4 className="mb-6 text-[16px] font-bold text-primary">خدماتنا</h4>

              <ul className="space-y-4">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[14px] leading-[1.7] text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <span className="absolute -bottom-1 right-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}

            <div>
              <h4 className="mb-6 text-[16px] font-bold text-primary">تواصل معنا</h4>

              <div className="space-y-4 text-[14px] text-white/70">
                <a
                  href="tel:+218926272620"
                  dir="rtl"
                  className="flex justify-start gap-2 transition-colors duration-300 hover:text-white lg:justify-start"
                >
                  <span>الهاتف :</span>

                  <span className="font-semibold tracking-wider">0926272620</span>
                </a>

                <a
                  href="https://wa.me/218926272620"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="rtl"
                  className="flex justify-start gap-2 transition-colors duration-300 hover:text-white lg:justify-start"
                >
                  <span>واتساب :</span>

                  <span className="font-semibold tracking-wider">0926272620</span>
                </a>

                <a
                  href="mailto:info@nextad.com"
                  dir="rtl"
                  className="flex justify-start gap-2 transition-colors duration-300 hover:text-white lg:justify-start"
                >
                  <span>البريد الإلكتروني :</span>

                  <span className="font-semibold">info@nextad.com</span>
                </a>

                <p>المقر: بنغازي، ليبيا.</p>
              </div>
              <div className="mt-12 flex items-center gap-3 ">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-9 w-9 items-center justify-center rounded-[7px] border border-white/[0.08] bg-white/[0.01] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.08] hover:text-primary"
                    >
                      <Icon
                        size={14}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ================= SOCIAL ================= */}

          {/* ================= BOTTOM ================= */}

          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-5 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} Next.</p>

            <p>صنع في بنغازي، ليبيا.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 left-4 z-[999] flex flex-col gap-3 sm:bottom-6 sm:left-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+218926272620"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر واتساب"
          className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.30)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(37,211,102,0.45)] sm:h-[58px] sm:w-[58px]"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/20" />

          <span className="absolute inset-[5px] rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />

          <FaWhatsapp className="relative z-10 text-[26px] sm:text-[30px]" />

          <span className="pointer-events-none absolute left-[66px] whitespace-nowrap rounded-lg border border-white/10 bg-[#111111] px-3 py-2 text-[12px] font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 max-sm:hidden">
            تواصل عبر واتساب
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+218926272620"
          aria-label="اتصل بنا"
          className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 bg-primary-gradient text-white shadow-[0_8px_30px_rgba(239,68,68,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(239,68,68,0.45)] sm:h-[58px] sm:w-[58px]"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-red-500/15" />

          <span className="absolute inset-[5px] rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />

          <FiPhoneCall className="relative z-10 text-[23px] sm:text-[27px]" />

          <span className="pointer-events-none absolute left-[66px] whitespace-nowrap rounded-lg border border-white/10 bg-[#111111] px-3 py-2 text-[12px] font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 max-sm:hidden">
            اتصل بنا الآن
          </span>
        </a>
      </div>
    </>
  )
}
