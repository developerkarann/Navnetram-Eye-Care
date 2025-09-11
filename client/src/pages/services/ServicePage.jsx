const ServicePage = () => {

    const services = [
        {
            title: " Cataract & Lens Surgery",
            description: "Advanced surgical solutions for cataract and lens correction. Includes Phaco, MICS, SICS, and ICL surgeries.    ",
            duration: "45 mins",
            image: 'https://images.unsplash.com/photo-1742627541273-33ebe14bf1f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: "LASIK & Vision Correction",
            description: "Modern laser treatments for refractive errors. Covers LASIK, SMILE, CLEAR, and ICL procedures.",
            image: "https://images.unsplash.com/photo-1722419136179-991a684eee53?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Cornea & Transplant Services",
            description: "Specialized care for corneal conditions and transplants.PKP, ALK, EK, and management of corneal infections.",
            image: "https://plus.unsplash.com/premium_photo-1661607415636-119f7bfa0542?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Refractive Error Management",
            description: "Accurate diagnosis and correction of vision issues.Glasses, contact lenses, lazy eye, and myopia control.",
            image: "https://plus.unsplash.com/premium_photo-1683121054290-15cc28908ddb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: " Eye Surface & Allergy Treatment",
            description: "Relief from dry eyes, allergies, and pink eye.Also covers Computer Vision Syndrome and Uveitis.",
            image: "https://plus.unsplash.com/premium_photo-1677333508737-6b6d642bc6d6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Injections & Eye Surface Repair",
            description: "Minimally invasive treatments for eye health.Includes SLET, AMG, and various eye injections.",
            image: "https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        // {
        //     icon: <Glasses className="w-8 h-8 text-blue-600" />,
        //     title: "Glasses & Contact Lens Fitting",
        //     description: "Precise fitting and vision improvement solutions.Includes standard and cosmetic lenses, orthokeratology.",
        //     duration: "40 mins",
        //     price: "$120"
        // },
        // {
        //     icon: <Activity className="w-8 h-8 text-blue-600" />,
        //     title: "Ayushmann & Panel Patients",
        //     description: "Consultation and surgery under government panels. Covers CGHS, ECHS, and Ayushman Bharat schemes.",
        //     duration: "40 mins",
        //     price: "$120"
        // },

    ];


    return (
        <>
            {/* Services Section */}
            <section className="mb-8 relative px-2 md:px-10" id='services'>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white rounded-2xl"></div>
                <div className="relative z-10 py-8 px-2">
                    <div className="text-center mb-25" >
                        <h2 className=" text-4xl md:text-5xl text-blue-500 mb-4">Our Services</h2>
                        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
                        <p className="text-gray-900 text-3xl md:text-5xl">Comprehensive eye care services in Noida</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
                        {services.map((service, index) => {

                            return (
                                <>

                                    <div key={index} class="relative w-[400px] h-[350px] overflow-hidden shadow mb-10 hover:cursor-pointer hover:scale-105 duration-300">

                                        <div class="absolute inset-0">
                                            <img src={service.image} alt="Surgery" class="w-full h-full object-cover opacity-35" />
                                        </div>


                                        <div class="relative z-10 p-6 flex flex-col justify-center h-full">
                                            <h2 class="text-3xl  text-gray-800">{service.title}</h2>
                                            <p class="mt-6 text-gray-800 text-lg">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage