import { motion } from 'framer-motion'
import { ChevronDown, Shield, Clock, Star } from 'lucide-react'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #0ea5e9, transparent 70%)',
            top: '-10%',
            right: '-5%',
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
            bottom: '10%',
            left: '-5%',
          }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] opacity-10"
          style={{
            background: 'radial-gradient(circle, #38bdf8, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-sky-400/40"
            style={{
              left: `${10 + (i * 7.5) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-400/30 text-sky-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Clínica en Ibi, Alicante · Abierto hoy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Tu salud,{' '}
              <span className="gradient-text">nuestra</span>{' '}
              <br />prioridad
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              Atención médica personalizada y de calidad en Ibi. Contamos con los mejores especialistas
              para cuidar de ti y tu familia con tecnología avanzada y trato humano.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo('#cita')}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60 hover:brightness-105 transition-all text-base"
              >
                Pedir Cita Online
              </button>
              <button
                onClick={() => scrollTo('#servicios')}
                className="px-8 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium transition-all text-base"
              >
                Ver Servicios
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: 'Acreditados' },
                { icon: Clock, text: 'Cita en 24h' },
                { icon: Star, text: '4.9/5 valoración' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — animated card stack */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-20 glass rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Medicina General</p>
                    <p className="text-sky-300 text-sm">Consulta disponible</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {['Pediatría', 'Traumatología', 'Dermatología', 'Cardiología'].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-slate-300 text-sm">{s}</span>
                      <div className="ml-auto flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div key={j} className="w-1 h-4 rounded-full bg-sky-500/60" style={{ opacity: 0.4 + j * 0.12 }} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-6 z-30 glass rounded-2xl px-4 py-3 border border-sky-400/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">+2.500</p>
                    <p className="text-slate-400 text-xs">Pacientes</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-6 z-30 glass rounded-2xl px-4 py-3 border border-cyan-400/30"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {['bg-sky-500', 'bg-cyan-500', 'bg-teal-500'].map((c, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-slate-800 -ml-1 first:ml-0`} />
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">8 Especialistas</p>
                    <p className="text-slate-400 text-xs">en activo</p>
                  </div>
                </div>
              </motion.div>

              {/* Background card */}
              <div className="absolute inset-4 -z-10 glass rounded-3xl border border-white/10 rotate-3 opacity-50" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
