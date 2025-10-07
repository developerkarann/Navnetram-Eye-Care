import React, { useState, useEffect } from "react";



const Testimonials = () => {

    const reviews = [
        {
            review: " I would like to express my heartfelt gratitude to Dr. Rinky Agarwal for the exceptional care she provided during my mom's eye surgery. Dr. Agarwal's expertise, patience, and kindness truly made a significant difference in our experience. She took the time to thoroughly explain the procedure, ensuring my mom felt calm and confident throughout the process. Her skill during surgery was remarkable, and my mom's vision improved faster than we could have hoped. I highly recommend her to anyone seeking a caring and highly skilled eye surgeon. Thank you for giving my mom back her clear vision!",
            name: "Ankit Aggarwal",
            dp: "https://lh3.googleusercontent.com/a-/ALV-UjUXWSZhL1UTXR3YkXZzr93870iyolqe8BB1IUziHMI5qPrFJpo=w72-h72-p-rp-mo-br100",
        },
        {
            review: " I recently visited Dr. Rinky for an eye test, and I must say, it was an exceptional experience from start to finish. Dr. Rinky Agarwal is not only highly knowledgeable but also incredibly patient and attentive. She took the time to explain every step of the process and ensured that I was comfortable throughout the examination. I truly appreciate her professionalism, warm demeanor, and commitment to providing top-quality eye care. I highly recommend Dr. Rinky to anyone looking for a thorough and reliable eye check-up. She is undoubtedly one of the best in her field!",
            name: "Ruchir Mehta",
            dp: "https://lh3.googleusercontent.com/a-/ALV-UjWUxflmhrkul6JT5jKqMOj1CvYvm-iG-9SkOVyWDh15JSuGaBfB4Q=w72-h72-p-rp-mo-br100",
        },
        {
            review: "I highly recommend Dr. Rinki Agarwal for cataract surgery. From the moment we met her, we felt confident in her expertise and professionalism. The surgery was quick and painless, and the results have been life-changing. My mother’s vision has greatly improved, and we couldn’t be more pleased with the outcome. Dr. Rinki and the entire team were caring, patient, and answered all our questions. If you're considering cataract surgery, I would trust Dr. Rinki Agarwal without hesitation!",
            name: "Tanuj Singhal",
            dp: "https://lh3.googleusercontent.com/a-/ALV-UjW00VzuXzay_H7K2uXKIo_buaHO9_kp9j7QXPW5aG-zRwD-I2TE=w72-h72-p-rp-mo-br100",
        },

    ];


    return (
        <div className="w-full px-6 bg-white py-10 pb-30" id="testimonials">
            <div className="mb-20 gap-10 loadAnimate">
                <h1 className=" text-4xl md:text-5xl font-bold text-center mb-2 text-gray-800">Testimonials </h1>
                <div className=" w-30 md:w-50 h-0.5 bg-blue-400 mx-auto mt-4 mb-5"></div>
                <h2 className=" text-2xl md:text-4xl font-semibold text-center mb-2 text-gray-800">Our Results Speak Louder Than Words </h2>

            </div>
            <div className="relative flex flex-col items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {
                        reviews?.map((item, i) => (
                            <div className="bg-white loadAnimate shadow-lg rounded-xl p-6 sm:p-8 max-w-md w-full transition-all duration-500">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={item.dp}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-300 object-cover"
                                    />
                                    <p className="text-gray-700 text-base sm:text-lg italic mb-4 text-center">
                                        "{item.review}"
                                    </p>
                                    <span className="font-semibold text-blue-800 text-base">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;