import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './footer/Footer'
import MianPage from './MianPage'
import AboutUs from './pages/about/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import ServicePage from './pages/services/ServicePage'
import Testimonials from './pages/testimonials/Testimonials'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<MianPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/services' element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
