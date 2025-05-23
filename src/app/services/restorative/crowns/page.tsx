"use client"
import React, { useState, useEffect } from 'react';
import { Shield, Eye, CheckCircle, Microscope, Star, Calendar } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


export default function CrownsBridges() {
    const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(50px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 0.9s ease-out'
  };

  const staggerDelay = (index : number) => ({
    ...fadeInUp,
    transition: `all 0.9s ease-out ${index * 0.2}s`
  });

  const crownFeatures = [
    { icon: Shield, title: "Strength", description: "to support chewing and biting forces" },
    { icon: Eye, title: "Protection", description: "against further damage or fracture" },
    { icon: Star, title: "Aesthetics", description: "to match your natural teeth beautifully" }
  ];

  const bridgeFeatures = [
    "Restore chewing efficiency",
    "Maintain the integrity of your bite", 
    "Prevent shifting of adjacent teeth",
    "Enhance smile aesthetics"
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-purple-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div 
            className="text-center space-y-8"
            style={isVisible ? fadeInUp : {}}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Dental Crowns & Bridges<br />
              at <span className="text-purple-400">Prudentia Micro</span><br />
              Dental Care
            </h1>
            <div className="flex  text-black flex-wrap justify-center gap-6 text-xl md:text-2xl font-semibold">
              <span className="bg-white bg-opacity-15 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                Precision
              </span>
              <span className="bg-white bg-opacity-15 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                Protection
              </span>
              <span className="bg-white bg-opacity-15 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                Performance
              </span>
            </div>
            <div className="mt-12 ">
              <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 max-w-4xl mx-auto relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                       <Image
                          src="/images/services/restorative/crowns/Image1.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Introduction */}
        <section className="mb-28">
          <div 
            className="text-center max-w-6xl mx-auto"
            style={isVisible ? staggerDelay(1) : {}}
          >
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-purple-100">
              <p className="text-lg md:text-2xl text-purple-700 leading-relaxed">
                When a tooth has suffered significant damage whether due to decay, trauma, or root canal treatment restoring its strength, shape, and function becomes essential. At <span className="font-bold text-purple-600">Prudentia Micro Dental Care</span>, we offer advanced crowns and bridges that combine cutting-edge technology with the highest standards of quality and aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* What Is a Dental Crown */}
        <section className="mb-28">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(2) : {}}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-12">
              What Is a Dental Crown?
            </h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl inline-block mb-12 border border-purple-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                        <Image
                          src="/images/services/restorative/crowns/Image2.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                          />
              
            </div>
            
            <p className="text-xl text-purple-700 max-w-5xl mx-auto leading-relaxed mb-16">
              A dental crown is a custom-made cap that covers the entire surface of a weakened or damaged tooth. It restores:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {crownFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
                style={isVisible ? staggerDelay(3 + index) : {}}
              >
                <div className="bg-gradient-to-r from-purple-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-purple-700 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div 
            className="bg-gradient-to-r from-slate-800 to-purple-800 rounded-3xl p-10 md:p-16 text-white"
            style={isVisible ? staggerDelay(6) : {}}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Advanced Technology & Materials</h3>
            <p className="text-lg leading-relaxed mb-8 text-center opacity-95">
              We work with ISO-certified international labs to craft crowns using:
            </p>
            
            <div className="grid md:grid-cols-3 text-black gap-6 mb-10">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center">
                <h4 className="font-bold text-xl mb-3">CAD-CAM Technology</h4>
                <p className="opacity-90">digital technology for ultra-precise fit</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center">
                <h4 className="font-bold text-xl mb-3">MLS Techniques</h4>
                <p className="opacity-90">Metal Laser Sintered for enhanced strength</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center">
                <h4 className="font-bold text-xl mb-3">Premium Materials</h4>
                <p className="opacity-90">metal alloys, ceramics, E-max, and more</p>
              </div>
            </div>
            
            <div className="bg-purple-500 bg-opacity-20 rounded-2xl p-8 border border-purple-400/30">
              <p className="text-lg text-center leading-relaxed">
                Every patient receives a same-day temporary crown to protect the tooth and ensure stability until the final crown is ready.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-28">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(7) : {}}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-12">
              Why Choose Us for Your Crowns?
            </h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl inline-block mb-12 border border-purple-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                   <Image
                          src="/images/services/restorative/crowns/Image3.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                          />
            </div>
          </div>

          <div 
            className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-purple-100"
            style={isVisible ? staggerDelay(8) : {}}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mr-6">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-purple-800">
                Dental Microscope-Guided Preparation
              </h3>
            </div>
            
            <p className="text-xl text-purple-700 text-center mb-10">
              We use high-magnification dental microscopes to ensure:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Minimal tooth reduction</h4>
                <p className="text-purple-700">preserving healthy enamel</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Meticulous crown fit</h4>
                <p className="text-purple-700">for superior comfort and longevity</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">30x magnified inspections</h4>
                <p className="text-purple-700">to fine-tune every detail of your restoration</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200">
              <p className="text-lg text-purple-700 text-center leading-relaxed">
                This attention to detail dramatically reduces food lodgment, improves gum health, and minimizes the risk of recurrent decay giving your crown and tooth a longer life.
              </p>
            </div>
          </div>
        </section>

        {/* What Is a Dental Bridge */}
        <section className="mb-28">
          <div 
            className="text-center mb-16"
            style={isVisible ? staggerDelay(9) : {}}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-purple-800 mb-12">
              What Is a Dental Bridge?
            </h2>
            <p className="text-xl text-purple-700 max-w-5xl mx-auto leading-relaxed mb-12">
              A dental bridge replaces one or more missing teeth by anchoring to neighboring healthy teeth (or implants) with crowns. Bridges:
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl inline-block mb-12 border border-purple-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                   <Image
                          src="/images/services/restorative/crowns/Image4.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                          />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {bridgeFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                style={isVisible ? staggerDelay(10 + index) : {}}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-purple-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <div 
            className="text-center"
            style={isVisible ? staggerDelay(14) : {}}
          >
            <p className="text-lg text-purple-700 leading-relaxed max-w-4xl mx-auto">
              They&apos;re an excellent option, especially when surrounding teeth require crowns themselves allowing for a comprehensive restoration that strengthens your entire smile.
            </p>
          </div>
        </section>

        {/* Why Our Bridges Stand Out */}
        <section className="mb-28">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-16 text-white text-center"
            style={isVisible ? staggerDelay(15) : {}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why Our Bridges Stand Out
            </h2>
            
            <div className="grid text-black md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Custom-crafted to precision</h3>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Designed for longevity and strength</h3>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <Eye className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Seamless integration for natural look and feel</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div 
            className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-purple-100"
            style={isVisible ? staggerDelay(16) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8">
              Think You May Need a Crown or Bridge?
            </h2>
            
            <p className="text-lg md:text-xl text-purple-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              Whether you&apos;re dealing with a damaged tooth, a missing one, or an old crown that just doesn&apos;t fit right — we&apos;re here to help. Let us restore your confidence, function, and smile.
            </p>
            
            <p className="text-lg text-purple-700 leading-relaxed mb-12 max-w-4xl mx-auto">
              Call <span className="font-bold text-purple-600">Prudentia Micro Dental Care, Pimple Saudagar</span> today to schedule a consultation. We&apos;ll guide you every step of the way toward a healthy, lasting solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleOpenChatbot} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
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