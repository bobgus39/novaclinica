import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import axios from 'axios'

const contactInfo = [
  { icon: MapPin, title: 'Dirección', lines: ['Carrer Nou d\'Octubre, 10, 1º Izq.', '03440 Ibi, Alicante'], color: 'sky' },
  { icon: Phone, title: 'Teléfono', lines: ['965 000 000', 'WhatsApp: 600 000 000'], color: 'cyan' },
  { icon: Mail, title: 'Email', lines: ['info@novaclinica.es', 'citas@novaclinica.es'], color: 'teal' },
  { icon: Clock, title: 'Horario', lines: ['Lun – Vie: 8:00 – 20:00', 'Sábados: 9:00 – 14:00'], color: 'sky' },
]

const colorMap = {
  sky: 'bg-sky-50 text-sky-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  teal: 'bg-teal-50 text-teal-600',
}

const inputCls = 'w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400'
const labelCls = 'block text-xs font-semibold text-slate-600 mb-1'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Estamos aquí{' '}
            <span className="gradient-text">para ti</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No dudes en ponerte en contacto. Respondemos en menos de 2 horas en horario de apertura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 hover:ring-sky-200 hover:shadow-md transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[info.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 mb-0.5">{info.title}</p>
                    {info.lines.map((line) => (
                      <p key={line} className="text-slate-500 text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 h-48 bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center relative"
            >
              <div className="text-center">
                <MapPin className="w-10 h-10 text-sky-500 mx-auto mb-2" />
                <p className="text-slate-600 font-medium text-sm">Nova Clínica</p>
                <p className="text-slate-400 text-xs">Carrer Nou d'Octubre, 10 — Ibi</p>
              </div>
              <div className="absolute bottom-3 right-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-sky-600 shadow-sm hover:shadow-md transition-shadow"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-sm ring-1 ring-slate-100 h-full flex flex-col items-center justify-center min-h-80"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Mensaje enviado</h3>
                <p className="text-slate-500 mb-6 max-w-sm">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-sky-50 text-sky-600 font-semibold hover:bg-sky-100 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Nombre *</label>
                      <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input type="email" className={inputCls} value={form.email} onChange={set('email')} placeholder="tu@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Asunto</label>
                    <input className={inputCls} value={form.subject} onChange={set('subject')} placeholder="¿En qué podemos ayudarte?" />
                  </div>

                  <div>
                    <label className={labelCls}>Mensaje *</label>
                    <textarea
                      className={`${inputCls} resize-none`}
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                      minLength={10}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:brightness-105 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Enviando...' : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
