import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Stethoscope, Smile, Brain, Car,
  Syringe, Shield, Activity, Sun,
  Scissors, Droplets, TestTube, Microscope,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta Médica',
    description: 'Atención médica general y seguimiento personalizado con diagnóstico rápido y eficaz para toda la familia.',
    tags: ['Medicina General', 'Revisiones', 'Diagnóstico'],
    color: 'sky',
    featured: true,
  },
  {
    icon: Smile,
    title: 'Odontología',
    description: 'Clínica dental completa con los mejores materiales y técnicas para cuidar tu salud bucodental.',
    tags: ['Empastes', 'Extracciones', 'Estética'],
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'Especialidades Médicas',
    description: 'Acceso a un amplio catálogo de especialistas médicos en un único centro, cómodo y accesible.',
    tags: ['Cardiología', 'Dermatología', 'Ginecología'],
    color: 'violet',
  },
  {
    icon: Car,
    title: 'Psicotécnicos Conducción',
    description: 'Obtén o renueva tu permiso de conducir con el reconocimiento médico oficial de forma rápida.',
    tags: ['Carnet B', 'Profesional', 'Renovación'],
    color: 'teal',
  },
  {
    icon: Syringe,
    title: 'Tratamientos AH',
    description: 'Medicina estética con ácido hialurónico para rejuvenecimiento facial y corrección de arrugas.',
    tags: ['Rellenos', 'Labios', 'Antiaging'],
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Permiso de Armas',
    description: 'Reconocimiento psicofísico oficial para la obtención y renovación de licencias de armas.',
    tags: ['Caza', 'Deporte', 'Seguridad'],
    color: 'slate',
  },
  {
    icon: Activity,
    title: 'Esclerosis de Varices',
    description: 'Tratamiento mediante microesclerosis para eliminar varices y arañas vasculares con resultados visibles.',
    tags: ['Microesclerosis', 'Varices', 'Piernas'],
    color: 'indigo',
  },
  {
    icon: Sun,
    title: 'Blanqueamiento Dental',
    description: 'Blanqueamiento profesional en una sola sesión con tecnología LED para una sonrisa radiante.',
    tags: ['1 Sesión', 'LED', 'Sin dolor'],
    color: 'amber',
  },
  {
    icon: Smile,
    title: 'Ortodoncia',
    description: 'Alineadores transparentes y ortodoncia fija para una sonrisa perfecta a cualquier edad.',
    tags: ['Invisalign', 'Brackets', 'Retenedores'],
    color: 'emerald',
  },
  {
    icon: Scissors,
    title: 'Cirugía Menor',
    description: 'Extirpación de lunares, quistes, lipomas y pequeñas lesiones cutáneas en consulta, sin hospitalización.',
    tags: ['Lunares', 'Quistes', 'Lipomas'],
    color: 'orange',
  },
  {
    icon: Droplets,
    title: 'Tratamiento PRP',
    description: 'Plasma Rico en Plaquetas para regeneración capilar, rejuvenecimiento facial y tratamiento de lesiones.',
    tags: ['Capilar', 'Facial', 'Regeneración'],
    color: 'pink',
  },
  {
    icon: Microscope,
    title: 'Laboratorio',
    description: 'Laboratorio propio de análisis clínicos con resultados en el menor tiempo posible y máxima precisión.',
    tags: ['Analíticas', 'Urgente', 'Resultados online'],
    color: 'cyan',
  },
]

const colorMap = {
  sky:    { icon: 'bg-sky-500',    text: 'text-sky-600',    chip: 'bg-sky-100 text-sky-700',    ring: 'ring-sky-100'    },
  cyan:   { icon: 'bg-cyan-500',   text: 'text-cyan-600',   chip: 'bg-cyan-100 text-cyan-700',   ring: 'ring-cyan-100'   },
  rose:   { icon: 'bg-rose-500',   text: 'text-rose-600',   chip: 'bg-rose-100 text-rose-700',   ring: 'ring-rose-100'   },
  orange: { icon: 'bg-orange-500', text: 'text-orange-600', chip: 'bg-orange-100 text-orange-700', ring: 'ring-orange-100' },
  violet: { icon: 'bg-violet-500', text: 'text-violet-600', chip: 'bg-violet-100 text-violet-700', ring: 'ring-violet-100' },
  teal:   { icon: 'bg-teal-500',   text: 'text-teal-600',   chip: 'bg-teal-100 text-teal-700',   ring: 'ring-teal-100'   },
  indigo: { icon: 'bg-indigo-500', text: 'text-indigo-600', chip: 'bg-indigo-100 text-indigo-700', ring: 'ring-indigo-100' },
  emerald:{ icon: 'bg-emerald-500',text: 'text-emerald-600',chip: 'bg-emerald-100 text-emerald-700',ring:'ring-emerald-100' },
  amber:  { icon: 'bg-amber-500',  text: 'text-amber-600',  chip: 'bg-amber-100 text-amber-700',  ring: 'ring-amber-100'  },
  pink:   { icon: 'bg-pink-500',   text: 'text-pink-600',   chip: 'bg-pink-100 text-pink-700',   ring: 'ring-pink-100'   },
  slate:  { icon: 'bg-slate-600',  text: 'text-slate-600',  chip: 'bg-slate-100 text-slate-700',  ring: 'ring-slate-200'  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Todo lo que{' '}
            <span className="gradient-text">necesitas</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Un centro médico completo en Ibi con más de 12 especialidades bajo el mismo techo.
            Sin desplazamientos, con la mejor atención.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            const c = colorMap[service.color]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div
                  className={`group h-full rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ring-1 ${c.ring} ${service.featured ? 'bg-gradient-to-br from-sky-500 to-cyan-600 ring-sky-400' : 'bg-white'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${service.featured ? 'bg-white/20' : c.icon}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${service.featured ? 'text-white' : 'text-slate-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${service.featured ? 'text-sky-100' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${service.featured ? 'bg-white/20 text-white' : c.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${service.featured ? 'text-sky-200' : c.text}`}>
                    Más información <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
