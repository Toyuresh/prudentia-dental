"use client"
import React, { useState, useEffect } from 'react';
import { Shield, Heart, Zap, CheckCircle, Microscope, Star, Calendar, Smile, RefreshCw } from 'lucide-react';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


export default function FullMouthRehabilitation() {
     const { handleOpenChatbot } = useChatbot();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(60px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'all 1s ease-out'
  };

  const staggerDelay = (index : number) => ({
    ...fadeInUp,
    transition: `all 1s ease-out ${index * 0.25}s`
  });

  const rehabilitationGoals = [
    { icon: Shield, title: "Strengthen weakened tooth structures" },
    { icon: RefreshCw, title: "Repair damage and decay" },
    { icon: Zap, title: "Improve bite alignment" },
    { icon: Heart, title: "Restore healthy gum tissues" },
    { icon: Smile, title: "Replace missing teeth for full functionality" }
  ];

  const treatments = [
    "Tooth-Colored Fillings – to treat cavities discreetly",
    "Dental Crowns – to strengthen and protect damaged teeth", 
    "Porcelain Veneers – for cosmetic enhancement and correction",
    "Dental Implants – to permanently replace missing teeth",
    "Gum Treatments – to eliminate infection and restore periodontal health",
    "Inlays/Onlays, Bridges & More – depending on your unique case"
  ];

  const whyChooseFeatures = [
    {
      title: "Advanced Technology",
      description: "From dental microscopes to CAD-CAM design for precision and minimal invasiveness",
      icon: Microscope,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Experience & Artistry", 
      description: "Years of expertise in full mouth restorations and smile design",
      icon: Star,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Compassionate Care",
      description: "A step-by-step, stress-free approach tailored to your comfort and goals", 
      icon: Heart,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 text-white">
        <div className="absolute inset-0  bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div 
            className="text-center space-y-10"
            style={isVisible ? fadeInUp : {}}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Full Mouth Rehabilitation<br />
              at <span className="text-yellow-300">Prudentia Micro</span><br />
              Dental Care
            </h1>
            <div className="flex text-black flex-col sm:flex-row justify-center items-center gap-6 text-2xl md:text-3xl font-semibold">
              <span className="bg-white bg-opacity-20 px-8 py-4 rounded-full backdrop-blur-sm border border-white/30">
                Rebuild Your Smile
              </span>
              <span className="hidden sm:block text-3xl">•</span>
              <span className="bg-white bg-opacity-20 px-8 py-4 rounded-full backdrop-blur-sm border border-white/30">
                Restore Your Confidence
              </span>
            </div>
            <div className="mt-16">
              <div className="bg-white bg-opacity-15 rounded-3xl p-10 backdrop-blur-sm border border-white/20 max-w-5xl mx-auto relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                          src="/images/services/restorative/rehabilitation/Image1.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />                
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Introduction */}
        <section className="mb-32">
          <div 
            className="text-center max-w-6xl mx-auto"
            style={isVisible ? staggerDelay(1) : {}}
          >
            <div className="bg-white rounded-3xl p-12 md:p-20 shadow-2xl border border-gray-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Sometimes, dental problems don&apos;t occur in isolation. When multiple teeth are damaged, missing, or decayed or when gum disease and bite issues are also involved, a full mouth rehabilitation may be the best path toward lasting oral health and a beautiful smile.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At <span className="font-bold text-purple-600">Prudentia Micro Dental Care</span>, we specialize in comprehensive, minimally invasive treatment plans tailored to restore both function and aesthetics giving you back a smile that looks and feels natural.
              </p>
            </div>
          </div>
        </section>

        {/* What Is Full Mouth Rehabilitation */}
        <section className="mb-32">
          <div 
            className="text-center mb-20"
            style={isVisible ? staggerDelay(2) : {}}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16">
              What Is Full Mouth Rehabilitation?
            </h2>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl inline-block mb-16 border border-gray-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                          src="/images/services/restorative/rehabilitation/Image2.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />               
            </div>
            
            <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 max-w-6xl mx-auto mb-16">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                Full mouth rehabilitation combines multiple restorative and cosmetic dental treatments to address complex dental issues in a cohesive, personalized plan. The goal is not just cosmetic enhancement, but also to:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {rehabilitationGoals.map((goal, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 text-center"
                style={isVisible ? staggerDelay(3 + index) : {}}
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <goal.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">{goal.title}</p>
              </div>
            ))}
          </div>

          <div 
            className="bg-gradient-to-r from-purple-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white text-center"
            style={isVisible ? staggerDelay(8) : {}}
          >
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Every plan begins with a detailed consultation. <span className="font-bold">Dr. Bhushan</span> will evaluate your oral health, discuss your concerns, and recommend the best combination of treatments to conservatively rebuild your smile.
            </p>
          </div>
        </section>

        {/* Why Is Restorative Dentistry Essential */}
        <section className="mb-32">
          <div 
            className="bg-white rounded-3xl p-12 md:p-20 shadow-2xl border border-gray-100 text-center"
            style={isVisible ? staggerDelay(9) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Why Is Restorative Dentistry Essential?
            </h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-10 border-l-8 border-red-500 mb-10">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Unlike other parts of the body, teeth do not heal on their own.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Left untreated, even minor issues like chips or cavities can worsen, leading to pain, infection, and tooth loss. Full mouth rehabilitation helps you get ahead of these problems with a long-term solution.
              </p>
            </div>
          </div>
        </section>

        {/* Your Customized Treatment */}
        <section className="mb-32">
          <div 
            className="text-center mb-20"
            style={isVisible ? staggerDelay(10) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
              Your Customized Treatment May Include:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                style={isVisible ? staggerDelay(11 + index) : {}}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">{treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Dr. Bhushan */}
        <section className="mb-32">
          <div 
            className="text-center mb-20"
            style={isVisible ? staggerDelay(17) : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
              Why Choose Dr. Bhushan?
            </h2>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl inline-block mb-16 border border-gray-100 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                          src="/images/services/restorative/rehabilitation/Image3.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />               
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {whyChooseFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 text-center"
                style={isVisible ? staggerDelay(18 + index) : {}}
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div 
            className="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl"
            style={isVisible ? staggerDelay(21) : {}}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Take the First Step Toward<br />a Healthier Smile
            </h2>
            
            <div className="bg-white bg-opacity-15 rounded-3xl p-10 backdrop-blur-sm border border-white/20 mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                          src="/images/services/restorative/rehabilitation/Image4.jpg"
                          alt="Modern denture solutions"
                          fill
                          className="object-contain"
                          priority
                        />               
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8 mb-12">
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                If you&apos;re struggling with multiple dental issues or feel like you&apos;ve &quot;fallen behind&quot; on your oral health, you&apos;re not alone, and it&apos;s never too late. With full mouth rehabilitation, you can reclaim both the appearance and strength of your teeth in a way that feels truly transformative.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Contact <span className="font-bold">Prudentia Micro Dental Care, Pimple Saudagar</span> today to schedule a consultation and explore how we can help you smile again - confidently, comfortably and completely.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button onClick={handleOpenChatbot} className="bg-purple-200 text-purple-900 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4">
                <Calendar className="w-7 h-7" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}