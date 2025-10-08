import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    const images = [
        {
            url: '/assest/equipments/1st.png',
        },
        {
            url: '/assest/equipments/2nd.png',
        },
        {
            url: '/assest/equipments/3rd.png',
        },
        {
            url: '/assest/equipments/4th.png',
        },
        {
            url: '/assest/equipments/5th.jpg',
        },
        {
            url: '/assest/equipments/6th.png',
        },
        {
            url: '/assest/equipments/7th.png',
        },
        {
            url: '/assest/equipments/8th.png',
        },
    ];

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const getPrevIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    return (
        <section className='md:min-h-screen bg-gradient-to-br pb-40 md:pb-40 from-blue-900 via-blue-800 to-blue-950 pt-15'>
            <div className="text-center mb-15 loadAnimate" >
                <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">Our Equipments</h2>
                <div className="w-30 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
            </div>
            <div className=" flex items-center justify-center loadAnimate" >
                <div className="w-full md:px-10">
                    {/* Carousel Container with Navigation */}
                    <div className="relative flex items-center md:gap-6">
                        {/* Left Navigation Arrow */}
                        <button
                            onClick={prevSlide}
                            className=" hover:cursor-pointer hover:bg-blue-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-10 flex-shrink-0"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Images Container */}
                        <div className="flex-1 relative flex items-center justify-center md:gap-8">
                            {/* Left Preview Image */}
                            <div className="hidden md:block w-1/4 h-64 overflow-hidden rounded-xl opacity-50 transition-all duration-[800ms] ease-out hover:opacity-70">
                                <img
                                    src={images[getPrevIndex()].url}
                                    alt={images[getPrevIndex()].title}
                                    className="w-full h-full object-cover transition-all duration-[800ms] ease-out"
                                    style={{ willChange: 'transform, opacity' }}
                                    loading="eager"
                                />
                            </div>

                            {/* Center Main Image */}
                            <div className="w-full md:w-1/3 relative">
                                <div className="bg-blue-950 rounded-2xl shadow-2xl overflow-hidden">
                                    <div className="relative h-100 md:h-125 0 overflow-hidden">
                                        {images.map((image, index) => {
                                            const isActive = index === currentIndex;
                                            const isPrev = index === getPrevIndex();
                                            const isNext = index === getNextIndex();

                                            let slideClass = '';
                                            if (isActive) {
                                                slideClass = 'translate-x-0 opacity-100 z-20';
                                            } else if (direction === 'right') {
                                                if (isPrev) {
                                                    slideClass = '-translate-x-full opacity-0 z-10';
                                                } else {
                                                    slideClass = 'translate-x-full opacity-0 z-10';
                                                }
                                            } else {
                                                if (isNext) {
                                                    slideClass = 'translate-x-full opacity-0 z-10';
                                                } else {
                                                    slideClass = '-translate-x-full opacity-0 z-10';
                                                }
                                            }

                                            return (
                                                <div
                                                    key={index}
                                                    className={`absolute inset-0 transition-all duration-[800ms] ease-out ${slideClass}`}
                                                    style={{ willChange: 'transform, opacity' }}
                                                >
                                                    <img
                                                        src={image.url}
                                                        alt={image.title}
                                                        className="w-full h-full object-cover"
                                                        loading="eager"
                                                    />

                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Right Preview Image */}
                            <div className="hidden md:block w-1/4 h-64 overflow-hidden rounded-xl opacity-50 transition-all duration-[800ms] ease-out hover:opacity-70">
                                <img
                                    src={images[getNextIndex()].url}
                                    alt={images[getNextIndex()].title}
                                    className="w-full h-full object-cover transition-all duration-[800ms] ease-out"
                                    style={{ willChange: 'transform, opacity' }}
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Right Navigation Arrow */}
                        <button
                            onClick={nextSlide}
                            className=" hover:cursor-pointer hover:bg-blue-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl z-10 flex-shrink-0"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}