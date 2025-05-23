"use client"
import React, { useState, useEffect } from 'react';
import { Shield, Eye, Clock, Star, Calendar, Smile } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


export default function InlaysOnlays() {
  const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(40px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 0.8s ease-out'
  };

  const staggerDelay = (index : number) => ({
    ...fadeInUp,
    transition: `all 0.8s ease-out ${index * 0.15}s`
  });

  // const features = [
  //   { icon: Shield, title: "Minimal Tooth Reduction", color: "from-blue-500 to-blue-600" },
  //   { icon: Star, title: "Exceptional Strength", color: "from-green-500 to-green-600" },
  //   { icon: Eye, title: "Natural Aesthetics", color: "from-purple-500 to-purple-600" },
  //   { icon: Clock, title: "Long-Term Protection", color: "from-orange-500 to-orange-600" }
  // ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div 
            className="text-center space-y-8"
            style={isVisible ? fadeInUp : {}}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Preserve & Perfect<br />
              Your Smile with<br />
              <span className="text-yellow-300">Inlays and Onlays</span>
            </h1>
            <div className="flex text-black flex-col sm:flex-row justify-center items-center gap-4 text-xl md:text-2xl font-medium">
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                Stronger than a filling
              </span>
              <span className="hidden sm:block text-2xl">•</span>
              <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
                More conservative than a crown
              </span>
            </div>
            <div className="mt-12">
              <div className="bg-white bg-opacity-95 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                      <Image
                          src="/images/services/restorative/inlays/Image1.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Introduction */}
        <section className="mb-24">
          <div 
            className="text-center max-w-5xl mx-auto"
            style={isVisible ? staggerDelay(1) : {}}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At <span className="font-semibold text-indigo-600">Prudentia Micro Dental Care</span>, we use the latest in dental materials and techniques to restore your teeth with maximum strength and minimal intervention. Inlays and Onlays offer an ideal solution for teeth with moderate damage delivering the durability of a crown with the subtlety and conservation of a filling.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Inlays and Onlays */}
        <section className="mb-24">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(2) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              What Are Inlays and Onlays?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Inlays and onlays are custom-made restorations used to repair areas of decay or damage that are too extensive for a filling, but don&apos;t require a full crown.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div 
              className="space-y-8"
              style={isVisible ? staggerDelay(3) : {}}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                      <Image
                          src="/images/services/restorative/inlays/Image2.jpeg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />                 
              </div>
            </div>
            
            <div 
              className="space-y-8"
              style={isVisible ? staggerDelay(4) : {}}
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Inlays</h3>
                <p className="text-lg opacity-95">fit within the cusps (the top edges) of the tooth</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Onlays</h3>
                <p className="text-lg opacity-95">cover one or more cusps or the entire biting surface</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            style={isVisible ? staggerDelay(5) : {}}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Made from high-quality porcelain (ceramic) or tooth-colored composite resin, these restorations are fabricated in a lab to match your natural tooth structure and shade and then bonded to your tooth for a seamless and lasting result.
            </p>
          </div>
        </section>

        {/* Why Choose Inlays and Onlays */}
        <section className="mb-24">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(6) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Why Choose Inlays and Onlays?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Here&apos;s why many patients are choosing this advanced treatment option:
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl inline-block mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                      <Image
                          src="/images/services/restorative/inlays/Image3.png"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />               
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Minimal Tooth Reduction",
                description: "Only the damaged area is removed, preserving more of your healthy tooth structure",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Star,
                title: "Exceptional Strength", 
                description: "Far more durable than traditional fillings, especially for back teeth under heavy chewing forces",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Eye,
                title: "Natural Aesthetics",
                description: "Designed to match the exact shape, color, and texture of your tooth that they're virtually invisible",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Clock,
                title: "Long-Term Protection",
                description: "Resistant to wear and stain, and precisely fit to minimize bacteria and future decay",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={isVisible ? staggerDelay(7 + index) : {}}
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-24">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(11) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              What to Expect?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              This is typically a two-appointment procedure:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div 
              className="space-y-8"
              style={isVisible ? staggerDelay(12) : {}}
            >
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">First Visit</h3>
                </div>
                <p className="text-lg opacity-95 leading-relaxed">
                  We clean out the decayed or damaged portion, take precise impressions, and place a temporary restoration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Second Visit</h3>
                </div>
                <p className="text-lg opacity-95 leading-relaxed">
                  Your custom inlay or onlay is bonded to your tooth, polished, and adjusted for a perfect fit and bite.
                </p>
              </div>
            </div>

            <div 
              className="flex items-center justify-center"
              style={isVisible ? staggerDelay(13) : {}}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-6">
                  <Smile className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Perfect Result</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You&apos;ll walk out with a tooth that looks natural, feels strong, and lasts for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div 
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-16 text-white shadow-2xl"
            style={isVisible ? staggerDelay(14) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Restore the Right Way?
            </h2>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-8 backdrop-blur-sm relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                      <Image
                          src="/images/services/restorative/inlays/Image4.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />               
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95 max-w-4xl mx-auto">
              If you&apos;re looking for a conservative, cosmetic, and long-lasting solution for damaged teeth, inlays and onlays may be the ideal choice.
            </p>
            
            <p className="text-lg leading-relaxed mb-10 opacity-90 max-w-4xl mx-auto">
              Call <span className="font-semibold">Prudentia Micro Dental Care, Pimple Saudagar</span> today to schedule your consultation and find out how we can help keep your smile both strong and beautiful, the minimally invasive way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleOpenChatbot} className="bg-purple-400 text-indigo-900 px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}