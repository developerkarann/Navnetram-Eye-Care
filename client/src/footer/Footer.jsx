import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaInstagram } from 'react-icons/fa';
import { Calendar, MailPlus, MapPinHouse, Phone } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Service', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact Us', href: '#contact' }
    ];

    const services = [
        { name: 'Web Development', href: '' },
        { name: 'Backend Development', href: '' },
        { name: 'API Integration', href: '' },
        { name: 'Database Design', href: '' },
        { name: 'Code Review', href: '' },
        { name: 'Consulting', href: '' }
    ];

    const socialLinks = [
        { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-sky-400' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: FaEnvelope, href: 'mailto:dr.rinky@navnetram.com', label: 'Email', color: 'hover:text-sky-400' }
    ];

    return (
        <div className="bg-black px-8">


            {/* Footer */}
            <footer className="">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div className="space-y-4">
                            <div>
                                <img src="/logo.png" className='w-100' alt="" />
                                {/* <p className="text-purple-100 text-sm">Advanced Eye Care</p> */}
                            </div>
                            <p className="text-gray-300 text-base md:text-xl py-5 leading-relaxed">
                                Your eyes deserve the best care. At Navnetram Advanced Eye Care, we combine advanced technology with personalized treatment to protect your vision and support lifelong eye health
                            </p>
                            <div className="flex space-x-6 mb-5 md:mb-0">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className={`text-white ${social.color} transition-colors duration-300 transform hover:scale-110`}
                                    >
                                        <social.icon size={30} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 md:flex md:flex-col items-center mb-10 md:mb-0 ">
                            <h4 className="text-2xl mb-5 font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 text-lg hover:text-sky-400 transition-colors duration-300  transform inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-2xl mb-5 font-semibold text-white">Contact Us</h4>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <FaPhone className="text-blue-400 flex-shrink-0" size={25} />
                                    <span className="text-lg"> 91 9310767259 </span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <FaEnvelope className="text-blue-400 flex-shrink-0" size={25} />
                                    <span className="text-lg">dr.rinky@navnetram.com</span>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-300">
                                    <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" size={25} />
                                    <span className="text-lg">R-20, Sector 11, Noida, Uttar Pradesh, 201301</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a
                                    href="#contact"
                                    className="inline-flex text-xl items-center bg-gradient-to-r w-full from-gray-800 to-gray-900 hover:from-blue-700 hover:to-blue-700 px-4 py-4 rounded-xl text-white  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
                            <div className="flex items-center space-x-1 text-gray-100 text-sm">
                                <span>&copy; 2025 Navnetram. All rights reserved.</span>
                                {/* <FaHeart className="text-blue-400 animate-pulse" size={14} /> */}
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
}


// import React from 'react'

// const Footer = () => {
//     return (
//         <>
//             <footer class="bg-white border-t border-blue-100 text-blue-800 mt-10">
//                 <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
//                     <p class="text-sm">&copy; 2025 Navnetram. All rights reserved.</p>
//                     <p class="text-sm mt-2 sm:mt-0">
//                         Developed & Managed by <span class="font-semibold text-blue-600"> <a href="https://www.karanpal.in" target='_blank'> Karan Pal </a></span>
//                     </p>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer