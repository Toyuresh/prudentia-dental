"use client"
import React, { useState, useEffect } from 'react';
import { Smile, Shield, Heart, CheckCircle, Award, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';

const DentalImplantsPage = () => {
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

  const implantParts = [
    {
      number: "1",
      title: "The Post",
      description: "The implant post acts as a replacement for your natural tooth's root. Made of medical-grade titanium, it fuses with your jawbone during the healing process, providing a solid foundation for the restoration.",
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      number: "2",
      title: "The Abutment",
      description: "The abutment is a connector that links the post to your custom replacement tooth (or teeth).",
      icon: <Award className="w-10 h-10 text-green-600" />,
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      number: "3",
      title: "The Crown",
      description: "The crown is a custom-designed tooth replacement that blends seamlessly with your natural teeth, providing a beautiful and functional restoration.",
      icon: <Star className="w-10 h-10 text-purple-600" />,
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    }
  ];

  const benefits = [
    {
      title: "No Impact on Adjacent Teeth",
      description: "Unlike traditional bridges, which require alteration of neighboring teeth, dental implants only affect the missing tooth site.",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Stability and Functionality",
      description: "Implants restore your ability to eat, speak, and smile with complete confidence, just like natural teeth.",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Prevention of Bone Atrophy",
      description: "By fusing with your jawbone, dental implants help prevent the bone loss that often occurs when teeth are missing.",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "No Removable Parts",
      description: "Implants are permanently fixed in place, offering comfort and stability without the need for unsightly, removable dentures.",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 via-purple-800 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-content"
              data-animate
              style={slideInLeft('hero-content')}
            >
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm mr-4">
                  <Smile className="w-12 h-12 text-black" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Dental Implants:
                  </h1>
                  <p className="text-2xl lg:text-3xl text-yellow-300 font-semibold">
                    Restore Your Smile with Confidence
                  </p>
                </div>
              </div>
            </div>
            <div 
              className="flex justify-center"
              id="hero-image"
              data-animate
              style={slideInRight('hero-image')}
            >
              <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/implants/Image1.jpg" 
                  alt="Dental Implants Overview" 
                  className="rounded-xl shadow-2xl"
                /> */}
       <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/2. implants/titanium-dental-implant-placement-pune-prudentia-micro-dental.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                 
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            id="intro"
            data-animate
            style={fadeInUp('intro')}
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              Dental implants are a reliable and natural-looking solution for those looking to replace missing teeth. 
              Whether you&apos;ve lost a single tooth or several, dental implants offer a predictable and effective restoration.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              A dental implant is a three-part system designed to replace one, several, or even a full set of missing 
              teeth. Here&apos;s how it works:
            </p>
          </div>
        </div>
      </section>

      {/* Three Parts Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="parts-title"
              data-animate
              style={fadeInUp('parts-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8 ">
                The Three Parts of a Dental Implant:
              </h2>
              <div className="max-w-3xl mx-auto mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/implants/Image2.jpg" 
                  alt="Three Parts of Dental Implant" 
                  className="w-full rounded-2xl shadow-xl"
                /> */}
       <Image
         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/2. implants/titanium-dental-implants-placement-pune-prudentia-micro-dental.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                 
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {implantParts.map((part, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${part.color} rounded-2xl shadow-lg border-2 ${part.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  id={`part-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`part-${index}`) : slideInRight(`part-${index}`)}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/4 p-8 flex flex-col items-center justify-center text-center bg-white bg-opacity-50">
                      <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                        {part.icon}
                      </div>
                      <div className="text-4xl font-bold text-gray-800 mb-2">
                        {part.number}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                        {part.title}
                      </h3>
                    </div>
                    <div className="lg:w-3/4 p-8 flex items-center">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {part.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8 text-center"
              id="parts-conclusion"
              data-animate
              style={fadeInUp('parts-conclusion')}
            >
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                The fusion of the implant post with the jawbone creates a secure, long-lasting foundation for single-tooth 
                crowns, multi-tooth bridges, or even full fixed dentures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="benefits-title"
              data-animate
              style={fadeInUp('benefits-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8 ">
                Benefits of Dental Implants:
              </h2>
              <div className="max-w-3xl mx-auto mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/implants/Image3.jpg" 
                  alt="Benefits of Dental Implants" 
                  className="w-full rounded-2xl shadow-xl"
                /> */}
                       <Image
                         urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/2. implants/natural-looking-dentals-implants-smile-restoration-prudentia-dental.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />  
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border-2 ${benefit.color} p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  id={`benefit-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`benefit-${index}`) : slideInRight(`benefit-${index}`)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-xl shadow-md flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Are You Right Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                id="right-content"
                data-animate
                style={slideInLeft('right-content')}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                  Are Dental Implants Right for You?
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  Dental implants are durable and long-lasting with proper care. Most patients who are healthy enough to 
                  undergo a minor dental procedure, like a tooth extraction, can typically qualify for implants.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  At Prudentia Micro Dental Care, Pimple Saudagar our team will help you explore your options, whether 
                  dental implants or other restoration treatments, and determine if you are a good candidate.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  We provide a calm, welcoming environment and personalized care to ensure that your visit is 
                  comfortable and your treatment is tailored to your needs.
                </p>
              </div>
              <div 
                className="flex justify-center"
                id="right-image"
                data-animate
                style={slideInRight('right-image')}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  {/* <img 
                    src="/images/services/surgical/implants/Image4.jpg" 
                    alt="Are Dental Implants Right for You" 
                    className="w-full h-64 lg:h-80 object-cover"
                  /> */}
                         <Image
                           urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                          src="hero/Services/surgical/2. implants/natural-lookings-dental-implants-smile-restoration-prudentia-dental.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />  
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Expert Team</p>
                      </div>
                      <div className="text-center">
                        <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Personalized Care</p>
                      </div>
                      <div className="text-center">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Safe Environment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Take the First Step Toward a <span className="text-purple-600">Pain-Free, Healthy Smile</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                 Contact Prudentia Micro Dental Care today to schedule your consultation and take the next step 
                toward a healthier, pain-free smile!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={handleOpenChatbot}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center mx-auto text-lg"
              >
                Book Your Micro-Root Consultation Today <FiArrowRight className="ml-2" />
              </motion.button>
              <p className="text-gray-500 mt-6">
                Your natural smile deserves the best care available
              </p>
            </motion.div>
          </div>
        </section>
    </div>
  );
};

export default DentalImplantsPage;