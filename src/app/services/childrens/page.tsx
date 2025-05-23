"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Shield, Smile, Star, Phone, Mail, MapPin, Baby } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';

const PediatricDentistryPage = () => {
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

  const fadeInUp = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInLeft = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const slideInRight = (id: string) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateX(0)' : 'translateX(50px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  const procedures = [
    {
      number: "1",
      title: "Fillings",
      content: "Children's teeth are more vulnerable to cavities due to sugary snacks and sometimes less-than-perfect oral hygiene. When cavities develop, fillings are used to restore the tooth and prevent further decay. This simple, quick procedure ensures that your child's tooth stays healthy and functional.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      number: "2", 
      title: "Dental Cleanings",
      content: "Routine teeth cleanings are vital for children since they are more prone to cavities. A professional cleaning helps remove plaque buildup, which is crucial for preventing tooth decay. Cleanings also provide an opportunity for the dentist to spot any early signs of problems.",
      icon: <Smile className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      number: "3",
      title: "Extractions", 
      content: "Though it might sound intimidating, tooth extractions are occasionally necessary for children. Whether it's because of an infected tooth or overcrowding, extractions help maintain a healthy, growing mouth. Pediatric dentists are skilled in performing this procedure with minimal discomfort, using localized numbing techniques to keep the process as pain-free as possible.",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      color: "bg-red-50 border-red-200"
    },
    {
      number: "4",
      title: "Pediatric Root Canals and Dental Crowns",
      content: "When a tooth is severely infected, a root canal may be required to remove the infection and preserve the tooth. After a root canal, a dental crown is placed to protect and restore the tooth's function. This procedure helps prevent further damage and ensures your child's tooth stays healthy.",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-pink-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div 
            className="text-center max-w-4xl mx-auto"
            id="hero"
            data-animate
            style={fadeInUp('hero')}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Baby className="w-16 h-16 text-black" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Pediatric Dentistry:<br />
              <span className="text-yellow-300">Gentle Care for Growing Smiles</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Taking your child to a pediatric dentist is an excellent choice for their oral health. Pediatric dentists are 
              specially trained to provide the best care tailored to children&apos;s needs. They make dental visits more 
              comfortable and ensure that young patients maintain healthy smiles as they grow.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="intro-image"
            data-animate
            style={fadeInUp('intro-image')}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
         
                <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                          <Image
                            src="/images/services/children/Image1.png"
                            alt="Modern denture solutions"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
              <div className="p-6 bg-gradient-to-r from-pink-100 to-blue-100">
                <p className="text-lg text-gray-700 font-medium">
                  Creating positive dental experiences for children
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Procedures Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="procedures-title"
              data-animate
              style={fadeInUp('procedures-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                Common Pediatric Dental Procedures
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                While pediatric dentistry shares many similarities with adult care, the procedures often have a child-
                friendly approach to make them easier and less stressful. Here are some of the most common pediatric 
                dental procedures:
              </p>
            </div>

            <div className="space-y-8">
              {procedures.map((procedure, index) => (
                <div 
                  key={procedure.number}
                  className={`bg-white rounded-2xl shadow-lg border-2 ${procedure.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  id={`procedure-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`procedure-${index}`) : slideInRight(`procedure-${index}`)}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/4 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white to-gray-50">
                      <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                        {procedure.icon}
                      </div>
                      <div className="text-4xl font-bold text-gray-800 mb-2">
                        {procedure.number}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                        {procedure.title}
                      </h3>
                    </div>
                    <div className="lg:w-3/4 p-8">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {procedure.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safe Hands Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              id="safe-hands"
              data-animate
              style={fadeInUp('safe-hands')}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border-4 border-gradient-to-r from-pink-200 to-blue-200">
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-pink-400 to-blue-500 p-6 rounded-full">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                  Your Child&apos;s Smile is in Safe Hands
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  We understand that visiting the dentist can be a big step for children, but our pediatric dental team is 
                  here to ensure that your child feels comfortable and well cared for throughout the process. We take a 
                  gentle, friendly approach to each procedure, making dental visits a positive experience.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
                    <Smile className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Gentle Approach</h4>
                    <p className="text-sm text-gray-600">Child-friendly techniques</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                    <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Expert Care</h4>
                    <p className="text-sm text-gray-600">Specialized pediatric training</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                    <Star className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Positive Experience</h4>
                    <p className="text-sm text-gray-600">Making visits enjoyable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="contact"
            data-animate
            style={fadeInUp('contact')}
          >
            <div className="bg-white text-black bg-opacity-10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Schedule Your Child&apos;s Appointment Today!
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
                Contact us today to schedule your child&apos;s appointment at Prudentia Micro Dental Care, Pimple 
                Saudagar and ensure their smile stays bright and healthy for years to come!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
                  <Phone className="w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                  <p className="opacity-90">Book Your Child&apos;s Visit</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
                  <Mail className="w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                  <p className="opacity-90">Ask Questions</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
                  <MapPin className="w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
                  <p className="opacity-90">Pimple Saudagar, Pune</p>
                </div>
              </div>

              <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#800080", color: " #ffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenChatbot}
              transition={{ duration: 0.2 }}
              className="bg-transparent border-2 border-black text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-purple-900 transition duration-300"
            >
              Schedule your consultation today
            </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PediatricDentistryPage;