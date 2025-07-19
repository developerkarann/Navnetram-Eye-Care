import React from 'react'
import { Award, Blend, ScanEye, Glasses, Activity, Pipette, Bone, Brain, Calendar, ChevronDown, Clock, Eye, Heart, Mail, MapPin, Menu, Phone, Search, Stethoscope } from 'lucide-react';
import { useState } from 'react';
const ServicePage = () => {

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


    return (
        <>
            {/* Services Section */}
            <section className="mb-8 relative" id='services'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl"></div>
                <div className="relative z-10 p-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p className="text-gray-600 text-lg">Comprehensive healthcare services tailored to your needs</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6">
                        {services.map((service, index) => {
                            const serviceImages = [
                                "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=200&fit=crop&crop=center",
                                "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop&crop=center",
                                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop&crop=center",
                                "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=200&fit=crop&crop=center"
                            ];

                            return (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    {/* <div className="h-32 overflow-hidden">
                                        <img
                                            src={serviceImages[index]}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div> */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-center mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
                                        {/* <div className="flex justify-between items-center text-sm">
                                            <span className="text-blue-600 font-semibold">{service.duration}</span>
                                            <span className="text-gray-800 font-bold">{service.price}</span>
                                        </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage