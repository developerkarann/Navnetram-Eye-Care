import { Calendar, Menu, Stethoscope, X } from 'lucide-react';
import { useState } from 'react';
const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div id="home"></div>

            {/* Hero Section */}
            <section className="  md:px-20 md:pb-10  bg-gradient-to-r from-blue-100 to-white overflow-hidden">
                <div className=" z-10   md:py-0">

                    <div className="mainLogo mt-10 mb-8 md:hidden">
                        <img src="/logo2.jpeg" className=' w-full md:hidden shadow' alt="" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center px-5">
                        {/* Left Content */}
                        <div className="text-white space-y-14  md:mt-[-30px] ">
                            {/* Main Heading */}


                            <div className=" md:space-y-10 md:mt-30 ">
                                <div className=' flex flex-col gap-5'>
                                    <h1 className="text-5xl text-gray-800 lg:text-6xl font-bold ">
                                        Dr. Rinky Agarwal
                                    </h1>
                                    <h3 className=" text-blue-900 text-3xl md:text-4xl font-semibold  ">Expert Eye Care with Trust of AIIMS <br className='hidden md:block' /> <span>  (New Delhi) </span>  </h3>
                                    <p className=" text-xl text-gray-900  pt-8 md:pt-5 leading-relaxed ">
                                        Navnetram Advanced Eye care is a medical facility co-structured by Dr Rinky Agarwal and Dr Nitin
                                        Gupta with goal of providing high quality, advanced and economical eye care.
                                        The center provides
                                        excellent eye care facilities by expert ophthalmologist(s) trained from premier institutes of India like
                                        AIIMS, LHMC and GNEC/MAMC.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact">
                                    <button className=" bg-gradient-to-r from-blue-800 to-blue-600 text-white cursor-pointer shadow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                                        BOOK APPOINTMENT
                                    </button>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-700">10+</div>
                                    <div className="text-gray-900 text-sm">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-700">12.5K+</div>
                                    <div className="text-gray-900 text-sm">Happy Patients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-700">99.99%</div>
                                    <div className="text-gray-900 text-sm">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Doctor Image */}
                        <div className="">
                            <img src="/assest/home-pic2.jpeg"
                                alt="Dr. Rinky Agarwal"
                                className=" h-full w-full object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage