import './App.css'
import Carousel from './components/Carousel'
import Doctors from './components/Doctors'
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
      <Doctors/>
      <Carousel />
      <WhyChooseUs />
      <ContactPage />
    </>
  )
}

export default MianPage