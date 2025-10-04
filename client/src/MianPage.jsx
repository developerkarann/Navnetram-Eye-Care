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
import WhyChooseUs from './pages/choose/WhyChooseUs'
import Carousel from './components/Carousel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/about/AboutUs'
const MianPage = () => {
  return (
    <>
      {/* <HomePage />
      <Service />
      <ServicePage />
      <Testimonials />
      <Carousel />
      <WhyChooseUs />
      <ContactPage /> */}
    </>
  )
}

export default MianPage