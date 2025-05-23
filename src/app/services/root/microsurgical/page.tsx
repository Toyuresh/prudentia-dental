"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


// Sample image URLs - Replace these with your actual images
const images = [
  "/images/services/root/rootsurgical/Image1.jpg", // Image 0
  "/images/services/root/rootsurgical/Image2.jpg", // Image 1
  "/images/services/root/rootsurgical/Image3.jpg", // Image 2
  "/images/services/root/rootsurgical/Image4.jpg", // Image 3
  "/images/services/root/rootsurgical/Image5.jpg", // Image 4
  "/images/services/root/rootsurgical/Image6.png", // Image 5 (technology)
  "/images/services/root/rootsurgical/Image7.jpg", // Image 6 (save tooth)
];

export default function ApicoectomyPage() {
  const { handleOpenChatbot } = useChatbot();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-50 overflow-hidden min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto my-10 px-6 lg:px-8 max-w-6xl">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Microsurgical Root-End Surgery (Apicoectomy)
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Saving your natural tooth, even after a failed root canal
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,170.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-8">
              Sometimes, even after a root canal, infection can persist. That&apos;s where microsurgical root-end surgery,
              also known as an apicoectomy, becomes a game-changer. This minimally invasive surgical procedure
              involves removing the infected tip of the tooth&apos;s root and sealing it, preserving your natural tooth and
              avoiding extraction.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[0]} 
              alt="Apicoectomy procedure" 
              className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            /> */}
            <Image
              src={images[0]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
            
          </motion.div>
        </motion.div>

        {/* Why Is It Needed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Why Is It Needed?</h2>
            <p className="text-lg text-gray-700 mb-4">
              A previously treated root canal may become reinfected due to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>New or recurrent tooth decay</li>
              <li>Undetected accessory canals branching from the main canal</li>
              <li>Calcification (narrowing or hardening) of the canals over time</li>
            </ul>
            <p className="text-lg text-gray-700">
              When traditional root canal retreatment isn&apos;t possible or effective, an endodontic surgical approach is
              often the best solution.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[1]} 
              alt="Root canal reinfection" 
              className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            /> */}
                     <Image
              src={images[1]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
       
          </motion.div>
        </motion.div>

        {/* What Happens During the Procedure */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">What Happens During the Procedure?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Using local anesthesia, we gently numb the area and make a small incision in the gum to access the tip
              of the affected root. With the help of a dental operating microscope, we:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Remove any infected tissue</li>
              <li>Trim a few millimeters of the root tip</li>
              <li>Place a biocompatible filling to seal the root canal</li>
              <li>Close the gum with fine sutures for optimal healing</li>
            </ul>
            <p className="text-lg text-gray-700">
              The entire procedure is precise, quick, and comfortable, with minimal pain, faster healing, and long-term
              success.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[2]} 
              alt="Apicoectomy procedure" 
              className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            /> */}
                     <Image
              src={images[2]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
          </motion.div>
        </motion.div>

        {/* Advanced Technology */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Advanced Technology for Advanced Care</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Prudentia, we combine expert skill with state-of-the-art dental technology to ensure the best
              outcomes:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Operating Microscopes for maximum precision</li>
              <li>Co-axial Illumination for shadow-free visibility</li>
              <li>Ultrasonic Instruments that gently clean infected tissue using high-frequency vibration</li>
            </ul>
            <p className="text-lg text-gray-700">
              These tools allow us to target only the affected area while preserving healthy surrounding tissues.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[5]} 
              alt="Advanced dental technology" 
              className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            /> */}
                     <Image
              src={images[5]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
          </motion.div>
        </motion.div>

        {/* The Outcome */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">The Outcome?</h2>
            <p className="text-lg text-gray-700">
              A successful apicoectomy can restore your tooth, gum, and bone to full health, often lasting many years
              without further issues. It&apos;s a conservative, effective solution when retreatment isn&apos;t an option but tooth
              preservation still is.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[3]} 
              alt="Successful apicoectomy" 
              className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            /> */}
                     <Image
              src={images[3]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
          </motion.div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 mb-12"
        >
          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-r from-purple-100 to-purple-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {/* <img 
                  src={images[6]} 
                  alt="Save your natural tooth" 
                  className="rounded-lg shadow-lg w-full object-cover h-64"
                /> */}
                         <Image
              src={images[6]}
               alt="Modern denture solutions"
               fill
              className="object-contain"
              priority
            />  
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Don&apos;t Extract, Save Your Tooth</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Explore the benefits of microsurgical endodontics today. Book a consultation with Dr. Bhushan at
                  Prudentia Micro Dental Care, Pimple Saudagar and take the first step toward lasting oral health.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex space-x-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpenChatbot}
                    className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300"
                  >
                    Book Consultation
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 mb-12"
        >
          </motion.div>
          

        {/* FAQ Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">How long does an apicoectomy procedure take?</h3>
              <p className="text-gray-700">
                Most apicoectomy procedures take between 30-90 minutes, depending on the complexity of the root structure 
                and location of the tooth.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Is the procedure painful?</h3>
              <p className="text-gray-700">
                We use effective local anesthesia to ensure you feel no pain during the procedure. After the anesthesia wears 
                off, most patients experience only mild discomfort that can be managed with over-the-counter pain medication.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">What is the recovery time?</h3>
              <p className="text-gray-700">
                Most patients can return to normal activities the day after surgery. Complete healing of the surgical site 
                typically takes 1-2 weeks, during which we recommend avoiding hard foods on the treated side.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-purple-800 mb-2">What is the success rate of an apicoectomy?</h3>
              <p className="text-gray-700">
                Modern microsurgical apicoectomy procedures have a success rate of approximately 85-90% when performed by a 
                specialist using advanced technology and techniques.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Call To Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Save Your Natural Tooth?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Prudentia Micro Dental Care today to schedule your consultation and learn if microsurgical 
            root-end treatment is right for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={handleOpenChatbot}
            className="bg-white text-purple-800 font-bold py-3 px-8 rounded-lg text-lg"
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.div>


    </div>
  );
}