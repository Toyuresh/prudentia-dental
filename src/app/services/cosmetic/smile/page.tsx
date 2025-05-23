"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useChatbot } from "@/components/chatbotContext";
import Image from "next/image";

// Sample image URLs - Replace these with your actual images
const images = [
  "/images/services/cosmetic/smile/Image1.jpg", // Image 1 (hero)
  "/images/services/cosmetic/smile/Image2.jpg", // Image 2 (list of issues)
  "/images/services/cosmetic/smile/Image3.jpg", // Image 3 (bonding)
  "/images/services/cosmetic/smile/Image4.png", // Image 4 (whitening)
  "/images/services/cosmetic/smile/Image5.jpg", // Image 5 (veneers)
  "/images/services/cosmetic/smile/Image6.jpg", // Image 6 (before-after)
  "/images/services/cosmetic/smile/Image7.jpg", // Image 7 (before-after)
  "/images/services/cosmetic/smile/Image8.jpg", // Image 8 (before-after)
  "/images/services/cosmetic/smile/Image9.jpg", // Image 9 (before-after)
  "/images/services/cosmetic/smile/Image10.jpg", // Image 10 (before-after)
  "/images/services/cosmetic/smile/Image11.jpg", // Image 11 (before-after)
];

export default function MinimallyInvasiveCosmeticDentistryPage() {
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-gray-50 overflow-hidden min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Minimally Invasive Cosmetic Dentistry
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Transform Your Smile - Naturally and Gently
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                Book Consultation
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src={images[0]}
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              ></motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#F9FAFB"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,170.7C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Introduction */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Gone are the days of aggressive drilling and long recovery times. At
            Prudentia Micro Dental Care, Pimple Saudagar we offer minimally
            invasive cosmetic dentistry, a modern approach to smile enhancement
            that focuses on preserving your natural teeth while delivering
            stunning results.
          </motion.p>
        </motion.div>

        {/* What Is Minimally Invasive Cosmetic Dentistry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              What Is Minimally Invasive Cosmetic Dentistry?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Minimally invasive cosmetic dentistry involves advanced treatments
              designed to improve the aesthetics of your smile, with little to
              no tooth reduction, minimal anesthesia, and often completed in
              just one visit. This approach is ideal for correcting:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Discolored or stained teeth</li>
              <li>Chipped or cracked teeth</li>
              <li>Crooked or misaligned teeth</li>
              <li>Gaps between teeth</li>
              <li>Minor shape or size inconsistencies</li>
            </ul>
            <p className="text-lg text-gray-700 font-medium">
              The goal is simple: Enhance your natural smile with maximum
              comfort and minimal intervention.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
              <Image
                src={images[1]}
                alt="Modern denture solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded shadow"></div>
          </motion.div>
        </motion.div>

        {/* How Does It Improve My Smile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-indigo-900 mb-6 text-center"
          >
            How Does It Improve My Smile?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto"
          >
            At Prudentia, we use a combination of artistic vision and
            micro-precision to correct cosmetic flaws using the most advanced
            and conservative techniques available. Popular treatments include:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cosmetic Dental Bonding */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src={images[2]}
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  1. Cosmetic Dental Bonding
                </h3>
                <p className="text-gray-700">
                  Quickly repair chips, cracks, and small gaps using a
                  tooth-colored resin—no extensive prep or drilling required.
                </p>
              </div>
            </motion.div>

            {/* Professional Teeth Whitening */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src={images[3]}
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  2. Professional Teeth Whitening
                </h3>
                <p className="text-gray-700">
                  Brighten your smile instantly with our in-office or take-home
                  options, delivering safe, effective, and noticeable results.
                </p>
              </div>
            </motion.div>

            {/* Porcelain Veneers */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src={images[4]}
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  3. Porcelain Veneers
                </h3>
                <p className="text-gray-700">
                  Ultra-thin and stain-resistant, veneers transform your smile
                  by addressing multiple cosmetic issues, without excessive
                  enamel removal.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mt-10 max-w-4xl mx-auto text-center"
          >
            With our Micro-Dentistry tools and techniques, these treatments are
            not only effective but also preserve your tooth&apos;s structure, keeping
            your smile strong, healthy and beautiful.
          </motion.p>
        </motion.div>

        {/* Why Choose */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-10 mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-indigo-900 mb-8 text-center"
          >
            Why Choose Minimally Invasive Cosmetic Dentistry?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2 text-center">
                Preserves Natural Tooth Structure
              </h3>
              <p className="text-gray-700 text-center">
                Less cutting = healthier teeth for life
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2 text-center">
                Comfort-Focused
              </h3>
              <p className="text-gray-700 text-center">
                Little to no anesthesia, minimal sensitivity
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2 text-center">
                Faster Results
              </h3>
              <p className="text-gray-700 text-center">
                Many treatments completed in just one visit
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2 text-center">
                Boosts Confidence
              </h3>
              <p className="text-gray-700 text-center">
                A radiant smile with a natural look and feel
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2 text-center">
                Reduces Dental Anxiety
              </h3>
              <p className="text-gray-700 text-center">
                Gentle techniques create a calm and stress-free experience
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Before/After Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-indigo-900 mb-12 text-center"
          >
            Smile Transformations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[5, 6, 7, 8, 9, 10].map((index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                  <Image
                    src={images[index]}
                    alt="Modern denture solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-indigo-900 font-bold">Before & After</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Are You a Candidate */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                Are You a Candidate?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                If you&apos;re looking to improve the appearance of your smile
                without aggressive dental procedures, minimally invasive
                cosmetic dentistry might be the perfect fit.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                During your personalized smile consultation at Prudentia, we
                will:
              </p>
              <ul className="mb-6 space-y-3">
                {[
                  "Evaluate your dental and oral health",
                  "Understand your aesthetic goals",
                  "Present the most effective, conservative options",
                  "Customize a treatment plan just for you",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-gray-700">
                Patients with good oral health and realistic expectations are
                often excellent candidates.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-indigo-200 rounded-xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-purple-200 rounded-xl transform -rotate-3"></div>
              <div className="relative h-80 md:h-96 max-w-full shadow-2xl rounded-xl  shadow-lg mb-8">
                <Image
                  src="/images/services/cosmetic/smile/Image1.jpg"
                  alt="Modern denture solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl p-12 text-center text-white mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            Let&apos;s Create the Smile You Deserve
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            At Prudentia Micro Dental Care, we&apos;ve helped countless patients
            transform their smiles, comfortably, affordably, and beautifully.
          </p>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Book your consultation today and take the first step toward the
            smile you&apos;ve always dreamed of - naturally, gently, and
            confidently.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenChatbot}
            className="bg-white text-indigo-800 font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Book Your Smile Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
