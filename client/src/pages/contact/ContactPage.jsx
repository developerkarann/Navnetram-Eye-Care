import { Activity, Blend, Bone, Brain, Calendar, Eye, Glasses, Pipette, ScanEye } from 'lucide-react';
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

       const services = [
        {
            icon: <Blend className="w-8 h-8 text-blue-600" />,
            title: " Cataract & Lens Surgery",
            description: "Advanced surgical solutions for cataract and lens correction. Includes Phaco, MICS, SICS, and ICL surgeries.    ",
            duration: "45 mins",
            price: "$150"
        },
        {
            icon: <Brain className="w-8 h-8 text-blue-600" />,
            title: "LASIK & Vision Correction",
            description: "Modern laser treatments for refractive errors. Covers LASIK, SMILE, CLEAR, and ICL procedures.",
            duration: "60 mins",
            price: "$200"
        },
        {
            icon: <Eye className="w-8 h-8 text-blue-600" />,
            title: "Cornea & Transplant Services",
            description: "Specialized care for corneal conditions and transplants.PKP, ALK, EK, and management of corneal infections.",
            duration: "30 mins",
            price: "$100"
        },
        {
            icon: <Bone className="w-8 h-8 text-blue-600" />,
            title: "Refractive Error Management",
            description: "Accurate diagnosis and correction of vision issues.Glasses, contact lenses, lazy eye, and myopia control.",
            duration: "40 mins",
            price: "$120"
        },
        {
            icon: <ScanEye className="w-8 h-8 text-blue-600" />,
            title: " Eye Surface & Allergy Treatment",
            description: "Relief from dry eyes, allergies, and pink eye.Also covers Computer Vision Syndrome and Uveitis.",
            duration: "40 mins",
            price: "$120"
        },
        {
            icon: <Pipette className="w-8 h-8 text-blue-600" />,
            title: "Injections & Eye Surface Repair",
            description: "Minimally invasive treatments for eye health.Includes SLET, AMG, and various eye injections.",
            duration: "40 mins",
            price: "$120"
        },
        {
            icon: <Glasses className="w-8 h-8 text-blue-600" />,
            title: "Glasses & Contact Lens Fitting",
            description: "Precise fitting and vision improvement solutions.Includes standard and cosmetic lenses, orthokeratology.",
            duration: "40 mins",
            price: "$120"
        },
        {
            icon: <Activity className="w-8 h-8 text-blue-600" />,
            title: "Ayushmann & Panel Patients",
            description: "Consultation and surgery under government panels. Covers CGHS, ECHS, and Ayushman Bharat schemes.",
            duration: "40 mins",
            price: "$120"
        },
       
    ];

        const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];


    return (
        <>
            <section className="relative overflow-hidden rounded-xl shadow-2xl" id='contact'>
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center"
                        alt="Medical Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-white/90"></div>
                </div>
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
                        <p className="text-gray-600 text-lg">Schedule your consultation with Dr. Johnson today</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>


                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service.title}>{service.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                >
                                    <option value="">Select a time</option>
                                    {timeSlots.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                placeholder="Please describe your symptoms or concerns (optional)"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 mx-auto transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Book Appointment</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage