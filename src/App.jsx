import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import GearGrid from './components/GearGrid'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <GearGrid />
      <Contact />

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} CamKo.raw • Crafted for creators</p>
      </footer>
    </div>
  )
}

export default App
