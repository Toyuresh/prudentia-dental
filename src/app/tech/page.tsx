'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiPhoneCall } from 'react-icons/fi';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


const DentalTechnologyPage = () => {
    const { handleOpenChatbot } = useChatbot();
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Dental Operating Microscope",
      description: "High-Precision Dentistry You Can See. Magnifies your teeth up to 30x for early diagnosis and minimally invasive treatments.",
      benefits: [
        "Early diagnosis",
        "Minimally invasive treatments",
        "Faster healing, less discomfort",
        "Live video demos"
      ],
      image: "/images/tech2.png"
    },
    {
      title: "Fluorescent Caries Detection",
      description: "Spot Cavities Before They Spread. Uses fluorescent light to highlight decay in its earliest stage.",
      benefits: [
        "Accurate cavity detection",
        "No radiation",
        "Prevent major dental treatments"
      ],
      image: "/images/tech3.png"
    },
    {
      title: "Needle-Free Electronic Anesthesia",
      description: "Say Goodbye to Painful Injections. Delivers a mild electrical pulse to numb the area.",
      benefits: [
        "No needle anxiety",
        "Gentle, pain-free numbing",
        "Ideal for kids and anxious patients"
      ],
      image: "/images/tech4.jpeg"
    },
    {
      title: "Advanced Root Canal Technology",
      description: "Safe. Effective. Painless. Offers more accuracy, better cleaning, and faster recovery.",
      benefits: [
        "Higher success rates",
        "Less discomfort",
        "Minimal tissue damage"
      ],
      image: "/images/tech5.png"
    },
    {
      title: "Digital X-Rays",
      description: "Instant, Safer, Sharper Diagnostics. Reduces radiation exposure by up to 80%.",
      benefits: [
        "Quick image capture",
        "Enhanced digital analysis",
        "Better, faster diagnosis",
        "Safer for all ages"
      ],
      image: "/images/tech6.jpg"
    },
    {
      title: "Ultrasonic Cleaning",
      description: "Next-Level Dental Hygiene. Removes tough tartar without damaging your enamel.",
      benefits: [
        "Gentle yet thorough cleaning",
        "Pain-free plaque removal",
        "Whiter teeth, fresher breath"
      ],
      image: "/images/tech7.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <>
      <Head>
        <title>Advanced Dental Technology | Prudentia Micro Dental Care</title>
        <meta name="description" content="Experience modern dentistry with minimal pain and maximum precision at Prudentia Micro Dental Care." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Modern Dentistry. <span className="text-purple-600">Minimal Pain.</span> Maximum Precision.
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                At Prudentia, we combine state-of-the-art dental technology with advanced skills to transform your experience into one that&apos;s comfortable, fast, and stress-free.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Book Your Consultation
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 rounded-xl overflow-hidden shadow-2xl relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
            >
              <Image
                src="/images/tech1.JPG" 
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />               
            </motion.div>
          </div>
        </section>

        {/* Fear of Dentist Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fear of the dentist? You&apos;re not alone.
                </h2>
                <p className="text-gray-600 mb-6">
                  For many, just the sound of a dental drill or sight of a needle can trigger anxiety. But dentistry has changed dramatically.
                </p>
                <p className="text-gray-600 mb-8">
                  From painless dental injections to microscope-assisted precision dentistry, here&apos;s how we&apos;re redefining modern dental care.
                </p>
                <div className="flex items-center space-x-4">
                  <FiPhoneCall className="text-purple-600 text-2xl" />
                  <span className="text-lg font-medium">Call us to discuss your concerns</span>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 md:pl-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Our Pain-Free Promise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Needle-free anesthesia options</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Gentle, compassionate care</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Clear explanations at every step</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Calming environment</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Technology */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Dental Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our cutting-edge equipment enhances your dental experience
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {features[currentFeature].description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {features[currentFeature].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <FiCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex space-x-4">
                        {features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentFeature(index)}
                            className={`w-3 h-3 rounded-full ${currentFeature === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                            aria-label={`View feature ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentFeature}
                      src={features[currentFeature].image}
                      alt={features[currentFeature].title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sterilization Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-square relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/images/tech8.png" 
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  /> 
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  European-Standard Sterilization Protocols
                </h2>
                <p className="text-gray-600 mb-8">
                  Your Safety. Our Priority. We strictly follow IDA and European standards for sterilization.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FiCheckCircle className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ultrasonic Cleaners</h4>
                      <p className="text-gray-600">Eliminate contamination from instruments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FiCheckCircle className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Class B Autoclaves</h4>
                      <p className="text-gray-600">Complete sterilization using vacuum technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FiCheckCircle className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">RO + UV filtered water</h4>
                      <p className="text-gray-600">Used in all procedures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <FiCheckCircle className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">UV Cabinets</h4>
                      <p className="text-gray-600">Ensure sterile storage</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center" style={{position: 'relative'}}>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Next-Gen Dentistry at Prudentia Micro Dental Care
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto">
                From painless anesthesia to microscope enhanced precision, we&apos;re proud to offer one of the most advanced dental experiences in the region.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-xs">
                  <h3 className="font-semibold text-lg mb-2">Pain-Free Dentistry</h3>
                  <p className="text-purple-100">No more fear of needles or pain</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-xs">
                  <h3 className="font-semibold text-lg mb-2">Cutting-Edge Equipment</h3>
                  <p className="text-purple-100">Latest technology for better results</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-xs">
                  <h3 className="font-semibold text-lg mb-2">Faster Healing</h3>
                  <p className="text-purple-100">Minimally invasive techniques</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-xs">
                  <h3 className="font-semibold text-lg mb-2">Expert-Led Care</h3>
                  <p className="text-purple-100">Highly trained professionals</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center mx-auto"
              >
                Book your consultation today
                <FiArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DentalTechnologyPage;