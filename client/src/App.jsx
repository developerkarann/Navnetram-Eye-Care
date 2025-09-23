import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ServicePage from './pages/services/ServicePage'
import ContactPage from './pages/contact/ContactPage'
import SchedulePage from './pages/schedule/SchedulePage'
import Footer from './footer/Footer'
import Navbar from './components/Navbar'
import Service from './pages/service/Service'
import Testimonials from './pages/testimonials/Testimonials'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Service />
      <ServicePage />
      <Testimonials />
      {/* <AboutPage /> */}
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
