import React from 'react'
import { Award, Bone, Brain, Calendar, ChevronDown, Clock, Eye, Heart, Mail, MapPin, Menu, Phone, Search, Stethoscope } from 'lucide-react';
import { useState } from 'react';
const AboutPage = () => {
    return (
        <>
            {/* Doctor Profile Section */}
            <section className="bg-white max-w-7xl m-auto rounded-lg shadow-xl p-8 py-15 mt-20 mb-50 relative overflow-hidden" id='about'>
                <div className="text-center mb-15">
                    <h2 className="text-4xl  text-gray-800 mb-4">About Dr. Rinky Agarwal</h2>
                    <div className="w-50 h-0.5 bg-gray-500 mx-auto mt-2 mb-5"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    <div className="md:col-span-1">
                        <div className="text-center">
                            <div className=" md:mt-[-100px] w-58 h-58 mx-auto rounded-full overflow-hidden mb-4 ring-1 ring-blue-200 shadow-lg">
                                <img
                                    src="assest/pic5.png"
                                    alt="Dr. Rinky"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. Rinky Agarwal</h2>
                            <p className="text-blue-600 font-semibold text-xl mb-2">MBBS, MD (Ophthalmology), DNB, MNAMS</p>
                            <div className="flex items-center text-lg  justify-center space-x-4 text-gray-600">
                                <div className="flex items-center space-x-1">
                                    <Award className="w-4 h-4" />
                                    <span>10+ Years</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Stethoscope className="w-4 h-4" />
                                    <span>Board Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">About Dr. Rinky Agarwal</h3> */}
                                <p className="text-gray-900 text-lg mb-10">
                                    Dr. Rinky Agarwal is a highly experienced in surgical & medical eye treatments with over 10+ years of practice. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facere?Lorem ipsum dolor sit amet.

                                </p>
                                <div className="space-y-2 text-lg ">
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-900">+91 93107767259</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-900">dr.rinky@navnetram.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-900"> R-20, Sector 11, Noida, 201301</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Specializations</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">Glasses and Contact Lenses</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">Dry eye, Allergy, Pink eye</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">AMG, SLET, Eyldwelling Plosis, entropion, ectropion</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">Corneal infection, Uveitis</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Education</h4>
                                <div className="text-gray-600 text-sm space-y-1">
                                    <p>• MD - AAIMS, New Delhi, DNB</p>
                                    <p>• MNAMS, MBBS (Gold Medalist)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage