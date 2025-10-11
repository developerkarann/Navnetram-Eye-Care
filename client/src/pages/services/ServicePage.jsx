const ServicePage = () => {

    const services = [
        {
            title: " Cataract & Lens Surgery",
            description: "Achieve clear vision with painless microincision cataract surgery (MICS) and premium IOL implants, customized for your unique needs.",
            duration: "45 mins",
            image: '/assest/services/cataract.png'
        },
        {
            title: "LASIK & Laser Vision correction",
            description: "Personalized LVC counselling with bladeless, painless options including LASIK, SMILE, PRK, ICL—advanced technology for safe, lasting vision",
            image: "/assest/services/lasik.jpg"
        },
        {
            title: "Cornea & Transplant Facilities",
            description: "Expert cornea specialists offering treatment for keratoconus, keratitis, corneal injuries, and advanced transplants like PKP, DALK, DMEK.",
            image: "/assest/services/cornea.jpg"
        },
        {
            title: "Glaucoma Management",
            description: "Glaucoma specialists providing precise diagnosis and complete management, from advanced imaging to MIGS and major filtration surgeries.",
            image: "/assest/services/galucoma.jpg"
        },
        {
            title: "Misaligned eyes/Squint",
            description: "Expert squint management using precise, step-by-step, patient-centered care for optimal correction and lasting, satisfactory results.",
            image: "/assest/services/squint.jpg"
        },
        {
            title: "Eye lid problems",
            description: "Evidence-based eye care for socially disfiguring conditions like white eyes, shrinking eyes, droopy lids, and involuntary movements.",
            image: "/assest/services/eyelid.jpg"
        },
        {
            title: "Retina and Uvea Disorders",
            description: " Skilled ophthalmologists treating retinal and uveitic diseases—macular edema, diabetic retinopathy, ARMD, CRVO, CRAO, and more. ",
            image: "/assest/services/retinaAndUvea.jpg"
        },
        {
            title: "Pediatric eye care",
            description: "Comprehensive pediatric eye care using advanced automated and manual methods to ensure precise, child-focused treatment.",
            image: "/assest/services/pediatricEyeCare.jpg"
        },
        {
            title: "Comprehensive eye care",
            description: "Expert care for common eye problems—red eyes, dry eyes, lazy eyes, myopia, chalazion, pterygium, and computer vision syndrome.",
            image: "/assest/services/comprehensiveEyeCare.jpg"
        },


    ];

    return (
        <>
            {/* Services Section */}
            <section className="mb-8 relative px-2 md:px-10 bg-[#f0f0ff]" id='services'>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white rounded-2xl"></div> */}

                <div className="relative z-10 py-8 px-2">
                    <div className="text-center mb-15 loadAnimate" >
                        <h2 className=" text-4xl md:text-5xl text-gray-800 font-bold mb-4">Our Services</h2>
                        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
                        {services.map((service, index) => {
                            return (
                                <>
                                    <div key={index} class=" flex flex-col items-center loadAnimate w-[360px] h-[400px]  mb-5 hover:cursor-pointer hover:scale-105 duration-300">
                                        <img src={service.image} alt="Surgery" class=" w-[350px] h-[250px] rounded object-cover" />
                                        <div class="flex flex-col justify-center py-5 px-2">
                                            <h2 class="text-2xl font-semibold text-gray-800">{service.title}</h2>
                                            <p class="mt-2 text-gray-800 text-lg">
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