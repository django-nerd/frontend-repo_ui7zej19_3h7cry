import { Menu, Camera, Phone, Info, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Gear', href: '#gear' },
    { label: 'How it works', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg">
                <Camera size={20} />
              </div>
              <span className="text-lg font-semibold tracking-tight">CamKo.raw</span>
            </a>

            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white/90 hover:text-white hover:bg-white/5 transition-colors">
                <Phone size={16} /> Contact
              </a>
              <a href="#gear" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100 transition-colors">
                <ShoppingCart size={16} /> Book now
              </a>
            </div>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              <Menu />
            </button>
          </div>

          {open && (
            <div className="space-y-2 border-t border-white/10 p-4 text-white/80 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="#contact" className="flex-1 rounded-xl border border-white/10 px-4 py-2 text-center text-white/90 hover:text-white hover:bg-white/5">Contact</a>
                <a href="#gear" className="flex-1 rounded-xl bg-white px-4 py-2 text-center font-semibold text-slate-900 hover:bg-slate-100">Book now</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
