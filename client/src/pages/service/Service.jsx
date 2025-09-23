import React from 'react'

const Service = () => {
    return (
        <>
            <section className='service py-40 w-full px-3 md:px-10 bg-white' id='about'>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="colum left md:w-[50%]">
                        <img src="/assest/pic3.png" className='md:w-500 ' alt="Dr. Rinky Agarwal" />
                    </div>
                    <div className=" colum right md:w-[50%]">
                        <div className="content flex flex-col gap-10">
                            <h1 className="title text-3xl font-semibold text-gray-800 md:text-4xl"> Best Advanced Eye Care Services in Noida. </h1>
                            <p className="subtitle  text-lg md:text-xl leading-8">
                              At Navnetram Advanced Eye Care, we go beyond standard treatment to deliver personalized vision care with compassion and expertise. Located in the heart of Noida, our modern facility is equipped with advanced diagnostic and surgical technology to treat conditions like cataracts, glaucoma, refractive errors, and more. Our experienced ophthalmologists provide tailored solutions that blend medical excellence with genuine care—because restoring and protecting your vision is our commitment to improving everyday life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service