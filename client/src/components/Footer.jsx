import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Calendar, MailPlus, MapPinHouse, Phone } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Service', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact Us', href: '#contact' }
    ];

    const socialLinks = [
        { icon: FaYoutube, href: 'https://www.youtube.com/@navnetram', label: 'Instagram', color: 'hover:text-sky-400' },
        { icon: FaInstagram, href: 'https://www.instagram.com/navnetrumadvancedeye/?igsh=bWFxY211Y3BkdGNo#', label: 'Instagram', color: 'hover:text-sky-400' },
        { icon: FaFacebook, href: 'https://www.facebook.com/share/1AjPWwv59P/', label: 'Instagram', color: 'hover:text-sky-400' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/navnetram-advanced-eye-care-3766ba384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: FaTwitter, href: 'https://x.com/navnetram64654?t=0LR6gfmdrPp249Hp_e9CAQ&s=08', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: FaEnvelope, href: 'mailto:dr.rinky@navnetram.com', label: 'Email', color: 'hover:text-sky-400' }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-8">
         {/* <div className="bg-black px-8"> */}


            {/* Footer */}
            <footer className="">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div className="">
                            <div className='flex gap-5 items-center'>
                                <img src="/logo01.png" className='w-20' alt="" />
                                <div className="text">
                                    <h1 className='text-gray-100 text-4xl'>NavNetram</h1>
                                    <p className='text-gray-200 text-base tracking-widest'>Advanced Eye Care</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-base py-5 leading-relaxed">
                                Your eyes deserve the best care. At Navnetram Advanced Eye Care, we combine advanced technology with personalized treatment to protect your vision and support lifelong eye health
                            </p>
                            <div className="flex space-x-6 mb-5 md:mb-0">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        target='_blank'
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
                                    className="inline-flex text-xl items-center bg-gradient-to-r w-full from-gray-800 to-gray-900 px-4 py-4 rounded-xl text-white  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-6 border-t border-white/10">
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
                            <div className="flex w-full flex-col md:flex-row text-center md:justify-between space-x-1 text-gray-100 text-sm">
                                <span>&copy; 2025 Navnetram.com All rights reserved.</span>
                                <p class="text-sm mt-2 sm:mt-0">
                                    Designed & Developed by <span class="font-semibold text-blue-600"> <a href="https://www.karanpal.in" target='_blank'> Karan Pal </a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
}
