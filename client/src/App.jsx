import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Footer from './footer/Footer'
import AboutUs from './pages/about/AboutUs'
import WhyChooseUs from './pages/choose/WhyChooseUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import Service from './pages/service/Service'
import ServicePage from './pages/services/ServicePage'
import Testimonials from './pages/testimonials/Testimonials'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <HomePage />
        <Service />
        <ServicePage />
        <Testimonials />
        <Carousel />
        <WhyChooseUs />
        <ContactPage />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
