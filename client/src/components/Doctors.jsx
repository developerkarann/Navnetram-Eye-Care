import { Link } from "react-router-dom";

export default function Doctors() {


    const doctors = [
        {
            name: "Dr. Rinky Agarwal",
            title: "Super-Specialised Ophthalmologist",
            image: '/assest/images/drRinkyWithLogo.jpg',
            tags: ['MBBS Gold Medalist', 'AIIMS New Delhi', 'LHMC and MAMC/GNEC', 'MBBS', '100+ Publications']
        },
        {
            name: "Dr. Nitin Gupta",
            title: "Medicine Physician",
            tags: [" MBBS", "DNB", "FEBNM", "MANMS", "RSO-2"],
            image: '/assest/images/dr-nitin-gupta.jpg'
        },
    ];

    return (

        <div className=" mx-auto w-full bg-[#f0f0ff]">
            <div className="  lg:px-0 w-full overflow-hidden loadAnimate">
                <section className="pb-20 relative loadAnimate px-2 md:px-10  w-full bg-[#f0f0ff] py-5 " id='services'>
                    <div className="relative z-10 py-8 px-5 ">
                        <div className="text-center mb-20" >
                            <h2 className=" text-4xl md:text-5xl text-gray-800 font-bold mb-4">About Our Doctors</h2>
                            <div className="w-60 h-0.5 bg-blue-400 mx-auto mt-4 mb-5"></div>
                        </div>
                        <div className="flex  flex-col md:flex-row justify-center gap-15 place-items-center ">
                            {doctors.map((doctor, index) => {
                                return (
                                    <>
                                        <Link to='/about'>
                                            <div key={index} class="  sm:w-[500px] min-h-140 md:max-h-140 rounded shadow-2xl bg-blue-50 mb-5 hover:cursor-pointer hover:scale-105 duration-300">
                                                <img src={doctor.image} alt="Surgery" class="w-full h-[370px] rounded object-cover" />
                                                <div class="flex flex-col justify-center p-3 text-center ">
                                                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                                                    <p className="text-2xl text-blue-900 font-semibold mb-3">{doctor.title}</p>
                                                    <div className="flex text-white font-semibold flex-wrap gap-2 justify-center pt-2">
                                                        {
                                                            doctor.tags.map((item, i) => (
                                                                <span className="bg-blue-600/90 px-4 py-1 rounded-full text-sm border-2 border-white">{item}</span>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

            </div>
        </div>

    );
}