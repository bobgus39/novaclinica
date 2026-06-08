import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Star, ExternalLink } from 'lucide-react'

const doctors = [
  {
    name: 'Dra. Laura Martínez',
    specialty: 'Directora Médica · Medicina General',
    experience: '20 años',
    rating: 5.0,
    avatar: '👩‍⚕️',
    gradient: 'from-sky-500 to-blue-600',
    bio: 'Especialista en medicina familiar e interna con amplia experiencia en atención continuada.',
  },
  {
    name: 'Dr. Carlos Sánchez',
    specialty: 'Traumatología y Ortopedia',
    experience: '15 años',
    rating: 4.9,
    avatar: '👨‍⚕️',
    gradient: 'from-cyan-500 to-teal-600',
    bio: 'Referente regional en cirugía ortopédica mínimamente invasiva y medicina deportiva.',
  },
  {
    name: 'Dra. Ana Pérez',
    specialty: 'Pediatría',
    experience: '12 años',
    rating: 5.0,
    avatar: '👩‍⚕️',
    gradient: 'from-violet-500 to-purple-600',
    bio: 'Dedicada al seguimiento del desarrollo infantil y adolescente con enfoque preventivo.',
  },
  {
    name: 'Dr. Javier López',
    specialty: 'Cardiología',
    experience: '18 años',
    rating: 4.9,
    avatar: '👨‍⚕️',
    gradient: 'from-rose-500 to-pink-600',
    bio: 'Experto en diagnóstico no invasivo y rehabilitación cardíaca en pacientes adultos.',
  },
  {
    name: 'Dra. Elena Rodríguez',
    specialty: 'Neurología',
    experience: '10 años',
    rating: 4.8,
    avatar: '👩‍⚕️',
    gradient: 'from-indigo-500 to-blue-600',
    bio: 'Especializada en trastornos neurodegenerativos y cefaleas crónicas.',
  },
  {
    name: 'Dr. Miguel Torres',
    specialty: 'Oftalmología',
    experience: '14 años',
    rating: 4.9,
    avatar: '👨‍⚕️',
    gradient: 'from-teal-500 to-emerald-600',
    bio: 'Cirujano ocular con formación en las principales clínicas europeas de referencia.',
  },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="equipo" ref={ref} className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros especialistas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            El{' '}
            <span className="gradient-text">equipo</span>{' '}
            que te cuida
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Profesionales altamente cualificados con vocación de servicio y compromiso con la excelencia médica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header gradient */}
              <div className={`h-28 bg-gradient-to-br ${doc.gradient} relative`}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }}
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center text-3xl -mt-8 shadow-lg border-2 border-white`}>
                  {doc.avatar}
                </div>

                <div className="mt-3">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">{doc.name}</h3>
                  <p className="text-sky-600 text-sm font-medium mt-0.5">{doc.specialty}</p>
                </div>

                <p className="text-slate-500 text-sm mt-3 leading-relaxed">{doc.bio}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${j < Math.floor(doc.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{doc.rating}</span>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
                    {doc.experience} exp.
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-sky-50 text-sky-600 text-xs font-semibold hover:bg-sky-100 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    Contactar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs font-semibold hover:bg-slate-100 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Perfil
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
