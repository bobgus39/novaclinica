import { Heart, MapPin, Phone, Mail } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const sections = [
  {
    title: 'Especialidades',
    links: ['Medicina General', 'Pediatría', 'Cardiología', 'Traumatología', 'Neurología', 'Oftalmología'],
  },
  {
    title: 'La clínica',
    links: ['Quiénes somos', 'Nuestro equipo', 'Instalaciones', 'Noticias', 'Blog de salud'],
  },
  {
    title: 'Pacientes',
    links: ['Pedir cita', 'Resultados análisis', 'Historia clínica', 'Facturación', 'Contacto'],
  },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => scrollTo('#inicio')}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-bold text-lg text-white">Nova</span>
                <span className="text-xs font-medium tracking-widest uppercase text-sky-400">Clínica</span>
              </div>
            </button>

            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Tu clínica de referencia en Ibi, Alicante. Comprometidos con tu salud y bienestar desde 2009.
            </p>

            <div className="space-y-2.5 text-sm mb-6">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>Carrer Nou d'Octubre, 10, 1º Izq. — 03440 Ibi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a href="tel:+34965000000" className="hover:text-white transition-colors">965 000 000</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a href="mailto:info@novaclinica.es" className="hover:text-white transition-colors">info@novaclinica.es</a>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, label: 'Facebook' },
                { icon: InstagramIcon, label: 'Instagram' },
                { icon: XIcon, label: 'X (Twitter)' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-colors group text-slate-400 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Nova Clínica Ibi. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
