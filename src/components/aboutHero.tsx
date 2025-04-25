'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useChatbot } from './chatbotContext';

const AboutHero = () => {
    const { handleOpenChatbot } = useChatbot();

  const slides = [
    {
      id: 1,
      title: "Prudentia Micro Dental Care",
      subtitle: "Your trusted partner for comprehensive dental care in Pune",
      image: "/images/clinic1.jpg",
    },
    {
      id: 2,
      title: "State-of-the-Art Facility",
      subtitle: "Modern equipment for precise and comfortable treatments",
      image: "/images/clinic2.jpg",
    },
    {
      id: 3,
      title: "Expert Dental Team",
      subtitle: "Highly qualified professionals dedicated to your smile",
      image: "/images/team.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-12 md:py-16 overflow-hidden">
      {/* About Us Header */}
      <div className="container mx-auto px-6 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">About Us</h2>
        <div className="w-20 h-1 bg-purple-400 mx-auto"></div>
      </div>

      {/* Slideshow Container */}
      <div className="container mx-auto px-6">
        <div className="relative h-full w-full max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col md:flex-row items-center justify-center transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'
              }`}
            >
              {/* Text Content - Centered and properly aligned */}
              <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                <button onClick={handleOpenChatbot} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md">
                  Book Consultation
                </button>
              </div>

              {/* Image - Centered with proper spacing */}
              <div className="md:w-1/2 relative h-64 md:h-80 w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={slide.image}
                  alt={slide.subtitle}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-purple-50/30" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-purple-600 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-purple-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-purple-600" />
      </button>
    </div>
  );
};

export default AboutHero;