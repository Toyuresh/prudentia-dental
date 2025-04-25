'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth, FaTeethOpen, FaSmile } from 'react-icons/fa';
import Image from 'next/image';
import { useChatbot } from '@/components/chatbotContext';


export default function CosmeticServicesPage() {
  const { handleOpenChatbot } = useChatbot();

  const services = [
    {
      id: 1,
      name: "Smile Makeover",
      slug: "SmileMakeover",
      description: `Complete transformation of your smile using multiple cosmetic procedures. 
      Customized treatment plan based on your facial features and goals. 
      May include veneers, whitening, and gum contouring. 
      Digital smile design previews your final results.`,
      image: "/images/smileMakeover.jpg",
      icon: <FaSmile className="text-pink-500 text-3xl" />,
      credit: "Smile Makeover"
    },
    {
      id: 2,
      name: "Teeth Whitening",
      slug: "TeethWhitening",
      description: `Professional-grade whitening for dramatically brighter teeth. 
      Safe, effective treatments with lasting results. 
      Both in-office and take-home options available. 
      Custom trays prevent gum irritation during treatment.`,
      image: "/images/teethwhitening.jpg",
      icon: <FaTooth className="text-blue-100 text-3xl" />,
      credit: "Teeth Whitening"
    },
    {
      id: 3,
      name: "Clear Aligners",
      slug: "ClearAligners",
      description: `Nearly invisible alternative to traditional braces. 
      Custom-made sequential aligners for gradual tooth movement. 
      Removable for eating and special occasions. 
      Digital treatment planning shows projected results.`,
      image: "/images/clearAligner.jpg",
      icon: <FaTeeth className="text-teal-500 text-3xl" />,
      credit: "Clear Aligners"
    },
    {
      id: 4,
      name: "Veneers",
      slug: "Veneers",
      description: `Thin porcelain shells that transform tooth appearance. 
      Correct stains, chips, gaps, and minor misalignments. 
      Minimal tooth preparation preserves natural structure. 
      Custom shade matching for natural-looking results.`,
      image: "/images/veneers.jpg",
      icon: <FaTeethOpen className="text-white text-3xl" />,
      credit: "Veneers"
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
            Cosmetic Dentistry Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
             Transform your smile with our aesthetic dental treatments designed for beautiful, natural-looking results.
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
              <div className="p-8 md:w-1/2">
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