'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZoomIn, FiShield, FiActivity, FiClock, FiEye } from 'react-icons/fi';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';


const MicroRootTreatmentPage = () => {
    const { handleOpenChatbot } = useChatbot();

  const benefits = [
    {
      icon: <FiEye className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Early Diagnosis",
      description: "Spot cracks, fractures, or hidden decay before symptoms start"
    },
    {
      icon: <FiZoomIn className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Precision Treatment",
      description: "Clean and seal canals thoroughly with 30x magnification"
    },
    {
      icon: <FiShield className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Painless Procedure",
      description: "Advanced anesthesia and minimally invasive tools"
    },
    {
      icon: <FiActivity className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Faster Healing",
      description: "Less trauma means quicker recovery"
    },
    {
      icon: <FiClock className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Tooth Preservation",
      description: "Often eliminates need for crowns or caps"
    }
  ];

  const procedureSteps = [
    {
      title: "Electronic Anesthesia",
      description: "Pain-free numbing without traditional injections"
    },
    {
      title: "Microscopic Examination",
      description: "30x magnification identifies all root canals"
    },
    {
      title: "Ultrasonic Cleaning",
      description: "Precision removal of infected tissue"
    },
    {
      title: "3D Thermal Filling",
      description: "Perfect seal prevents reinfection"
    }
  ];

  const comparisonData = [
    {
      feature: "Magnification",
      micro: "30x with microscope",
      conventional: "None or loupes (2-4x)"
    },
    {
      feature: "Canal Detection",
      micro: "Finds all canals (including hidden)",
      conventional: "May miss complex anatomy"
    },
    {
      feature: "Tissue Preservation",
      micro: "Minimally invasive",
      conventional: "More tooth structure removed"
    },
    {
      feature: "Success Rate",
      micro: "Nearly 100% when maintained",
      conventional: "85-90% average"
    }
  ];

  return (
    <>
      <Head>
        <title>Micro-Root Treatment | Prudentia Micro Dental Care</title>
        <meta name="description" content="Experience painless, microscope-enhanced root canal treatment with nearly 100% success rate at Prudentia Micro Dental Care." />
      </Head>

      <div className="min-h-screen py-16 sm:py-10 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 mb-8 lg:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  <span className="text-purple-600">Micro-Root Treatment</span>: Root Canal Redefined with Precision
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  A modern, microscope-enhanced procedure designed to save infected teeth with minimal discomfort and maximum precision.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenChatbot}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
                >
                  Book Your Consultation <FiArrowRight className="ml-2" />
                </motion.button>
              </motion.div>

              <motion.div 
                className="lg:w-1/2 lg:pl-12 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl shadow-lg mb-4 sm:mb-8 overflow-hidden">
                  <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/root/1. Micro-Root Treatment/painless-root-canal-treatment-under-microscope-prudentia-dental-care-pune.jpg"
                    alt="Modern micro-root treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                    priority
                  />                    
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-base lg:text-lg font-medium">Nearly 100% success rate when properly maintained</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="flex flex-col lg:flex-row items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 w-full">
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8">
                  <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/root/1. Micro-Root Treatment/magnified-dental-operating-field-under-microscope-prudentia-dental-care-pune.jpg"
                    alt="Microscope in root canal treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-contain"
                    priority
                  />                     
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What is a <span className="text-purple-600">Micro-Root Treatment</span>?
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  A root canal performed under a Dental Operating Microscope, combined with advanced technologies like electronic anesthesia and digital imaging for maximum precision and minimal trauma.
                </p>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-100 mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">Why Choose Micro-Root Treatment?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Pain-free experience with electronic anesthesia</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Single-visit completion for most cases</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Preserves more natural tooth structure</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Gone are the days of lengthy, uncomfortable root canals. At Prudentia, we deliver high-success-rate treatments ensuring long-term preservation of your natural teeth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Microscope Advantage */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                How the Microscope <span className="text-purple-600">Enhances Precision</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The Dental Operating Microscope offers up to 30x magnification, illuminating even the tiniest structures within your tooth.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 w-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8">
                  <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/root/1. Micro-Root Treatment/dental-microscope-magnification-currency-note-demo-prudentia-pune..jpg"
                    alt="Microscope precision in root canal"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-contain"
                    priority
                  />   
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Microscopic Advantages</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Accurately identify and clean all root canals (including hidden ones)</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Minimize removal of healthy tooth tissue</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Avoid complications like untreated areas</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Often eliminates the need for a full crown</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-100">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">Minimally Invasive Endodontics</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      This approach helps preserve the strength and natural structure of your tooth while effectively treating infection.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialist Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why Choose a <span className="text-purple-600">Specialist in Microsurgical Endodontics</span>?
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Every tooth has unique anatomy, especially molars and premolars with multiple curved or hidden canals. Treating these without a microscope risks failed treatments.
                </p>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Dr. Bhushan&apos;s Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Complex or curved root canals</span>
                    </div>
                    <div className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Extra or calcified canals</span>
                    </div>
                    <div className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Failed previous root treatments</span>
                    </div>
                    <div className="flex items-start">
                      <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Fractured instruments in canals</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                 <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src="hero/Services/root/1. Micro-Root Treatment/closeup-dr-bhushan-mahajan-working-under-microscope-prudentia-pune.jpg"
                    alt="Specialist performing micro-root treatment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                    priority
                  />   
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Procedure Steps */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What to Expect During <span className="text-purple-600">Treatment</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our Micro-Root Treatment process is designed for comfort and precision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-purple-600 font-bold text-2xl sm:text-3xl mb-4">{index + 1}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 bg-purple-600 text-white p-6 sm:p-8 rounded-xl max-w-4xl mx-auto"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Does a Root Canal Hurt?</h3>
              <p className="mb-4 text-sm sm:text-base">
                Thanks to modern anesthetics and technology, the procedure is virtually painless. We use Sunshine USA Electronic Anesthesia for targeted and controlled numbing—a major upgrade over traditional injections.
              </p>
              <p className="text-sm sm:text-base">
                In rare cases when a tooth is too inflamed, we place temporary calming medication and complete the treatment at a follow-up visit, ensuring your comfort every step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Key Benefits of <span className="text-purple-600">Micro-Root Treatment</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="py-12 sm:py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Micro-Root vs <span className="text-purple-200">Conventional Root Canal</span>
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto">
                Our advanced technologies dramatically improve outcomes compared to traditional methods
              </p>
            </motion.div>

            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-3 border-b border-gray-200 font-semibold min-w-full">
                  <div className="p-3 sm:p-4 text-sm sm:text-base">Feature</div>
                  <div className="p-3 sm:p-4 text-purple-600 text-center text-sm sm:text-base">Micro-Root</div>
                  <div className="p-3 sm:p-4 text-gray-600 text-center text-sm sm:text-base">Conventional</div>
                </div>
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <div className="p-3 sm:p-4 font-medium text-sm sm:text-base">{row.feature}</div>
                    <div className="p-3 sm:p-4 text-purple-600 text-center text-xs sm:text-sm">{row.micro}</div>
                    <div className="p-3 sm:p-4 text-gray-600 text-center text-xs sm:text-sm">{row.conventional}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 bg-white/10 p-6 sm:p-8 rounded-xl max-w-4xl mx-auto backdrop-blur-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Better Than Extraction—Better Than Conventional</h3>
              <p className="mb-4 text-sm sm:text-base">
                Tooth extraction may seem like an easy fix, but replacing a tooth with a bridge or implant is expensive, more invasive, and never quite the same as keeping your natural tooth.
              </p>
              <p className="font-medium text-sm sm:text-base">
                A Micro-Root Treatment is your best chance to preserve what nature gave you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Take the First Step Toward a <span className="text-purple-600">Pain-Free, Healthy Smile</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
                Dr. Bhushan is an expert in microscope-enhanced dental care, with every treatment tailored for comfort, precision, and long-term success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChatbot}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center mx-auto text-base sm:text-lg w-full sm:w-auto justify-center"
              >
                Book Your Micro-Root Consultation Today <FiArrowRight className="ml-2" />
              </motion.button>
              <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base">
                Your natural smile deserves the best care available
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroRootTreatmentPage;