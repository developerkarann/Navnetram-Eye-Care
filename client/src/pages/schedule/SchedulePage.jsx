import React from 'react'
import { Award, Bone, Brain, Calendar, ChevronDown, Clock, Eye, Heart, Mail, MapPin, Menu, Phone, Search, Stethoscope } from 'lucide-react';
import { useState } from 'react';

const SchedulePage = () => {

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    return (
        <>
            <section className="mt-8 relative overflow-hidden rounded-xl" id='schedule'>
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=300&fit=crop&crop=center"
                        alt="Clock Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-700/80"></div>
                </div>
                <div className="relative z-10 p-8 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center space-x-2">
                            <Clock className="w-7 h-7" />
                            <span>Working Hours</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                <p className="font-semibold text-lg mb-2">Monday - Friday</p>
                                <p className="text-blue-100">9:00 AM - 6:00 PM</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                <p className="font-semibold text-lg mb-2">Saturday</p>
                                <p className="text-blue-100">10:00 AM - 4:00 PM</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                <p className="font-semibold text-lg mb-2">Sunday</p>
                                <p className="text-blue-100">Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SchedulePage