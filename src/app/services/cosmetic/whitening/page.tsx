"use client"
import React, { useState, useEffect } from 'react';
import { Star, Shield, Clock, Sparkles, Heart } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';

const TeethWhiteningPage = () => {
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

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s ease-out'
  });

  const slideInLeft = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'all 0.8s ease-out'
  });

  const slideInRight = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(50px)',
    transition: 'all 0.8s ease-out'
  });

  return (
    <div className="min-h-screen overflow-hidden py-5 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-400 via-purple-500 to-red-500">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div 
            id="hero"
            data-animate
            style={fadeInUp('hero')}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Brighten Your Smile at<br />
              <span className="text-purple-200">Prudentia Micro Dental Care</span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-purple-200 mr-3" />
              <p className="text-2xl md:text-3xl font-light">
                Whiter Teeth. Brighter Confidence. Younger You.
              </p>
              <Sparkles className="w-8 h-8 text-purple-200 ml-3" />
            </div>
            
            <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
              {/* <img src="/images/services/cosmetic/whitening/Image1.png" alt="Bright Smile" className="rounded-full" /> */}
                  <Image
                                              src="/images/services/cosmetic/whitening/Image1.png"
                                              alt="Modern denture solutions"
                                              fill
                                              className="object-cover"
                                              priority
                                            />
            </div>
            
            <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Ready to light up the room with your smile? At Prudentia Micro Dental Care, our professional teeth whitening treatments are designed to remove years of stains and discoloration safely, effectively, and with minimal sensitivity.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Choose Professional Teeth Whitening Section */}
        <section 
          id="why-choose"
          data-animate
          style={fadeInUp('why-choose')}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Professional Teeth Whitening?
            </h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you&apos;re preparing for a big event or simply want to refresh your smile, our whitening treatments can:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="benefits-left"
              data-animate
              style={slideInLeft('benefits-left')}
            >
              <div className="relative">
                <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8"></div>
                {/* <img src="/images/services/cosmetic/whitening/Image2.jpg" alt="Professional Teeth Whitening" className="relative w-full rounded-2xl shadow-2xl" /> */}
                    <Image
                                                src="/images/services/cosmetic/whitening/Image2.jpg"
                                                alt="Modern denture solutions"
                                                fill
                                                className="object-contain"
                                                priority
                                              />
              </div>
            </div>
            
            <div 
              id="benefits-right"
              data-animate
              style={slideInRight('benefits-right')}
              className="space-y-6"
            >
              {[
                { icon: <Star className="w-6 h-6" />, text: "Lift stubborn stains caused by coffee, tea, wine, smoking, and more", color: "bg-purple-100 text-purple-600" },
                { icon: <Clock className="w-6 h-6" />, text: "Be performed in-office for instant results, or at-home for your convenience", color: "bg-blue-100 text-blue-600" },
                { icon: <Sparkles className="w-6 h-6" />, text: "Be tailored to your desired level of brightness", color: "bg-purple-100 text-purple-600" },
                { icon: <Shield className="w-6 h-6" />, text: "Offer safe, dentist-supervised whitening with minimal to no sensitivity", color: "bg-purple-100 text-purple-600" }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit.text}</p>
                </div>
              ))}
              
              <div className="bg-gradient-to-r from-purple-500 to-red-500 text-white p-6 rounded-xl shadow-lg mt-8">
                <p className="text-lg leading-relaxed">
                  Our advanced formulas and precise application methods ensure that your enamel stays strong while your smile becomes visibly whiter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Is Teeth Whitening Safe Section */}
        <section 
          id="safety"
          data-animate
          style={fadeInUp('safety')}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Is Teeth Whitening Safe?
                </h2>
                <div className="w-20 h-1 bg-purple-200 mb-8"></div>
                <div className="text-2xl font-bold mb-6 text-purple-100">
                  Absolutely.
                </div>
                <p className="text-lg mb-6 text-purple-100 leading-relaxed">
                  At Prudentia, your comfort and safety come first. Dr. Bhushan personally ensures that your treatment is customized for your teeth type and aesthetic goals.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed">
                  We use protective barriers to shield your gums and soft tissues and guide you through the entire process from pre-treatment care to post-whitening maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Side Effects Section */}
        <section 
          id="side-effects"
          data-animate
          style={fadeInUp('side-effects')}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Are There Any Side Effects?
              </h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Teeth whitening is generally well tolerated, but you may experience temporary sensitivity to hot or cold foods and drinks. This usually resolves within a few days.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-blue-800 mb-2">Pro Tip:</h3>
                      <p className="text-blue-700">
                        We recommend using a sensitivity-friendly toothpaste to ease any discomfort during recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
       
            </div>
          </div>
        </section>

        {/* Reveal Your Radiant Smile Section */}
        <section 
          id="reveal-smile"
          data-animate
          style={fadeInUp('reveal-smile')}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Reveal Your Radiant Smile
            </h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
            <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
              {/* <img src="/images/services/cosmetic/whitening/Image3.jpg" alt="Radiant Smile Transformation" className="w-full rounded-2xl shadow-2xl mb-8" /> */}
                  <Image
                                              src="/images/services/cosmetic/whitening/Image3.jpg"
                                              alt="Modern denture solutions"
                                              fill
                                              className="object-contain"
                                              priority
                                            />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A brighter smile can take years off your appearance and give your confidence a real boost. If you&apos;ve been hiding your smile due to discoloration, it&apos;s time to rediscover your sparkle.
            </p>
            
            <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <p className="text-xl mb-8 leading-relaxed">
                Contact us today at Prudentia Micro Dental Care, Pimple Saudagar to schedule your whitening consultation — and get ready to smile with complete confidence!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={handleOpenChatbot} className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default TeethWhiteningPage;