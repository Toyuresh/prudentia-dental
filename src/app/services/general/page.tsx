"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth, FaTeethOpen } from 'react-icons/fa';
import Image from 'next/image';
import { useChatbot } from '@/components/chatbotContext';


export default function GeneralServicesPage() {
  const { handleOpenChatbot } = useChatbot();

  const services = [
    {
      id: 1,
      name: "Cleaning & Exams",
      slug: "CleaningExams",
      description: `Professional dental cleanings remove plaque and tartar that regular brushing can't eliminate. 
      Our comprehensive exams include oral cancer screening and digital X-rays. 
      We assess gum health and check for cavities or other issues. 
      Recommended every 6 months for optimal preventive care.`,
      image: "/images/teethcleaning.jpg",
      icon: <FaTooth className="text-purple-500 text-3xl" />,
      credit: "Cleaning teeth"
    },
    {
      id: 2,
      name: "White Fillings",
      slug: "WhiteFillings",
      description: `Tooth-colored composite fillings blend seamlessly with your natural teeth. 
      Mercury-free and biocompatible materials ensure safe restoration. 
      We preserve maximum tooth structure during the procedure. 
      Completed in a single visit with immediate results.`,
      image: "/images/whitefilling.jpg",
      icon: <FaTeeth className="text-blue-500 text-3xl" />,
      credit: "Filling in teeth"
    },
    {
      id: 3,
      name: "Sleep Apnea Treatment",
      slug: "SleepApnea",
      description: `Custom-fitted oral appliances reposition the jaw to open airways. 
      Comfortable alternative to CPAP machines for mild to moderate cases. 
      Reduces snoring and improves sleep quality significantly. 
      FDA-approved devices made from dental impressions for perfect fit.`,
      image: "/images/banner1.jpg",
      icon: <FaTeethOpen className="text-green-500 text-3xl" />,
      credit: "Microscope treatment"
    },
    {
      id: 4,
      name: "Emergency Care",
      slug: "EmergencyCare",
      description: `Immediate treatment for toothaches, fractures, and knocked-out teeth. 
      Same-day appointments available for urgent dental situations. 
      We provide pain management and temporary solutions when needed. 
      24/7 emergency contact for established patients.`,
      image: "/images/emergencycare.jpg",
      icon: <FaTooth className="text-red-500 text-3xl" />,
      credit: "Emergency situation"
    },
    {
      id: 5,
      name: "Root Canals",
      slug: "RootCanals",
      description: `Painless procedure to save infected teeth from extraction. 
      Uses rotary endodontics for faster, more comfortable treatment. 
      Digital imaging ensures precise cleaning of root canals. 
      Crown placement protects the tooth after treatment.`,
      image: "/images/root-canal.jpg",
      icon: <FaTeeth className="text-yellow-500 text-3xl" />,
      credit: "Root canals"
    },
    {
      id: 6,
      name: "Deep Cleaning",
      slug: "DeepCleaning",
      description: `Specialized cleaning below the gumline for periodontal health. 
      Removes hardened tartar and bacteria causing gum disease. 
      May include localized antibiotic treatment if needed. 
      Follow-up care instructions provided for optimal healing.`,
      image: "/images/deepcleaning.jpg",
      icon: <FaTeethOpen className="text-purple-500 text-3xl" />,
      credit: "Deep cleaning"
    }
  ];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  hover: {
      scale: 1.00,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2 },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};


  // ... [keep all your existing animation variants code] ...

  return (
    <div className="bg-white">
      {/* Hero Section - keep this exactly as is */}
      <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-tight"
          >
            General Dentistry Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive care for your everyday dental needs, delivered with expertise and a gentle touch.
          </motion.p>
        </div>
      </div>
      {/* Services Listing */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.slug} 
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md border border-gray-100"
            >
              {/* Service Image  */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                className="relative md:w-1/2 h-50 md:h-50 w-full" // Added fixed height and width
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
                  priority={service.id <= 3} // Only prioritize first 3 images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl md:rounded-l-xl md:rounded-t-none" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm bg-black/60 px-3 py-1.5 rounded-full">
                  {service.credit}
                </div>
              </motion.div>

              {/* Service Content  */}
              <div  className="p-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4 tracking-tight">
                  {service.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-10 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-purple-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Our general dentistry services provide the foundation for a lifetime of healthy, beautiful smiles.  We&aposre here to partner with you on your oral health journey.
          </p>
          <button onClick={handleOpenChatbot} className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 px-10 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg">
            Book an Appointment Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}