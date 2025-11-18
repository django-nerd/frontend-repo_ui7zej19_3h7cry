import { Camera, Video, Lightbulb, Mic } from 'lucide-react'

const gear = [
  {
    tag: 'Camera',
    title: 'Sony A7 IV',
    price: '$45/day',
    badge: 'Best for hybrid',
    icon: Camera,
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop',
  },
  {
    tag: 'Lens',
    title: 'Sigma 24-70mm f/2.8',
    price: '$20/day',
    icon: Camera,
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1800&auto=format&fit=crop',
  },
  {
    tag: 'Audio',
    title: 'RØDE Wireless GO II',
    price: '$12/day',
    icon: Mic,
    img: 'https://images.unsplash.com/photo-1612535495924-1f85d7d85b18?q=80&w=1800&auto=format&fit=crop',
  },
  {
    tag: 'Light',
    title: 'Aputure 120d II',
    price: '$25/day',
    icon: Lightbulb,
    img: 'https://images.unsplash.com/photo-1579546928931-9910e1313b1f?q=80&w=1800&auto=format&fit=crop',
  },
]

export default function GearGrid() {
  return (
    <section id="gear" className="relative z-10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured gear</h2>
            <p className="mt-2 text-white/70">Hand‑picked favorites. Ask us for full catalog and availability.</p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/10 md:block">Request full list</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gear.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {item.badge && (
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-900">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-4 text-white">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <item.icon size={14} />
                  {item.tag}
                </div>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/90">{item.price}</span>
                  <button className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
                    Check dates
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
