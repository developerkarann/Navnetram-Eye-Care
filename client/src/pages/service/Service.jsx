import React from 'react'

const Service = () => {
    return (
        <>
            <section className='service py-40 w-full px-3 md:px-10 bg-white' id='about'>
                <div className="flex flex-col md:flex-row  items-center "> 
                    <div className="colum left md:w-[45%] loadAnimate flex justify-end md:px-10 ">
                        <img src="/assest/images/cataract.jpg" className=' md:w-130  justify-end' alt="Dr. Rinky Agarwal" />
                    </div>
                    <div className=" colum right md:w-[55%] ">
                        <div className="content flex flex-col loadAnimate gap-10">
                            <h1 className="title text-3xl font-bold text-gray-800 md:text-5xl"> Leading <span className='text-blue-900'> Advanced Eye Care </span>  in heart of Noida </h1>
                            <p className="subtitle text-gray-800 text-lg md:text-xl leading-relaxed">
                                Welcome to Navnetram advanced eye care, where modern medicine meets compassion in the heart
                                of Noida. Our expert ophthalmologist(s) and staff is dedicated to providing comprehensive eye care
                                services tailored to your unique needs, all under one roof. Whether you require routine check-ups or
                                specialized treatments, we ensure the highest standards of medical excellence and patient comfort.
                                At Navnetram, we believe in imparting new sight, new hope, one eye at a time.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service