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
import MianPage from './MianPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<MianPage />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
