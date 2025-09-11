import { Activity, Blend, Bone, Brain, Calendar, Eye, Glasses, MailPlus, MapPinHouse, Phone, Pipette, ScanEye } from 'lucide-react';
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
            <section className=" overflow-hidden rounded-xl max-w-7xl mb-25 m-auto shadow-2xl" id='contact'>
                <div className="relative z-10  backdrop-blur-sm py-8 px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl  font-bold text-gray-800 mb-4">Book Your Appointment</h2>
                        <p className="text-gray-600 text-lg">Schedule your consultation with Dr. Rinky Agarwal</p>
                        <div className="w-30 h-0.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md:px-20">

                        <div className='colum left '>
                            <div className="details flex flex-col gap-5">
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

                            </div>
                        </div>

                        <div className=" colum right space-y-3">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage