"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Shield, Leaf, Users } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';

const HolisticDentistryPage = () => {
      const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id : string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInLeft = (id : string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInRight = (id : string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  return (
    <div className="min-h-screen overflow-hidden py-5 bg-gradient-to-br from-purple-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative  bg-gradient-to-r from-purple-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div 
            className="text-center max-w-4xl mx-auto"
            id="hero"
            data-animate
            style={fadeInUp('hero')}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight break-words">
              Holistic Dentistry at<br />
              <span className="text-pink-300">Prudentia Micro Dental Care</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 break-words">
              Healing Beyond the Smile. A Whole-Body Approach to Oral Health.
            </p>
            <div className="bg-white bg-opacity-20 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-white border-opacity-30">
                    <Image
                                  src="/images/services/preventive/holistic/Image1.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-70" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="intro"
            data-animate
            style={fadeInUp('intro')}
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 px-2">
              Holistic healing is the art and science of treating the whole person ie. body, breath, mind, intellect, and 
              the state of inner bliss to achieve complete health and wellness.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12 px-2">
              At Prudentia Micro Dental Care, we embrace this philosophy through holistic dentistry, a progressive 
              approach that integrates modern dental science with natural healing principles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Alternative Dentistry</h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Biocompatible Dentistry</h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Integrative or Natural Dentistry</h3>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
              This form of care recognizes the deep interconnection between oral health and overall well-being, 
              offering solutions that nurture the body and mind in harmony.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Different Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div 
                id="different"
                data-animate
                style={slideInLeft('different')}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 text-center lg:text-left">
                  What Makes Holistic Dentistry Different?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
                  Unlike traditional dentistry, holistic dental care takes a broader view by considering the impact of dental 
                  materials, procedures, and lifestyle choices on your entire body. We focus on prevention, biocompatibility, 
                  and minimally invasive treatments that support your total health - physically, emotionally, and spiritually.
                </p>
              </div>
              <div 
                className="flex relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8 justify-center order-1 lg:order-2"
                id="different-img"
                data-animate
                style={slideInRight('different-img')}
              >
                <Image
                                  src="/images/services/preventive/holistic/Image2.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mercury-Free Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-8 sm:mb-12"
              id="mercury-title"
              data-animate
              style={fadeInUp('mercury-title')}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
                Working Towards a Mercury-Free World
              </h2>
              <div className="flex  flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-4xl mx-auto">
                          <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
                              <Image
                                  src="/images/services/preventive/holistic/Image3.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                                </div>
                                <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
                           <Image
                                  src="/images/services/preventive/holistic/Image4.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                                </div>
              </div>
            </div>
            
            <div 
              className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg mx-2"
              id="mercury-content"
              data-animate
              style={fadeInUp('mercury-content')}
            >
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                One of the foundational principles of holistic dentistry is the avoidance of mercury in any dental procedure.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Mercury, a component of traditional &quot;silver&quot; amalgam fillings, is a neurotoxic metal with well-documented 
                long-term health risks, including metal toxicity.
              </p>
            </div>
            
            <div 
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mx-2"
              id="mercury-commitment"
              data-animate
              style={fadeInUp('mercury-commitment')}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">We are committed to:</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-gray-700">Never using mercury-based materials</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-gray-700">
                    Safely replacing old amalgam fillings with non-toxic, modern alternatives such as composite 
                    resins or ceramic restorations
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-gray-700">Ensuring every material used is biocompatible with your body</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diet Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div 
                className="flex justify-center order-2 lg:order-1"
                id="diet-img"
                data-animate
                style={slideInLeft('diet-img')}
              >
                <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
                             <Image
                                  src="/images/services/preventive/holistic/Image5.png"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                                </div>
              </div>
              <div 
                className="order-1 lg:order-2"
                id="diet-content"
                data-animate
                style={slideInRight('diet-content')}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 text-center lg:text-left">
                  Your Diet. Your Health. Your Smile.
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-2">
                  Holistic dental care goes far beyond the dental chair. At Prudentia, we provide personalized nutritional 
                  guidance, helping you understand how your diet plays a crucial role in your oral and systemic health.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
                  From reducing processed sugars to supporting gut health, we&apos;ll help you build a balanced, sustainable 
                  eating pattern that protects both your teeth and your body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div 
                id="lifestyle-content"
                data-animate
                style={slideInLeft('lifestyle-content')}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 text-center lg:text-left">
                  A Lifestyle-Based Approach to Dental Wellness
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 px-2">
                  Holistic dentistry also addresses lifestyle choices that impact long-term health. During your consultation, 
                  we&apos;ll openly discuss habits such as:
                </p>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 px-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-700">Smoking and tobacco use</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-700">Excessive alcohol consumption</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-700">Chronic stress and poor sleep</span>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2">
                  These factors not only affect your general health but are also major contributors to conditions like gum 
                  disease, tooth decay, and oral cancers.
                </p>
              </div>
              <div 
                className="flex justify-center order-1 lg:order-2"
                id="lifestyle-img"
                data-animate
                style={slideInRight('lifestyle-img')}
              >
                <div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
                              <Image
                                  src="/images/services/preventive/holistic/Image6.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 px-2"
              id="why-choose-title"
              data-animate
              style={fadeInUp('why-choose-title')}
            >
              Why Choose Holistic Dentistry?
            </h2>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              id="why-choose-grid"
              data-animate
              style={fadeInUp('why-choose-grid')}
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Mercury-free and metal-free dental care</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Emphasis on prevention, not just treatment</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Personalized guidance for diet, lifestyle, and wellness</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Mindful and minimally invasive procedures</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-2">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg text-gray-700">Biocompatible materials and safe treatment protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div 
                id="location-content"
                data-animate
                style={slideInLeft('location-content')}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 text-center lg:text-left">
                  Where Can You Find Holistic Dentistry in Pune?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 px-2">
                  Prudentia Micro Dental Care, Pimple Saudagar is among the few practices in Pune offering a truly 
                  holistic dental experience. Dr. Bhushan and our expert team combine advanced training, modern 
                  technologies, and holistic principles to offer care that restores not just your teeth but your entire sense of 
                  well-being.
                </p>
                <div className="bg-gradient-to-r from-purple-600 to-purple-600 text-white p-4 sm:p-6 rounded-lg mx-2">
                  <p className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Discover the power of healing dentistry.</p>
                  <p className="text-base sm:text-lg opacity-90">
                    Contact us today to learn more about our Holistic Dental Services or to book a Micro-Consultation.
                  </p>
                </div>
              </div>
              <div 
                className="flex justify-center order-1 lg:order-2"
                id="location-img"
                data-animate
                style={slideInRight('location-img')}
              ><div className='relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8'>
                            <Image
                                  src="/images/services/preventive/holistic/Image8.jpg"
                                  alt="Modern denture solutions"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="contact"
            data-animate
            style={fadeInUp('contact')}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-2">Ready to Transform Your Dental Experience?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Take the first step towards holistic dental wellness today.
            </p>
            <button onClick={handleOpenChatbot} className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HolisticDentistryPage;