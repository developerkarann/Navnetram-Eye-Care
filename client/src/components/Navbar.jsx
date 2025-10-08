import React, { useState } from 'react'
import { Calendar, Menu, Stethoscope, X } from 'lucide-react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Services',
            link: '/services'
        },
        {
            title: 'Testimonial',
            link: '/testimonials'
        },
        {
            title: 'About Us',
            link: '/about'
        },
        {
            title: 'Contact Us',
            link: '/contact'
        },

    ]

    return (
        <>
            {/* <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300"> */}
            <nav className="bg-white z-50 transition-shadow shadow-2xl duration-300">
                <div className="mx-auto px-10">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <Link to='/'>
                            <div className="flex items-center space-x-3">
                                <div className="transition-transform duration-300">
                                    <img src="/logo2.jpeg" className=' w-50 md:w-70' alt="" />
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className='flex gap-5'>
                            <div className="hidden md:flex items-center space-x-8">
                                {navLinks.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={`${item.link}`}
                                        className="text-gray-900 text-xl hover:text-blue-600 transition-colors duration-300 "
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            {/* Book Appointment - Desktop */}
                            <div className="hidden md:flex">
                                <Link
                                    to="/contact"
                                    className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold  transition-all duration-300"
                                >
                                    BOOK APPOINTMENT
                                </Link>
                            </div>
                        </div>

                        {/* Burger Button */}
                        <button
                            className="md:hidden transition-transform duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-8 h-8 text-gray-600" />
                            ) : (
                                <Menu className="w-8 h-8 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-4 ${mobileMenuOpen ? "h-[400px] max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col items-center pt-5 justify-center space-y-8">
                        {navLinks.map((item, i) => (
                            <Link
                                key={i}
                                to={`${item.link}`}
                                className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.title.toUpperCase()}
                            </Link>

                        ))}

                        <Link
                            href="/contact"
                            className="bg-gradient-to-r w-full from-blue-800 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-blue-600 hover:to-blue-700  duration-500"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            BOOK APPOINTMENT
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar