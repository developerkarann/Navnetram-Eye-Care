import { Calendar, Menu, Stethoscope, X } from 'lucide-react';
import { useState } from 'react';
const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div id="home"></div>
           
            {/* Hero Section */}
            {/* <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"> */}
            <section className="relative min-h-screen  overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-30 md:py-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                        {/* Left Content */}
                        <div className="text-white space-y-8">
                            {/* Badge */}
                            {/* <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-green-300 text-sm font-medium">MEET</span>
                            </div> */}

                            {/* Main Heading */}
                            <div className="space-y-20 md:space-y-12">
                                <h1 className="text-5xl text-gray-800 lg:text-6xl font-bold ">
                                    Dr. Rinky Agarwal
                                    <br />
                                    <span className="text-blue-400  text-4xl lg:text-5xl">— Your Trusted</span>
                                    <br />
                                    <span className=" lg:text-5xl">Eye Care Specilist</span>
                                </h1>
                                <p className=" text-2xl text-gray-800 leading-relaxed max-w-lg">
                                    Dr. Rinky Agarwal is founder & senior Consultant with 10 + Years Experience, Expert in <span>surgical & Medical Eye Treatments.</span>
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                                    <Calendar className="w-5 h-5" />
                                    <span> <a href="#contact">  BOOK APPOINTMENT</a></span>
                                </button> */}
                                <a href="#contact">
                                    <button className="border-2 cursor-pointer border-gray-400 hover:border-gray-700 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                                        BOOK A APPOINTMENT
                                    </button>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">10+</div>
                                    <div className="text-gray-300 text-sm">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">2.5K+</div>
                                    <div className="text-gray-300 text-sm">Happy Patients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">98%</div>
                                    <div className="text-gray-300 text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Doctor Image and Quote */}
                        <div className="relative">
                            {/* Background Blue Shape */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform rotate-5 scale-110 opacity-20"></div>

                            {/* Main Blue Background */}
                            {/* <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 transform -rotate-2"> */}
                                {/* Doctor Image */}
                                <div className="relative">

                                    {/* <img src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
                                        alt="Dr. Rinky Agarwal"
                                        className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                                    /> */}
                                    <img src="/assest/pic2.png"
                                        alt="Dr. Rinky Agarwal"
                                        className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                                    />

                                    {/* Floating Medical Cross */}
                                    {/* <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl">
                                        <div className="w-8 h-8 text-white">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2L10.09 8.26L2 9L7.5 14.74L5.91 23L12 19.77L18.09 23L16.5 14.74L22 9L13.91 8.26L12 2Z" />
                                            </svg>
                                        </div>
                                    </div> */}
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage