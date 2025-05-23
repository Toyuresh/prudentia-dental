"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';


// Sample image URLs - Replace these with your actual images
const images = [
  "/images/services/root/roottherapy/Image1.jpeg", // Image 1
  "/images/services/root/roottherapy/Image2.jpg", // Image 2
  "/images/services/root/roottherapy/Image3.jpg", // Image 3
  "/images/services/root/roottherapy/Image4.jpg", // Image 4
  "/images/services/root/roottherapy/Image5.jpg", // Image 5 (diagnosis)
  "/images/services/root/roottherapy/Image6.png", // Image 6 (instruments)
  "/images/services/root/roottherapy/Image7.jpg", // Image 7 (smile)
];

export default function RevisionalMicroRootTherapyPage() {
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
        <div className="container mx-auto my-15 px-6 lg:px-8 max-w-6xl">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Revisional Micro-Root Therapy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Saving Previously Treated Teeth with Precision
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
              Not all root canal treatments last a lifetime, especially when the original procedure was incomplete or left
              untreated issues behind. If a previously treated tooth becomes painful or re-infected, it may be necessary
              to redo the root canal, a process known as Revisional Micro-Root Therapy.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              At Prudentia Micro Dental Care, we specialize in re-treatment of complex root canal cases using
              microscope-enhanced precision and advanced disinfection protocols to restore your tooth&apos;s health and
              function, without the need for extraction.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[0]} 
              alt="Dental microscope" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
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

        {/* Why Root Canals Fail */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Why Do Root Canal Treatments Fail?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Even a well-intended root canal can fail over time. The most common causes include:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Missed canals or untreated spaces within the tooth</li>
              <li>Incomplete disinfection during the original procedure</li>
              <li>Blocked canals that weren&apos;t cleaned to the tip of the root</li>
              <li>Leaks or reinfection through a poorly sealed restoration</li>
              <li>Cracks in the tooth, especially when a crown wasn&apos;t placed after the original treatment</li>
            </ul>
            <p className="text-lg text-gray-700">
              These issues are particularly common in back teeth (molars), where anatomy is complex and extra
              canals are often overlooked.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[1]} 
              alt="Failed root canal" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
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

        {/* Diagnosis */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">How We Diagnose the Cause of Failure</h2>
            <p className="text-lg text-gray-700 mb-4">
              Before recommending re-treatment, Dr. Bhushan will perform a detailed microscopic evaluation of the
              affected tooth. Using a Dental Operating Microscope (2x–30x magnification), we assess:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Signs of cracks or fractures</li>
              <li>Quality and completeness of the previous root filling</li>
              <li>Presence of hidden canals or infections</li>
              <li>Integrity of the tooth&apos;s structure and crown</li>
            </ul>
            <p className="text-lg text-gray-700">
              This careful diagnosis allows us to determine whether retreatment is feasible or if an alternative approach
              is more suitable.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[4]} 
              alt="Dental diagnosis" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
            /> */}
         <Image
                          src={images[4]}
                           alt="Modern denture solutions"
                           fill
                          className="object-contain"
                          priority
                        />             
          </motion.div>
        </motion.div>

        {/* What is Revisional Therapy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">What Is Revisional Micro-Root Therapy?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Revisional Micro-Root Therapy involves removing the original root filling material, thoroughly disinfecting
              the canals, and sealing them again using modern biocompatible materials and advanced thermal filling systems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The entire process is guided by magnification, illumination, and state-of-the-art micro-instruments, such as:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Ultrasonic tips for gentle and precise canal access</li>
              <li>Electronic apex locators for accurate measurement</li>
              <li>Advanced rotary endomotors for efficient canal cleaning</li>
              <li>Sonic irrigation systems for deep-root disinfection</li>
              <li>Thermal root filling systems to tightly seal the canal space</li>
            </ul>
            <p className="text-lg text-gray-700">
              This technique allows us to preserve natural teeth that would otherwise be considered for extraction.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[5]} 
              alt="Micro instruments" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
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

        {/* What to Expect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">What to Expect After Treatment</h2>
            <p className="text-lg text-gray-700 mb-4">
              Most patients report minimal discomfort following Revisional Micro-Root Therapy. While some mild to
              moderate pain may occur as the anesthesia wears off, this typically resolves within a few days, especially
              with proper medication for infections or inflammation.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              During healing, we recommend:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Avoiding chewing on the treated side until pain subsides</li>
              <li>Maintaining excellent oral hygiene</li>
              <li>Returning for the recommended definitive crown restoration to protect the tooth</li>
            </ul>
            <p className="text-lg text-gray-700">
              Without a crown, previously treated teeth are more prone to fracture. Once crowned, however, your
              restored tooth will function and feel just like your other natural teeth.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[2]} 
              alt="Post treatment care" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
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

        {/* Alternatives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Are There Alternatives to Revisional Root Canal Treatment?</h2>
            <p className="text-lg text-gray-700 mb-4">
              If non-surgical retreatment is not possible, due to severe damage, inaccessible canals, or persistent
              infection, endodontic microsurgery (such as apicoectomy) may be recommended. This surgical option
              involves accessing the root tip through a small incision in the gum to remove infected tissue.
            </p>
            <p className="text-lg text-gray-700">
              Dr. Bhushan will explain your treatment options clearly and recommend the least invasive and most
              effective approach based on your individual case.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-first lg:order-last relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
            {/* <img 
              src={images[3]} 
              alt="Treatment alternatives" 
              className="rounded-lg shadow-lg w-full object-contain h-64 lg:h-full"
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
                  alt="Healthy smile" 
                  className="rounded-lg shadow-lg w-full object-contain h-64"
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
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Preserve Your Natural Smile</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Prudentia Micro Dental Care, Pimple Saudagar we believe in saving teeth whenever possible.
                  Revisional Micro-Root Therapy gives your previously treated tooth a second chance at lasting health,
                  using cutting-edge technology and clinical excellence.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  If you&apos;re experiencing pain or symptoms in a root canal-treated tooth, schedule your microscopic
                  evaluation today, because your natural teeth deserve a second chance, done right.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenChatbot}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}