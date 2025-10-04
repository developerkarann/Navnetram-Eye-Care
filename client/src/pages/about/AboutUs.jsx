import { Award, GraduationCap, Eye, Users, BookOpen, MapPin, Stethoscope, Star } from 'lucide-react';
import AboutPage from './AboutPage';

export default function AboutUs() {
  const drRinkyAchievements = [
    { icon: Eye, number: "10,000+", label: "Cataract Surgeries" },
    { icon: Award, number: "500+", label: "Corneal Transplants" },
    { icon: Users, number: "2,000+", label: "LASIK Procedures" },
    { icon: Star, number: "99.99%", label: "Success Rate" }
  ];

  const drRinkyLocations = [
    "Navnetram Eye Centre",
    "Visitech Eye Centre, New Delhi",
    "AB Laser Eye Centre, Greater Noida",
    "Drishti Eye and ENT Centre, Ghaziabad",
    "Kumar Eye Centre, Dadri"
  ];

  const drRinkySpecializations = [
    "Cornea & Ocular Surface",
    "Cataract Surgery with Premium IOL",
    "Corneal Transplants",
    "LASIK & Refractive Surgery",
    "Glaucoma Management",
    "Strabismus",
    "Oculoplasty",
    "Comprehensive Eye Care"
  ];


  const doctors = [
    {
      name: "Dr Rinky Agarwal",
      title: "Super-Specialised Ophthalmologist",
      image: '/assest/portrait.jpeg',
      tags: ['MBBS Gold Medalist', 'AIIMS New Delhi', 'LHMC and MAMC/GNEC', 'MBBS', '100+ Publications']
    },
    {
      name: "Dr Rinky Agarwal",
      title: "Super-Specialised Ophthalmologist",
      tags: ["Excellence", "fineness", "quality", "outstanding", "exceptional", "superior", "distinct", "brilliance"],
      image: 'https://images.unsplash.com/photo-1722419136179-991a684eee53?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  return (
    <div className="">
      {/* Header */}
      {/* <div className="bg-blue-50 text-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-3">About Our Doctors</h1>
        </div>
      </div>

      <div className="imageContainer w-full p-2">
        <div className=" flex flex-col md:flex-row justify-center gap-5">
          <div>
            <img src="/assest/images/04.jpeg" className='md:h-160' alt="" />
          </div>
          <div className='flex md:flex-col overflow-hidden gap-1'>
            <img src="/assest/images/03.jpeg" className='md:w-110' alt="" />
            <img src="/assest/images/005.jpeg" className='md:w-110' alt="" />
          </div>
        </div>
      </div> */}

      <div className=" mx-auto px-4 sm:px-6 lg:px-0 pb-16">
        {/* Dr Rinky Agarwal Section */}
        <div className="mb-20"> 
          <div className="bg-white  overflow-hidden">
            <section className="mb-8 relative px-2 md:px-10 " id='services'>
              <div className="relative z-10 py-8 px-2">
                <div className="text-center mb-15" >
                  <h2 className=" text-4xl md:text-5xl text-gray-800 font-bold mb-4">About Our Doctors</h2>
                  <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
                  {/* <p className="text-gray-900 text-3xl md:text-5xl">Comprehensive Eye Care Services in Noida</p> */}
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-20 place-items-center ">
                  {doctors.map((doctor, index) => {
                    return (
                      <>
                        <div key={index} class=" w-[500px] h-[650px] rounded-2xl bg-white mb-5 hover:cursor-pointer hover:scale-105 duration-300">
                          <img src={doctor.image} alt="Surgery" class="w-full h-[450px] rounded object-cover" />
                          <div class="flex flex-col justify-center p-3 text-center ">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-2">{doctor.name}</h2>
                            <p className="text-xl text-blue-900 font-semibold mb-3">{doctor.title}</p>
                            <div className="flex text-white flex-wrap gap-2 justify-center pt-2">
                              {
                                doctor.tags.map((item, i) => (
                                  <span className="bg-blue-600/90 px-4 py-1 rounded-full text-sm border-2 border-white">{item}</span>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>



            {/* Achievements Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-blue-50">
              {drRinkyAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl  p-2 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">{achievement.number}</h3>
                  <p className="text-xl text-blue-600">{achievement.label}</p>
                </div>
              ))}
            </div>

            {/* About Content */}
            <div className="p-8 px-0 md:px-20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6" />
                  About Dr Rinky Agarwal
                </h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Dr Rinky Agarwal is a leading super-specialised ophthalmologist in Delhi-NCR with vast surgical aptitude gathered from premier institutes of India. With a strong academic background from AIIMS (New Delhi) and a commitment towards patient care, research and teaching, Dr Rinky focuses on holistic and comprehensive eye care for all age groups, with a special interest in managing complex cases pertaining to ophthalmic specialities such as cornea, ocular surface, strabismus, and oculoplasty.
                  </p>
                  <p>
                    She has single-handedly performed 10000+ cataract surgeries with premium IOL implants, 500+ corneal transplants and 2000+ LASIK procedures with 99.99% success rates. She is on the forefront of glaucoma diagnosis using cutting-edge technology like OCT optic nerve scans, visual field testing and pachymetry, besides performing major and minor GFS.
                  </p>
                  <p>
                    She served a successful tenure as a clinician, academician, and mentor at premier institutes such as AIIMS (New Delhi), LHMC and MAMC/GNEC. Besides, she is a gold medalist in MBBS from Osmania Medical College, the apex govt medical college in Andhra Pradesh.
                  </p>
                  <p>
                    She has numerous academic accolades with 100+ publications in multiple peer-reviewed national and international journals and conferences. Her professional aspiration is to deliver individually-tailored, evidence-based and ethical eye care in a compassionate manner, simultaneously excelling in academics and research.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {drRinkySpecializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-200 flex-shrink-0"></div>
                        <span className="text-sm font-semibold">{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Available At
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {drRinkyLocations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors duration-300 border-l-4 border-blue-600"
                    >
                      <p className="text-gray-800 font-medium">{location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}