import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-sky-500/5 border-b border-sky-100'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#inicio')}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/30">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                Nova
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-sky-500' : 'text-sky-300'}`}>
                Clínica
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-sky-50 hover:text-sky-600 ${
                  scrolled ? 'text-slate-600' : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contacto')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${scrolled ? 'bg-sky-50 text-sky-600 hover:bg-sky-100' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Llamar ahora
            </button>
            <button
              onClick={() => scrollTo('#cita')}
              className="px-4 py-2 rounded-xl text-sm bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium shadow-lg shadow-sky-500/30 hover:brightness-105 transition-all"
            >
              Pedir Cita
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-slate-600 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 pb-2 flex gap-3">
                <button
                  onClick={() => scrollTo('#contacto')}
                  className="flex-1 py-2.5 rounded-xl bg-sky-50 text-sky-600 text-sm font-semibold hover:bg-sky-100 transition-colors"
                >
                  Llamar
                </button>
                <button
                  onClick={() => scrollTo('#cita')}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold"
                >
                  Pedir Cita
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
