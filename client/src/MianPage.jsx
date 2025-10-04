import './App.css'
import Carousel from './components/Carousel'
import WhyChooseUs from './pages/choose/WhyChooseUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import Service from './pages/service/Service'
import ServicePage from './pages/services/ServicePage'
import Testimonials from './pages/testimonials/Testimonials'
const MianPage = () => {
  return (
    <>
      <HomePage />
      <Service />
      <ServicePage />
      <Testimonials />
      <Carousel />
      <WhyChooseUs />
      <ContactPage />
    </>
  )
}

export default MianPage