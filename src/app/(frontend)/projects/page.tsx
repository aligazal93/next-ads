import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    slug: 'almaghrabi-iphone',
    category: 'الواجهات واللافتات',
    title: 'المغيربي iPhone',
    description:
      'تنفيذ واجهة إعلانية متكاملة تجمع بين قوة الهوية البصرية وجودة التنفيذ والتفاصيل الدقيقة.',
    image: '/images/project-1.png',
  },
  {
    id: 2,
    slug: 'damascus-pastries',
    category: 'الطباعة والمواد الدعائية',
    title: 'معجنات دمشقية',
    description:
      'مشروع متكامل يعكس هوية العلامة التجارية من خلال تصميم بصري جذاب ومتناسق مع طبيعة النشاط.',
    image: '/images/project-2.png',
  },
  {
    id: 3,
    slug: 'visual-identity',
    category: 'الهوية البصرية',
    title: 'هوية تجارية',
    description:
      'تصميم هوية بصرية حديثة ومميزة تساعد العلامة التجارية على الظهور بشكل قوي واحترافي.',
    image: '/images/project-2.png',
  },
  {
    id: 4,
    slug: 'creative-project',
    category: 'التصميم والإبداع',
    title: 'مشروع متكامل',
    description:
      'حلول إبداعية متكاملة بداية من الفكرة وحتى التنفيذ النهائي مع الاهتمام بأدق التفاصيل.',
    image: '/images/project-1.png',
  },
  {
    id: 5,
    slug: 'advertising-campaign',
    category: 'الحملات الإعلانية',
    title: 'حملة إعلانية',
    description:
      'حملة إعلانية مصممة لتحقيق انتشار أقوى للعلامة التجارية والوصول إلى الجمهور المستهدف.',
    image: '/images/project-1.png',
  },
  {
    id: 6,
    slug: 'branding-project',
    category: 'العلامات التجارية',
    title: 'بناء علامة تجارية',
    description:
      'تطوير متكامل للعلامة التجارية من الفكرة وحتى الهوية النهائية وتجربة الظهور أمام العملاء.',
    image: '/images/project-2.png',
  },
  {
    id: 7,
    slug: 'outdoor-advertising',
    category: 'الإعلانات الخارجية',
    title: 'إعلانات خارجية',
    description: 'تصميم وتنفيذ إعلانات خارجية تضمن وضوح الرسالة وقوة الحضور في الأماكن المستهدفة.',
    image: '/images/project-1.png',
  },
  {
    id: 8,
    slug: 'printing-project',
    category: 'الطباعة',
    title: 'مطبوعات احترافية',
    description:
      'تنفيذ مطبوعات تسويقية بجودة عالية وتصميمات متوافقة مع الهوية البصرية للعلامة التجارية.',
    image: '/images/project-2.png',
  },
  {
    id: 9,
    slug: 'digital-campaign',
    category: 'التسويق الرقمي',
    title: 'حملة رقمية',
    description:
      'حملة رقمية تجمع بين التصميم الإبداعي والمحتوى التسويقي لتحقيق أفضل ظهور للعلامة التجارية.',
    image: '/images/project-1.png',
  },
]

export default function ProjectsPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= HERO ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">
          {/* Section Header */}
          <div className="my-10 text-center gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.5] sm:text-[32px] lg:text-[38px]">
                استكشف أحدث مشاريعنا
              </h2>
            </div>

            <p className="max-w-[470px] mx-auto text-center text-[13px] leading-7 text-white/40 sm:text-[14px]">
              كل مشروع بالنسبة لنا هو فرصة لصناعة تجربة مختلفة تضيف قيمة حقيقية للعلامة التجارية.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block h-[300px] overflow-hidden sm:h-[330px] lg:h-[340px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </Link>

                {/* Content */}
                <div className="relative p-6 sm:p-7">
                  <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#ef4444]/20 bg-[#ef4444]/10 px-3.5 py-1.5 text-[11px] font-medium text-[#ef4949]">
                    {project.category}
                  </span>

                  <h3 className="mb-4 text-[22px] font-bold leading-[1.5] transition-colors duration-300 group-hover:text-primary sm:text-[24px]">
                    {project.title}
                  </h3>

                  <p className="mb-7 line-clamp-2 text-[13px] leading-7 text-white/45 sm:text-[14px]">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link flex w-fit items-center gap-3 text-[13px] font-semibold text-white transition-colors duration-300 hover:text-primary"
                  >
                    <span>عرض تفاصيل المشروع</span>
                  </Link>
                </div>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-24 right-1/2 h-[130px] w-[70%] translate-x-1/2 rounded-full bg-primary/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
