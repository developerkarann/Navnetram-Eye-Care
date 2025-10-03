import React, { useState, useEffect, useRef } from 'react';
import { Award, Shield, DollarSign, FileCheck, Heart, Zap, Building2, FlaskConical } from 'lucide-react';

const WhyChooseUs = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const features = [
    {
      icon: Award,
      title: 'Expert',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Ethical',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Economical',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Evidence-based',
      subtitle: 'international level protocols',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Patient-first',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Ultramodern',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Building2,
      title: 'Comprehensive',
      subtitle: 'all under one roof',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: FlaskConical,
      title: 'Research-oriented',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      let animationFrameId;
      let lastTimestamp = 0;
      const speed = 0.5; // pixels per frame

      const animate = (timestamp) => {
        if (lastTimestamp === 0) {
          lastTimestamp = timestamp;
        }

        const delta = timestamp - lastTimestamp;

        if (delta >= 16) { // ~60fps
          setScrollPosition((prev) => {
            const container = scrollRef.current;
            if (container) {
              const maxScroll = container.scrollWidth / 2; // Half because we duplicate
              const newPosition = prev + speed;

              if (newPosition >= maxScroll) {
                return 0;
              }
              return newPosition;
            }
            return prev;
          });
          lastTimestamp = timestamp;
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [isPaused]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="w-full pb-30 bg-blue-50  py-16 px-4">
      <div className=" mx-auto">
        <div className="text-center mb-15" >
          <h2 className=" text-4xl md:text-5xl text-gray-800 font-bold mb-4">Why Choose Us ?</h2>
          <div className="w-30 h-0.5 bg-blue-500 mx-auto mt-4 mb-5"></div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-10 pb-4" style={{ width: 'fit-content' }}>
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${feature.color} rounded-full p-6 relative`}>
                    <feature.icon className={`w-14 h-14 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;