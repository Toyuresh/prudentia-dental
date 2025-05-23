"use client"
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Heart, CheckCircle, Clock, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const WisdomTeethExtractionPage = () => {
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

  const problems = [
    {
      title: "Damage to Neighboring Teeth",
      description: "Wisdom teeth can push against adjacent teeth, causing discomfort or even damage.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Gum Infection",
      description: "The partially erupted wisdom tooth can cause gum irritation and infections.",
      icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Jaw Infections",
      description: "If wisdom teeth are impacted, they can lead to painful jaw infections.",
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Alignment Disruption",
      description: "Impacted wisdom teeth may shift other teeth, affecting the alignment of your smile.",
      icon: <AlertTriangle className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const careSteps = [
    {
      title: "Calm & Relaxing Environment",
      description: "We perform the procedure in a stress-free setting to help you feel at ease.",
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Personalized Anesthesia",
      description: "Depending on your needs and comfort level, we will administer the appropriate anesthesia to ensure a painless experience.",
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      color: "bg-green-50"
    },
    {
      title: "Gentle Care",
      description: "We're committed to addressing any concerns you have before, during, and after the procedure.",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Post-Procedure Care",
      description: "After your extraction, we'll provide you with detailed instructions on how to care for the extraction site to ensure proper healing.",
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      color: "bg-teal-50"
    },
    {
      title: "Follow-up Visit",
      description: "We'll schedule a follow-up appointment to check on your progress and ensure the healing process is going smoothly.",
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      color: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden from-purple-500 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div 
            className="text-center max-w-5xl mx-auto"
            id="hero"
            data-animate
            style={fadeInUp('hero')}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 p-6 rounded-full backdrop-blur-sm">
                <Shield className="w-16 h-16 text-black" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Wisdom Teeth Extraction:<br />
              <span className="text-yellow-300">Safe, Comfortable Care for Your Smile</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Wisdom teeth are the third set of molars that typically emerge between the ages of 17 and 25. Due to 
              their late appearance, there&apos;s often not enough room in the mouth for them to grow properly, leading to 
              potential complications.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="problems-title"
              data-animate
              style={fadeInUp('problems-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                Common Wisdom Teeth Problems:
              </h2>
              <div className="max-w-3xl mx-auto mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/wisdom/Image1.jpg" 
                  alt="Wisdom Teeth Problems" 
                  className="w-full rounded-2xl shadow-xl"
                /> */}
                       <Image
                          src="/images/services/surgical/wisdom/Image1.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border-2 ${problem.color} p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                  id={`problem-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`problem-${index}`) : slideInRight(`problem-${index}`)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-xl shadow-md flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {problem.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 text-center"
              id="problems-conclusion"
              data-animate
              style={fadeInUp('problems-conclusion')}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                While not all wisdom teeth require removal, if any of the above issues arise, extraction may be necessary 
                to avoid further complications and preserve your oral health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Extraction Experience Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              id="extraction-title"
              data-animate
              style={fadeInUp('extraction-title')}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
                Your Wisdom Teeth Extraction at Prudentia Micro Dental Care
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                We understand that wisdom teeth extraction can feel intimidating, but we&apos;re here to ensure your 
                experience is as smooth and comfortable as possible.
              </p>
              <p className="text-xl font-semibold text-gray-800 mb-8">
                Here&apos;s what you can expect:
              </p>
              <div className="max-w-3xl mx-auto mb-12 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src="/images/services/surgical/wisdom/Image2.jpg" 
                  alt="Comfortable Extraction Experience" 
                  className="w-full rounded-2xl shadow-xl"
                /> */}
          <Image
                          src="/images/services/surgical/wisdom/Image2.jpg" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />                 
              </div>
            </div>

            <div className="space-y-8">
              {careSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  id={`care-step-${index}`}
                  data-animate
                  style={index % 2 === 0 ? slideInLeft(`care-step-${index}`) : slideInRight(`care-step-${index}`)}
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className={`${step.color} p-4 rounded-xl shadow-md flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Making the Right Decision Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                id="decision-content"
                data-animate
                style={slideInLeft('decision-content')}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                  Making the Right Decision for Your Oral Health
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  While wisdom tooth extraction can be a big decision, it&apos;s an important one for your long-term dental 
                  health. If you&apos;re experiencing pain or discomfort from your wisdom teeth, we&apos;re here to guide you through 
                  the process.
                </p>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Don&apos;t let wisdom tooth pain affect your quality of life. Our expert team is here to help.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-indigo-900 bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-sm  font-medium">✓ Expert Care</span>
                    </div>
                    <div className="bg-indigo-900 bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-sm font-medium">✓ Pain-Free Experience</span>
                    </div>
                    <div className="bg-indigo-900 bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-sm font-medium">✓ Comprehensive Care</span>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="flex justify-center"
                id="decision-image"
                data-animate
                style={slideInRight('decision-image')}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  {/* <img 
                    src="/images/services/surgical/wisdom/Image3.png" 
                    alt="Making the Right Decision" 
                    className="w-full h-64 lg:h-80 object-contain"
                  /> */}
                            <Image
                          src="/images/services/surgical/wisdom/Image3.png" 
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        /> 
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                    <p className="text-lg text-gray-700 font-medium text-center">
                      Professional guidance for your oral health decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default WisdomTeethExtractionPage;