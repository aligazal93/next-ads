import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { FiArrowLeft, FiCheck, FiMessageCircle } from 'react-icons/fi'

import { services } from '@/data/services'
import ServiceGallery from './ServiceGallery'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params

  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= HERO ================= */}

      <section className="relative min-h-[620px] overflow-hidden border-b border-white/[0.06] lg:min-h-[760px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-black/20" />

        <div className="pointer-events-none absolute -right-[180px] bottom-[-100px] h-[450px] w-[450px] rounded-full bg-primary/15 blur-[150px]" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 sm:px-6 md:pb-20 lg:min-h-[760px] lg:px-10 lg:pb-24">
          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-white/40 sm:text-[13px]">
            <Link href="/" className="transition-colors hover:text-white">
              الرئيسية
            </Link>

            <span>/</span>

            <Link href="/services" className="transition-colors hover:text-white">
              الخدمات
            </Link>

            <span>/</span>

            <span className="text-white/80">{service.title}</span>
          </div>
          <h1 className="max-w-[1000px] text-[40px] font-bold leading-[1.45] sm:text-[50px] md:text-[62px] lg:text-[72px]">
            {service.title}
          </h1>

          <p className="mt-6 max-w-[750px] text-[14px] leading-8 text-white sm:text-[15px] md:text-[16px]">
            {service.shortDescription}
          </p>
        </div>
      </section>
      {/* ================= FEATURES ================= */}

      <section className="border-y border-white/[0.06] bg-[#080808] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="mb-10">
            <span className="mb-3 block text-[20px] text-center font-semibold text-primary">
              ماذا تشمل الخدمة؟
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="group flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-[#0d0d0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
              >
                <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-secondary">
                  <FiCheck />
                </span>

                <div>
                  <strong className="text-[14px] font-semibold text-white/75">{feature}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="mb-12 max-w-[700px]">
            <span className="mb-3 block text-[18px] font-semibold text-primary">كيف نعمل؟</span>

            <h2 className="text-[30px] font-bold leading-[1.55] sm:text-[36px] lg:text-[42px]">
              رحلة واضحة
              <span className="block text-white/35">من البداية وحتى التسليم.</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0c0c0c] p-6 sm:p-7"
              >
                <span className="mb-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[12px] font-medium text-white/50 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mb-4 text-[20px] font-bold">{step.title}</h3>

                <p className="text-[13px] leading-7 text-white/40">{step.description}</p>

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-[170px] w-[170px] rounded-full bg-primary/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block text-[18px] font-semibold text-primary">معرض الخدمة</span>

              <h2 className="text-[30px] font-bold leading-[1.5] sm:text-[36px] lg:text-[42px]">
                شاهد تفاصيل {''}
                <span className=" text-white/35">أعمالنا عن قرب.</span>
              </h2>
            </div>
          </div>

          <ServiceGallery images={service.gallery || []} title={service.title} />
        </div>
      </section>
    </main>
  )
}
