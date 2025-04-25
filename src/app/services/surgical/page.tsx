"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaTeeth, FaTeethOpen, FaBone, FaSyringe } from 'react-icons/fa';
import Image from 'next/image';
import { useChatbot } from '@/components/chatbotContext';


export default function SurgicalServicesPage() {
  const { handleOpenChatbot } = useChatbot();

  const services = [
    {
      id: 1,
      name: "Dental Implants",
      slug: "Implants",
      description: `Permanent titanium replacements for missing tooth roots. 
      Osseointegration fuses with jawbone for natural stability. 
      Can support crowns, bridges, or dentures. 
      High success rate with proper care and maintenance.`,
      image: "/images/dentalImplant.jpg",
      icon: <FaTooth className="text-blue-500 text-3xl" />,
      credit: "Dental Implants"
    },
    {
      id: 2,
      name: "Sedation Dentistry",
      slug: "SedationDentistry",
      description: `Safe anxiety-free experience for complex procedures. 
      Options include nitrous oxide, oral sedation, and IV sedation. 
      Monitored by trained anesthesiology professionals. 
      Faster treatment with no memory of the procedure.`,
      image: "/images/sedationDentistry.jpg",
      icon: <FaSyringe className="text-purple-500 text-3xl" />,
      credit: "Sedation Dentistry"
    },
    {
      id: 3,
      name: "Tooth Extractions",
      slug: "Extractions",
      description: `Gentle removal of damaged or problematic teeth. 
      Includes simple and surgical extraction techniques. 
      Preserves surrounding bone when possible. 
      Detailed aftercare instructions for proper healing.`,
      image: "/images/toothExtraction.jpg",
      icon: <FaTeethOpen className="text-red-500 text-3xl" />,
      credit: "Tooth Extractions"
    },
    {
      id: 4,
      name: "Dentures",
      slug: "Dentures",
      description: `Custom-crafted removable replacements for missing teeth. 
      Options include partial, full, and implant-supported. 
      Uses premium materials for natural appearance. 
      Follow-up adjustments ensure perfect fit and comfort.`,
      image: "/images/dentures.jpg",
      icon: <FaTeeth className="text-gray-500 text-3xl" />,
      credit: "Dentures"
    },
    {
      id: 5,
      name: "All-on-4 Implants",
      slug: "Allonimplants",
      description: `Full arch restoration with just four implants. 
      Immediate function with temporary teeth same day. 
      Ideal for patients with significant tooth loss. 
      Permanent solution that feels like natural teeth.`,
      image: "/images/all-on-4.jpg",
      icon: <FaTeeth className="text-green-500 text-3xl" />,
      credit: "All-on-4 Implants"
    },
    {
      id: 6,
      name: "Bone Grafting",
      slug: "BoneGraft",
      description: `Rebuilds jawbone structure for implant placement. 
      Uses synthetic, donor, or your own bone material. 
      Prevents facial collapse after tooth loss. 
      Creates stable foundation for future restorations.`,
      image: "/images/boneGrafting.jpg",
      icon: <FaBone className="text-yellow-500 text-3xl" />,
      credit: "Bone Grafting"
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
            Surgical Dentistry Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
             Advanced surgical solutions for complex dental needs, performed with precision and care.
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
            Our general dentistry services provide the foundation for a lifetime of healthy, beautiful smiles.  We're here to partner with you on your oral health journey.
          </p>
          <button onClick={handleOpenChatbot} className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 px-10 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg">
            Book an Appointment Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}