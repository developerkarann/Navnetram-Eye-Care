const ServicePage = () => {

    const services = [
        {
            title: " Cataract & Lens Surgery",
            description: "Achieve clear vision with painless microincision cataract surgery (MICS) and premium IOL implants, customized for your unique needs.",
            duration: "45 mins",
            image: 'https://images.unsplash.com/photo-1742627541273-33ebe14bf1f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: "LASIK & Laser Vision correction",
            description: "Personalized LVC counselling with bladeless, painless options including LASIK, SMILE, PRK, ICL—advanced technology for safe, lasting vision",
            image: "https://images.unsplash.com/photo-1722419136179-991a684eee53?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Cornea & Transplant Facilities",
            description: "Expert cornea specialists offering treatment for keratoconus, keratitis, corneal injuries, and advanced transplants like PKP, DALK, DMEK.",
            image: "https://plus.unsplash.com/premium_photo-1661607415636-119f7bfa0542?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Glaucoma Management",
            description: "Glaucoma specialists providing precise diagnosis and complete management, from advanced imaging to MIGS and major filtration surgeries.",
            image: "https://plus.unsplash.com/premium_photo-1683121054290-15cc28908ddb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Misaligned eyes/Squint",
            description: "Expert squint management using precise, step-by-step, patient-centered care for optimal correction and lasting, satisfactory results.",
            image: "https://plus.unsplash.com/premium_photo-1677333508737-6b6d642bc6d6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Eye lid problems",
            description: "Evidence-based eye care for socially disfiguring conditions like white eyes, shrinking eyes, droopy lids, and involuntary movements.",
            image: "https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Retina and Uvea Disorders",
            description: " Skilled ophthalmologists treating retinal and uveitic diseases—macular edema, diabetic retinopathy, ARMD, CRVO, CRAO, and more. ",
            image: "https://images.unsplash.com/photo-1718766907383-d85f07a0847b?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Pediatric eye care",
            description: "Comprehensive pediatric eye care using advanced automated and manual methods to ensure precise, child-focused treatment.",
            image: "https://plus.unsplash.com/premium_photo-1661281327960-f3de8390effc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Comprehensive eye care",
            description: "Expert care for common eye problems—red eyes, dry eyes, lazy eyes, myopia, chalazion, pterygium, and computer vision syndrome.",
            image: "https://images.unsplash.com/photo-1671810456796-48fd984dd413?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },


    ];

    return (
        <>
            {/* Services Section */}
            <section className="mb-8 relative px-2 md:px-10 bg-[#f0f0ff]" id='services'>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white rounded-2xl"></div> */}

                <div className="relative z-10 py-8 px-2">
                    <div className="text-center mb-15" >
                        <h2 className=" text-4xl md:text-5xl text-gray-800 font-bold mb-4">Our Services</h2>
                        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
                        {/* <p className="text-gray-900 text-3xl md:text-5xl">Comprehensive Eye Care Services in Noida</p> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
                        {services.map((service, index) => {
                            return (
                                <>
                                    <div key={index} class=" w-[430px] h-[400px]  mb-5 hover:cursor-pointer hover:scale-105 duration-300">
                                        <img src={service.image} alt="Surgery" class="w-full h-[250px] rounded object-cover" />
                                        <div class="flex flex-col justify-center p-3">
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