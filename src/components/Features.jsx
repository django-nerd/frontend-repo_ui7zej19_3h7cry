import { Aperture, Truck, Clock, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Aperture,
    title: 'Curated pro gear',
    desc: 'Mirrorless bodies, fast primes, zooms, mics, and lights selected for real-world shoots.'
  },
  {
    icon: Truck,
    title: 'Flexible pickup & delivery',
    desc: 'Pick up in-store or get same-day delivery within Phnom Penh at transparent rates.'
  },
  {
    icon: Clock,
    title: 'Simple daily pricing',
    desc: 'No hidden fees. Weekend bundles and multi‑day discounts available on request.'
  },
  {
    icon: ShieldCheck,
    title: 'Shoot with confidence',
    desc: 'All items fully tested and cleaned. Optional damage waiver for peace of mind.'
  },
]

export default function Features() {
  return (
    <section id="how" className="relative z-10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Why rent with CamKo.raw</h2>
          <p className="mt-3 text-white/70">Designed for creators who value reliability, service, and spotless optics.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 text-white shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
