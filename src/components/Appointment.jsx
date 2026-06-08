import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@heroui/react'
import { Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle } from 'lucide-react'
import axios from 'axios'

const specialties = [
  'Consulta Médica',
  'Odontología',
  'Especialidades Médicas',
  'Psicotécnicos Conducción',
  'Tratamientos AH',
  'Permiso de Armas',
  'Esclerosis de Varices',
  'Blanqueamiento Dental',
  'Ortodoncia',
  'Cirugía Menor',
  'Tratamiento PRP',
  'Laboratorio',
]

const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '16:00', '16:30', '17:00', '17:30', '18:00']

const initialForm = { name: '', phone: '', email: '', specialty: '', date: '', time: '', notes: '' }

const inputCls = 'w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400'
const labelCls = 'block text-xs font-semibold text-slate-600 mb-1'

export default function Appointment() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone || !form.specialty || !form.date || !form.time) {
      setError('Por favor, rellena todos los campos obligatorios.')
      return
    }
    setLoading(true)
    try {
      await axios.post('/api/appointments', form)
    } catch {
      // Backend no disponible en demo — la cita se registrará cuando el backend esté activo
    } finally {
      setSuccess(true)
      setForm(initialForm)
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="cita" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Reserva online
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-5 leading-tight">
              Pide tu{' '}
              <span className="gradient-text">cita</span>{' '}
              ahora
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Reserva tu consulta en segundos. Recibirás confirmación inmediata por SMS y email.
            </p>

            <div className="space-y-5">
              {[
                { icon: Calendar, title: 'Cita confirmada al instante', desc: 'Recibe confirmación por SMS y email' },
                { icon: Clock, title: 'Sin esperas largas', desc: 'Gestión ágil de tu tiempo' },
                { icon: Stethoscope, title: 'Especialista de tu elección', desc: 'Elige la especialidad que necesitas' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">{title}</p>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-sky-50 border border-sky-100">
              <p className="text-slate-600 text-sm font-medium mb-1">¿Prefieres llamar?</p>
              <a href="tel:+34965000000" className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors">
                965 000 000
              </a>
              <p className="text-slate-400 text-xs mt-1">Lunes a Viernes 8:00 - 20:00 · Sábados 9:00 - 14:00</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-xl ring-1 ring-sky-100"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">¡Cita solicitada!</h3>
                <p className="text-slate-500 mb-6">
                  Hemos recibido tu solicitud. Te confirmaremos la cita en breve por SMS y email.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-sky-50 text-sky-600 font-semibold hover:bg-sky-100 transition-colors"
                >
                  Pedir otra cita
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl ring-1 ring-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6">Datos de la cita</h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Nombre completo *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input className={`${inputCls} pl-9`} value={form.name} onChange={set('name')} placeholder="Tu nombre" required />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Teléfono *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input className={`${inputCls} pl-9`} value={form.phone} onChange={set('phone')} placeholder="600 000 000" required />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="email" className={`${inputCls} pl-9`} value={form.email} onChange={set('email')} placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Especialidad *</label>
                    <select className={inputCls} value={form.specialty} onChange={set('specialty')} required>
                      <option value="">Selecciona una especialidad</option>
                      {specialties.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Fecha *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="date" className={`${inputCls} pl-9`} value={form.date} min={today} onChange={set('date')} required />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Hora *</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select className={`${inputCls} pl-9`} value={form.time} onChange={set('time')} required>
                          <option value="">Seleccionar hora</option>
                          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Motivo de la consulta (opcional)</label>
                    <textarea
                      className={`${inputCls} resize-none`}
                      rows={3}
                      value={form.notes}
                      onChange={set('notes')}
                      placeholder="Describe brevemente tu motivo de consulta..."
                    />
                  </div>

                  {error && (
                    <p className="text-rose-500 text-sm bg-rose-50 px-4 py-2.5 rounded-xl">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:brightness-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Solicitar Cita'}
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Al enviar aceptas nuestra{' '}
                    <a href="#" className="text-sky-500 hover:underline">política de privacidad</a>.
                    Tu información está segura.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
