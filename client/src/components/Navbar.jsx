import React, { useState } from 'react'
import { Calendar, Menu, Stethoscope, X } from 'lucide-react';

const Navbar = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            {/* <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300"> */}
            <nav className="bg-white z-50 transition-shadow shadow-2xl duration-300">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="transition-transform duration-300">
                                <img src="/logo2.jpeg" className='w-70' alt="" />
                            </div>
                            {/* <div className=''>
                                <h1 className="text-2xl font-bold text-gray-800">NAVNETRAM</h1>
                                <p className="text-gray-700 text-lg mt-[-5px] ">Advanced Eye Care</p>
                            </div> */}
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {["home", "about", "services", "contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                                >
                                    {item.toUpperCase()}
                                </a>
                            ))}
                        </div>

                        {/* Book Appointment - Desktop */}
                        <div className="hidden md:flex">
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                            >
                                BOOK A APPOINTMENT
                            </a>
                        </div>

                        {/* Burger Button */}
                        <button
                            className="md:hidden transition-transform duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-4 ${mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col space-y-4">
                        {["home", "about", "services", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.toUpperCase()}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            BOOK A APPOINTMENT
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar