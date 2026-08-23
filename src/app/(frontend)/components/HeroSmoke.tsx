'use client'

export default function HeroSmoke() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="hero-smoke hero-smoke-left-one" />
      <div className="hero-smoke hero-smoke-left-two" />

      <div className="hero-smoke hero-smoke-right-one" />
      <div className="hero-smoke hero-smoke-right-two" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  )
}
