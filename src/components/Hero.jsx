import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; allow pointer events to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Camera rentals • Phnom Penh • Same‑day delivery
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Capture the moment. We handle the gear.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl">
          Premium cameras, lenses, and lighting—curated for creators. Simple pricing, flexible pickup, and support from real photographers.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#gear" className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-slate-900 shadow hover:bg-slate-100">
            Browse gear
          </a>
          <a href="#how" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white backdrop-blur hover:bg-white/10">
            How it works
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 text-left text-white/80 sm:grid-cols-4">
          <Stat value="500+" label="Successful shoots" />
          <Stat value="40+" label="Pro lenses" />
          <Stat value="24/7" label="Support" />
          <Stat value="<2h" label="Delivery in PP" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  )
}
