import Image from 'next/image'
import Link from 'next/link'

import { FiArrowLeft } from 'react-icons/fi'

import { services } from '@/data/services'

export default function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= SERVICES ================= */}

      <section className="py-16 sm:py-20 lg:py-34">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-center gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block text-[13px] font-semibold text-primary">ماذا نقدم؟</span>

              <h2 className="text-[29px] font-bold leading-[1.5] sm:text-[34px] lg:text-[40px]">
                خدمات تساعدك على النمو
              </h2>
            </div>
          </div>

          {/* Grid */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                {/* Image */}

                <Link
                  href={`/services/${service.slug}`}
                  className="relative block h-[280px] overflow-hidden sm:h-[310px]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-transparent" />
                </Link>

                {/* Content */}

                <div className="relative p-6 sm:p-7">
                  <Link
                    href={`/services/${service.slug}`}
                    className="mb-4 text-[22px] font-bold leading-[1.5] transition-colors duration-300 group-hover:text-primary sm:text-[24px]"
                  >
                    {service.title}
                  </Link>

                  <p className="mb-7 line-clamp-3 text-[13px] leading-7 text-white/45 sm:text-[14px]">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group/link flex w-fit items-center gap-3 text-[13px] font-semibold text-white transition-colors duration-300 hover:text-primary"
                  >
                    <span>اكتشف الخدمة</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
