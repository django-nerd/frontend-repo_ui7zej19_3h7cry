export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Get in touch</h2>
          <p className="mt-2 text-white/70">Tell us your shoot dates and gear you need. We’ll confirm availability and pricing.</p>
        </div>

        <form className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-transparent px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
            <input type="email" className="rounded-xl border border-white/10 bg-transparent px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Email or phone" />
          </div>
          <input className="rounded-xl border border-white/10 bg-transparent px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="Dates (e.g. 12–14 Jan)" />
          <textarea rows={4} className="rounded-xl border border-white/10 bg-transparent px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20" placeholder="What gear do you need?" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">By sending, you agree to our terms. We’ll reply within a few hours.</p>
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100">Send request</button>
          </div>
        </form>
      </div>
    </section>
  )
}
