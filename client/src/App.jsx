import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ServicePage from './pages/services/ServicePage'
import ContactPage from './pages/contact/ContactPage'
import SchedulePage from './pages/schedule/SchedulePage'
import Footer from './footer/Footer'

function App() {

  return (
    <>
      <HomePage />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white ">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <AboutPage />

          <ServicePage />
          <ContactPage />
          <SchedulePage />

        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
