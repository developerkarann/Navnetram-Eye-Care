import { Calendar, MailPlus, MapPinHouse, Phone } from 'lucide-react';
import { useState } from 'react';
const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service) {
            alert('Please fill in all required fields.');
            return;
        }
        alert('Appointment request submitted successfully! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            service: '',
            message: ''
        });
    };


    return (
        <>
            <section className=" overflow-hidden rounded-xl mb-25 m-auto pt-20 loadAnimate " id='contact'>
                <div className="relative z-10  backdrop-blur-sm py-8 px-10 md:px-4">
                    <div className="text-center mb-8 hidden md:visible">
                        <h2 className="text-4xl  font-bold text-gray-800 mb-4">Book Your Appointment</h2>
                        <p className="text-gray-600 text-lg">Schedule your consultation with Dr. Rinky Agarwal</p>
                        <div className="w-30 h-0.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md:px-20">

                        <div className='colum left '>
                            <div className="box">
                                <div className=' mb-15 md:mb-10'>
                                    <h4 className="text-gray-800 font-bold text-3xl md:text-4xl mb-4">Contact us</h4>
                                    <p className="text-gray-600 text-base md:text-lg">Experience world-class eye care at Navnetram Advanced Eye Care, Noida. Our expert ophthalmologists and modern facilities are dedicated to protecting, treating, and enhancing your vision and overall eye health. Schedule your consultation today and take the first step toward clearer, healthier eyesight.</p>
                                </div>
                                <div className="flex flex-col space-x-5 gap-8">
                                    <div>
                                        <h4 className="text-gray-800 font-semibold text-xl">Address</h4>
                                        <p className="text-gray-600 text-base md:text-lg">R-20, Sector 11, Noida, Uttar Pradesh, 201301</p>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-800 font-semibold text-xl">Call us</h4>
                                        <p className="text-gray-600 text-base md:text-lg">+91 9310767259</p>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-800 font-semibold text-xl">Email</h4>
                                        <p className="text-gray-600 text-base md:text-lg">dr.rinky@navnetram.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="details flex flex-col gap-5">
                                <div className="group  bg-blue-500 backdrop-blur-sm p-2 rounded-2xl border border-blue-500 hover:border-blue-500/60 transition-all duration-500 transform hover:-translate-y-2" >
                                    <div className="flex items-center space-x-5 ">
                                        <div className={`w-16 h-16 bg-gradient-to-r  rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                            <div className="text-white text-xl"><MapPinHouse size={30} /></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                                            <p className="text-gray-50">R-20, Sector 11, Noida, Uttar Pradesh, 201301</p>
                                        </div>
                                    </div>
                                </div>
                                     <a href="mailto:dr.rinky@navnetram.com">
                                    <div className="group bg-blue-500 backdrop-blur-sm p-2 rounded-2xl border border-blue-500 hover:border-blue-500/60 transition-all duration-500 transform hover:-translate-y-2" >
                                        <div className="flex items-center space-x-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r  rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                                <div className="text-white text-xl"><MailPlus size={30} /></div>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                                                <p className="text-gray-50 text-lg">dr.rinky@navnetram.com</p>
                                            </div>
                                        </div>
                                    </div>

                                </a>
                                <div className="group bg-blue-500 backdrop-blur-sm p-2 rounded-2xl border border-blue-500 hover:border-blue-500/60 transition-all duration-500 transform hover:-translate-y-2" >
                                    <div className="flex items-center space-x-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r  rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                            <div className="text-white text-lg"><Phone size={30} /></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">Contact</h4>
                                            <p className="text-gray-50 text-lg">+91 9310767259</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="map">

                            </div> */}
                        </div>


                        <div className=" colum right space-y-3">
                            <div className="map hidden md:block">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.029716981564!2d77.33556879999999!3d28.5988853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b32a284b1f%3A0xf41ee03a672056c7!2sNavnetram%20Advanced%20Eye%20Care!5e0!3m2!1sen!2sin!4v1758554911601!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="map md:hidden">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.029716981564!2d77.33556879999999!3d28.5988853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b32a284b1f%3A0xf41ee03a672056c7!2sNavnetram%20Advanced%20Eye%20Care!5e0!3m2!1sen!2sin!4v1758556276151!5m2!1sen!2sin" width="350" height="250" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        {/* <div className=" colum right space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/80 " placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  bg-white/80 " placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  bg-white/80  " placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                                    className="w-full px-4 py-3 border border-gray-300  rounded-lg  bg-white/80 " placeholder="Please describe your symptoms or concerns (optional)"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 mx-auto transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Book Appointment</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage