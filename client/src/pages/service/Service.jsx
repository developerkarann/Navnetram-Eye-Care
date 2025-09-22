import React from 'react'

const Service = () => {
    return (
        <>
            <section className='service py-40 w-full px-3 md:px-10 bg-white' id='service'>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="colum left md:w-[50%]">
                        <img src="/assest/pic3.png" className='md:w-500 ' alt="Dr. Rinky Agarwal" />
                    </div>
                    <div className=" colum right md:w-[50%]">
                        <div className="content flex flex-col gap-10">
                            <h1 className="title text-3xl font-semibold text-gray-800 md:text-5xl">Leading <span className='text-gray-800'> Advanced Eye Care </span> Service in Noida </h1>
                            <p className="subtitle  text-lg">
                                Welcome to Navnetram advanced eye care, where modern medicine meets compassionate care
                                in the heart of Noida. Our expert ophthalmologists and staff
                                is dedicated to providing comprehensive eye care services tailored to
                                your unique needs. Whether you require routine check-ups or specialized
                                treatments, we ensure the highest standards of medical excellence and
                                patient comfort. At Navnetram, we believe in enhancing vision and improving lives one patient at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service