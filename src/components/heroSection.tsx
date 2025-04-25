'use client';
import { useEffect, useState } from "react";
import { useChatbot } from '@/components/chatbotContext';

const bannerImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];


const HeroSection = () => 
{
    const [currentSlide, setCurrentSlide] = useState(0);
    const { handleOpenChatbot } = useChatbot();

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    return (
        <section className="relative h-[90vh] border-b">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro Dental Clinic
            </h1>
            <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
              <span className="mr-1">Your</span>
              <span className="mr-1">Journey</span>
              <span className="mr-1">to</span>
              <span className="mr-1">a</span>
              <span className="mr-2">Perfect</span>
              <span className="relative inline-block before:absolute before:-inset-1 px-1 before:block before:-skew-y-3 before:bg-purple-500">
                <span className="relative text-white dark:text-gray-950">
                  Smile
                </span>
              </span>
              <span className="ml-1">Starts</span>
              <span className="ml-1">Here</span>
            </blockquote>
            <div className="flex items-center justify-center">
              <button
                onClick={handleOpenChatbot}
                className="mt-10 text-white bg-gradient-to-r from-purple-500 
                via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 
                focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 
                shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 
                font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}


export default HeroSection;