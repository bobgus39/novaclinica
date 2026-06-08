import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, MapPin, Phone, Award } from 'lucide-react'

const highlights = [
  'Equipamiento médico de última generación',
  'Atención en menos de 24 horas',
  'Equipo multidisciplinar con más de 15 años',
  'Historia clínica digital integrada',
  'Instalaciones accesibles y modernas',
  'Convenios con principales aseguradoras',
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image placeholder with gradient */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold mb-2">Nova Clínica</p>
                  <p className="text-sky-100 text-sm">Ibi, Alicante</p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sky-200 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Carrer Nou d'Octubre, 10 — Ibi 03440</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 animate-morph"
              />
              <motion.div
                className="absolute bottom-8 left-6 w-12 h-12 rounded-full bg-white/15"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-12 bg-white rounded-2xl p-4 shadow-xl border border-sky-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">ISO 9001</p>
                  <p className="text-xs text-slate-500">Certificados</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-12 bg-white rounded-2xl p-4 shadow-xl border border-sky-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">965 XXX XXX</p>
                  <p className="text-xs text-slate-500">Urgencias 24h</p>
                </div>
              </div>
            </motion.div>

            {/* Background blob */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-[40px] opacity-60" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Quiénes somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-5 leading-tight">
              Más de 15 años{' '}
              <span className="gradient-text">cuidando</span>{' '}
              a Ibi
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Nova Clínica nació con la misión de ofrecer atención médica de primer nivel en el corazón de Ibi.
              Somos un equipo de profesionales apasionados por la salud que combinan experiencia,
              tecnología y trato humano para dar lo mejor a cada paciente.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Nuestras instalaciones están equipadas con la tecnología más avanzada, y contamos con
              convenios con las principales aseguradoras para que nunca tengas que preocuparte
              por tu acceso a la salud.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#cita')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-lg shadow-sky-200 hover:brightness-105 transition-all"
              >
                Reservar consulta
              </button>
              <button
                onClick={() => scrollTo('#equipo')}
                className="px-7 py-3.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition-all"
              >
                Conocer el equipo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
