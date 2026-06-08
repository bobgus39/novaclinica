import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María García',
    location: 'Ibi, Alicante',
    rating: 5,
    text: 'El mejor servicio médico que he recibido. La Dra. Martínez es increíblemente profesional y cercana. Me diagnosticó en primera visita algo que llevaba meses sin resolver.',
    specialty: 'Medicina General',
    initials: 'MG',
    color: 'bg-sky-500',
  },
  {
    name: 'Antonio Fernández',
    location: 'Alcoy, Alicante',
    rating: 5,
    text: 'Llevé a mi hijo por primera vez y quedé impresionado. La Dra. Pérez tiene una paciencia y dedicación increíbles con los más pequeños. Totalmente recomendable.',
    specialty: 'Pediatría',
    initials: 'AF',
    color: 'bg-violet-500',
  },
  {
    name: 'Rosa Alberola',
    location: 'Ibi, Alicante',
    rating: 5,
    text: 'Gracias al Dr. Sánchez pude recuperarme de una lesión de rodilla en tiempo récord. Su expertise y el seguimiento postoperatorio fueron excepcionales.',
    specialty: 'Traumatología',
    initials: 'RA',
    color: 'bg-cyan-500',
  },
  {
    name: 'José Manuel Ortiz',
    location: 'Castalla, Alicante',
    rating: 5,
    text: 'El Dr. López me detectó un problema cardíaco en una revisión rutinaria que de otro modo podría haber sido muy serio. Le debo literalmente la vida.',
    specialty: 'Cardiología',
    initials: 'JO',
    color: 'bg-rose-500',
  },
  {
    name: 'Carmen Vidal',
    location: 'Ibi, Alicante',
    rating: 5,
    text: 'Clínica muy moderna, limpia y organizada. El tiempo de espera es mínimo y el personal administrativo es muy amable. La mejor clínica de la zona sin duda.',
    specialty: 'Medicina General',
    initials: 'CV',
    color: 'bg-teal-500',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const timerRef = useRef(null)

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }

  const t = testimonials[current]

  return (
    <section id="testimonios" ref={ref} className="section-padding bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Testimonios de{' '}
            <span className="gradient-text">confianza</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            La opinión de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 relative">
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-sky-500/20" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${t.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{t.name}</h4>
                      <p className="text-slate-400 text-sm">{t.location}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium">
                        {t.specialty}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-200 text-lg leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer() }}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-sky-400' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => { prev(); resetTimer() }}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => { next(); resetTimer() }}
                className="w-11 h-11 rounded-xl bg-sky-500 flex items-center justify-center text-white hover:bg-sky-400 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 text-center"
        >
          {[
            { value: '4.9/5', label: 'Valoración media', sub: 'Google Reviews' },
            { value: '+500', label: 'Reseñas positivas', sub: 'Pacientes verificados' },
            { value: '98%', label: 'Recomendarían', sub: 'A amigos y familia' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-slate-300 text-xs sm:text-sm font-medium">{item.label}</div>
              <div className="text-slate-500 text-xs">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
