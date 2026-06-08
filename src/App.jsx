import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
