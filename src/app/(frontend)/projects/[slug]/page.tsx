import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { FiArrowLeft, FiCheck, FiExternalLink } from 'react-icons/fi'

import ProjectGallery from './ProjectGallery'

const projects = [
  {
    id: 1,
    slug: 'almaghrabi-iphone',
    category: 'الواجهات واللافتات',
    title: 'المغيربي iPhone',
    shortDescription:
      'مشروع متكامل لتصميم وتنفيذ واجهة إعلانية حديثة تعكس قوة العلامة التجارية وتجذب الانتباه من اللحظة الأولى.',
    description:
      'عملنا على المشروع بداية من دراسة هوية العلامة التجارية وطبيعة الموقع وحتى تطوير تصور بصري متكامل للواجهة. الهدف كان الوصول إلى نتيجة تجمع بين البساطة، قوة الحضور، جودة التنفيذ، والوضوح البصري.',
    cover: '/images/project-1.png',
    client: 'المغيربي',
    year: '2026',
    location: 'المملكة العربية السعودية',
    service: 'تصميم وتنفيذ واجهات',
    duration: '14 يوم',
    gallery: [
      '/images/project-1.png',
      '/images/project-2.png',
      '/images/project-1.png',
      '/images/project-2.png',
      '/images/project-1.png',
      '/images/project-2.png',
    ],
  },
  {
    id: 2,
    slug: 'damascus-pastries',
    category: 'الطباعة والمواد الدعائية',
    title: 'معجنات دمشقية',
    shortDescription:
      'تطوير تجربة بصرية متكاملة تعكس روح العلامة التجارية وتقدمها للجمهور بصورة أكثر احترافية.',
    description:
      'تم تطوير المشروع بهدف بناء حضور بصري متجانس وقوي، من خلال دمج عناصر الهوية بطريقة تخدم تجربة العميل وتبرز طبيعة النشاط.',
    cover: '/images/project-2.png',
    client: 'معجنات دمشقية',
    year: '2026',
    location: 'المملكة العربية السعودية',
    service: 'مواد دعائية وطباعة',
    duration: '10 أيام',
    challenge:
      'توحيد الشكل البصري للعلامة التجارية مع مجموعة متنوعة من المطبوعات والمواد الدعائية.',
    solution: 'تم تطوير نظام بصري مرن يضمن ثبات الهوية على جميع المقاسات والاستخدامات المختلفة.',
    features: [
      'دراسة الهوية',
      'تصميم المواد الدعائية',
      'تجهيز ملفات الطباعة',
      'اختيار الخامات',
      'تنفيذ بجودة عالية',
      'متابعة حتى التسليم',
    ],
    gallery: [
      '/images/project-2.png',
      '/images/project-1.png',
      '/images/project-2.png',
      '/images/project-1.png',
    ],
  },
]

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[620px] overflow-hidden border-b border-white/[0.06] lg:min-h-screen">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-black/30" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[150px]" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 sm:px-6 md:pb-20 lg:min-h-screen lg:px-10 lg:pb-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-white/40 sm:text-[13px]">
            <Link href="/" className="transition-colors hover:text-white">
              الرئيسية
            </Link>

            <span>/</span>

            <Link href="/projects" className="transition-colors hover:text-white">
              المشاريع
            </Link>

            <span>/</span>

            <span className="text-white/80">{project.title}</span>
          </div>

          <span className="mb-5 w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[12px] font-medium text-primary backdrop-blur-md">
            {project.category}
          </span>

          <h1 className="max-w-[950px] text-[38px] font-bold leading-[1.45] sm:text-[48px] md:text-[60px] lg:text-[72px]">
            {project.title}
          </h1>

          <p className="mt-6 max-w-[720px] text-[14px] leading-8 text-white/60 sm:text-[15px] md:text-[16px]">
            {project.shortDescription}
          </p>
        </div>
      </section>
      {/* ================= GALLERY ================= */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="mb-10  gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 block text-[22px] font-semibold text-primary">
                معرض المشروع
              </span>
            </div>

            <p className="max-w-[500px] text-[18px] leading-7 text-white sm:text-[14px]">
              استعرض تفاصيل المشروع بصورة أقرب، واضغط على أي صورة لفتحها بالحجم الكامل.
            </p>
          </div>

          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      </section>

      {/* ================= PROJECT INFO ================= */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0c0c0c]">
            <div className="border-b border-white/[0.06] p-7">
              <span className="mb-3 block text-[11px] text-white/35">الموقع</span>

              <strong className="text-[15px] font-semibold">{project.location}</strong>
            </div>

            <div className="border-b border-white/[0.06] p-7">
              <span className="mb-3 block text-[11px] text-white/35">مدة التنفيذ</span>

              <strong className="text-[15px] font-semibold">{project.duration}</strong>
            </div>

            <div className="p-7">
              <span className="mb-3 block text-[11px] text-white/35">نوع الخدمة</span>

              <strong className="text-[15px] font-semibold">{project.service}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
