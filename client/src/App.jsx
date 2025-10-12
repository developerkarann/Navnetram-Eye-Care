import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/about/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import ServicePage from './pages/services/ServicePage'
import Testimonials from './pages/testimonials/Testimonials'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
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
