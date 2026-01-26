import './App.css'
import './assets/utility.css'
import Header from './components/header/Header'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Footer from './components/pages/footer/Footer'
import Home from './components/pages/home/Home'
import Portfolio from './components/pages/portfolio/Portfolio'
import Qualifications from './components/pages/qualifications/Qualifications'
import ScrollUp from './components/pages/scrollup/ScrollUp'
import Services from './components/pages/services/Services'
import Skills from './components/pages/skills/Skills'
import Testimonials from './components/pages/testimonials/Testimonials'

function App() {

  return (
    <div className='container'>
      <Header />
      
      <main className='main-container'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualifications />
        <Testimonials />
        <Contact/>
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App
