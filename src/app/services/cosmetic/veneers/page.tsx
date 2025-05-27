"use client"
import React, { useState, useEffect } from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';


const DentalVeneersPage = () => {
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

  return (
    <div className="min-h-screen overflow-hidden py-5 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div 
            id="hero"
            data-animate
            style={fadeInUp('hero')}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dental Veneers: A Simple Way to<br />
              <span className="text-yellow-300">Transform Your Smile</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 font-light">
              Crafted Smiles with Precision, Art & Technology
            </p>
            <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
              {/* <img src="/images/services/cosmetic/veneers/Image1.jpg" alt="Dental Veneers" className="rounded-full object-cover
              " /> */}

                              <Image
                                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                                src="hero/Services/cosmetic/6. Veneers/confident-beautiful-smile-cosmetic-dentistry-prudentia-pune.jpg"
                                alt="Modern denture solutions"
                                fill
                                className="object-contain"
                                priority
                              />
                        
            </div>
            <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              At Prudentia Micro Dental Care, Pimple Saudagar we specialize in enhancing your smile with precision-crafted dental veneers, thin, tooth-colored shells bonded to the front of your teeth to dramatically improve their shape, color, and appearance.
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
        
        {/* What Are Dental Veneers Section */}
        <section 
          id="what-are-veneers"
          data-animate
          style={fadeInUp('what-are-veneers')}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Are Dental Veneers?
              </h2>
              <div className="w-20 h-1 bg-purple-600 mb-6"></div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dental veneers are ultra-thin, custom-made shells, typically made from porcelain or composite resin, that are permanently bonded to the front surface of your teeth. Veneers are an ideal solution for addressing a variety of cosmetic concerns, including:
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Chipped or broken teeth',
                    'Discoloration that doesn\'t respond to whitening',
                    'Gaps between teeth',
                    'Uneven or small-sized teeth',
                    'Misshapen or pointed teeth'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700 mt-6 font-medium bg-purple-50 p-4 rounded-lg">
                  For most smile makeovers, veneers are applied to the top front 6 to 8 teeth to create a natural, symmetrical appearance.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-10"></div>
                {/* <img src="/images/services/cosmetic/veneers/Image2.jpg" alt="Dental Veneers Process" className="relative w-full rounded-2xl shadow-2xl" /> */}
                      <Image
                        urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                                src="hero/Services/cosmetic/6. Veneers/cosmetic-front-teeth-issues-collage-prudentia-dental-care-pimple-saudagar.jpg"
                                alt="Modern denture solutions"
                                fill
                                className="object-contain"
                                priority
                              />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Dental Veneers */}
        <section 
          id="types-of-veneers"
          data-animate
          style={fadeInUp('types-of-veneers')}
          className="mb-20"
        >
          <div className="text-center mb-12 relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of Dental Veneers
            </h2>
            <div className=" bg-purple-100 mx-auto mb-6">
            <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                  <Image
  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                                src="hero/Services/cosmetic/6. Veneers/porcelain-veneers-smile-makeover-cosmetic-dentistry-pune.jpeg"
                                alt="Modern denture solutions"
                                fill
                                className="object-contain"
                                priority
                              />
          </div>
          </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Porcelain Veneers:</h3>
              <p className="text-gray-700 leading-relaxed">
                Durable, stain-resistant, and known for their natural tooth-like appearance. They typically require slight reshaping of the tooth structure.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Composite Resin Veneers:</h3>
              <p className="text-gray-700 leading-relaxed">
                More conservative and quicker to apply, often completed in a single visit. Ideal for smaller cosmetic corrections.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-xl max-w-3xl mx-auto">
              There are two main types of veneers we use at Prudentia: Our expert team will assess your needs and recommend the best type of veneer to meet your goals.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          id="benefits"
          data-animate
          style={fadeInUp('benefits')}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-800  rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What Are the Benefits of Veneers?
                </h2>
                <div className="w-20 h-1 bg-yellow-300 mb-8"></div>
                <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                {/* <img src="/images/services/cosmetic/veneers/Image4.jpg" alt="Benefits of Veneers" className="w-full rounded-lg shadow-2xl mb-8" /> */}
                      <Image
                        urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                                src="hero/Services/cosmetic/6. Veneers/porcelain-veneers-smile-makeover-cosmetic-dentistry-pune.jpg"
                                alt="Modern denture solutions"
                                fill
                                className="object-contain"
                                priority
                              />
                              </div>
              </div>
              <div>
                <p className="text-xl mb-8 text-purple-100">
                  Dental veneers offer a comprehensive cosmetic solution with numerous advantages:
                </p>
                <div className="grid gap-4">
                  {[
                    'Instantly improve tooth shape and color',
                    'Close gaps between teeth',
                    'Correct chips, cracks, and asymmetry',
                    'Provide a natural, bright smile',
                    'Long-lasting results with proper care'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                      <Star className="w-6 h-6 text-yellow-300 mr-4 flex-shrink-0" />
                      <span className="text-lg text-black">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <p className="text-lg font-medium text-black">
                    With good oral hygiene and regular dental visits, porcelain veneers can last 10–20 years, offering a long-term solution to common smile concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Are Veneers Right for You */}
        <section 
          id="right-for-you"
          data-animate
          style={fadeInUp('right-for-you')}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="lg:order-last">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Are Veneers Right for You?
              </h2>
              <div className="w-20 h-1 bg-purple-600 mb-6"></div>
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
              {/* <img src="/images/services/cosmetic/veneers/Image5.jpg" alt="Veneer Consultation" className="w-full rounded-2xl shadow-xl mb-6" /> */}
                    <Image
                      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                                src="hero/Services/cosmetic/6. Veneers/front-teeth-gap-closure-decay-repair-cosmetic-fillings-smile-makeover-prudentia-pimple-saudagar.jpg"
                                alt="Modern denture solutions"
                                fill
                                className="object-contain"
                                priority
                              />
                              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you&apos;re bothered by cosmetic imperfections in your front teeth, veneers might be your perfect solution. They&apos;re ideal for patients looking for:
              </p>
              <div className="space-y-4">
                {[
                  'A dramatic yet natural smile transformation',
                  'A minimally invasive alternative to crowns',
                  'A confidence boost from a brighter, more uniform smile'
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-purple-50 p-4 rounded-lg">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* What Makes Us Different */}
        <section 
          id="what-makes-different"
          data-animate
          style={fadeInUp('what-makes-different')}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Makes Prudentia Micro Dental Care Different?
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The artistry of smile design</h3>
            </div>
            
            <div className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">The precision of advanced dental technology</h3>
            </div>
            
            <div className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">A holistic, patient-centered approach</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              At Prudentia, we combine: ...to deliver a smile you&apos;ll love for years to come.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          data-animate
          style={fadeInUp('cta')}
          className="text-center"
        >
          <div className="bg-gradient-to-r  from-purple-400 via-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Smile Makeover?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether it&apos;s one tooth or a full smile transformation, we can help you achieve a seamless, confident look with veneers. Schedule your Micro-Consultation at Prudentia Micro Dental Care today and take the first step toward your dream smile!
            </p>
            <button onClick={handleOpenChatbot} className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </main>


    </div>
  );
};

export default DentalVeneersPage;