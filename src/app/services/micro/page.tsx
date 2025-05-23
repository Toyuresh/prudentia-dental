'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZoomIn, FiEye, FiShield, FiActivity } from 'react-icons/fi';
import { useChatbot } from '@/components/chatbotContext';
import Image from 'next/image';

const MicroscopeDentistryPage = () => {
     const { handleOpenChatbot } = useChatbot();

  const benefits = [
    {
      icon: <FiZoomIn className="text-2xl sm:text-3xl text-purple-600" />,
      title: "30x Magnification",
      description: "See details invisible to the naked eye for precise diagnosis"
    },
    {
      icon: <FiEye className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Early Detection",
      description: "Spot cavities and cracks before symptoms appear"
    },
    {
      icon: <FiShield className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Minimally Invasive",
      description: "Preserve more healthy tooth structure"
    },
    {
      icon: <FiActivity className="text-2xl sm:text-3xl text-purple-600" />,
      title: "Faster Healing",
      description: "Precise treatments mean less trauma and quicker recovery"
    }
  ];

  const procedureSteps = [
    {
      title: "Initial Assessment",
      description: "Comprehensive examination with microscopic evaluation"
    },
    {
      title: "Live Visualization",
      description: "View your teeth in real-time on high-definition monitors"
    },
    {
      title: "Precision Treatment Plan",
      description: "Customized approach based on microscopic findings"
    },
    {
      title: "Gentle Execution",
      description: "Minimally invasive treatment with maximum precision"
    }
  ];

  return (
    <>
      <Head>
        <title>Microscope Dentistry | Prudentia Micro Dental Care</title>
        <meta name="description" content="Experience revolutionary microscope-assisted dental care with 30x magnification for precise, minimally invasive treatments." />
      </Head>

      <div className="min-h-screen py-10 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="w-full lg:w-1/2 mb-8 lg:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Microscope Dentistry: <span className="text-purple-600">See the Difference</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  At Prudentia Micro Dental Care, we do dentistry differently with revolutionary Dental Operating Microscope (DOM) technology bringing 30x magnification to your care.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenChatbot}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center text-sm sm:text-base"
                >
                  Book Micro-Consultation <FiArrowRight className="ml-2" />
                </motion.button>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2 lg:pl-8 xl:pl-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl shadow-lg mb-4 sm:mb-8 overflow-hidden">
                  <Image
                    src="/images/services/Micro/Image1.jpg"
                    alt="Dental microscope equipment for precision dentistry"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 sm:p-6">
                    <p className="text-white text-sm sm:text-lg font-medium">30x magnification for unparalleled precision</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is Micro-Consultation */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What Is a <span className="text-purple-600">Micro-Consultation</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                A modern dental examination powered by microscope technology to uncover issues invisible to the naked eye.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/services/Micro/Image2.jpg"
                      alt="Microscopic view of dental examination"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/services/Micro/Image3.jpg"
                      alt="Advanced dental microscope technology"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-100 mt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">&quot;See More, Treat Less&quot; Philosophy</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Early diagnosis of micro-fractures and decay</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Minimal intervention required</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Maximum preservation of healthy tissues</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Live video feeds for better understanding</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Microscopy Matters</h3>
                  <p className="text-gray-600 mb-6">
                    Dr. Bhushan uses high-powered magnification to detect early-stage tooth decay, micro-fractures, or subtle gum disease that conventional exams might miss.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <FiCheck className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Early Detection</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Spot problems before they become painful or require extensive treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <FiCheck className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Informed Decisions</h4>
                        <p className="text-gray-600 text-sm sm:text-base">See what we see and understand your treatment options</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                        <FiCheck className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Precision Treatment</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Target only the affected areas, preserving healthy tooth structure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Microscopic Dentistry */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="flex flex-col lg:flex-row items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-10 order-2 lg:order-1">
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/Micro/Image4.jpg"
                    alt="Benefits of microscopic dentistry"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why Choose <span className="text-purple-600">Microscopic Dentistry</span>?
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  Here&apos;s what sets microscope-assisted dental care apart from conventional methods:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        {benefit.icon}
                        <h3 className="text-lg sm:text-xl font-semibold ml-3">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advanced Cleaning Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Advanced Dental Cleaning with a <span className="text-purple-600">Precision Touch</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Even routine procedures benefit from our microscope-enhanced approach
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/Micro/Image5.jpg"
                    alt="Advanced dental cleaning with microscope"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-100">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">Our Microscopic Cleaning Process</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base"><strong>Ultrasonic Scalers:</strong> Break up tartar with gentle vibrations</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base"><strong>Air Polishers:</strong> Remove plaque and stains with fine powder mist</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base"><strong>Desensitizing Rinse:</strong> Strengthens enamel and protects against decay</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Long-Term Benefits</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      By smoothing tooth surfaces under magnification, we help prevent plaque from reattaching, making it easier to maintain your oral health between visits.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Health Connection Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-purple-100 text-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                  Your Mouth Reflects Your <span className="text-purple-800">Overall Health</span>
                </h2>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                  The mouth is often the first place systemic diseases show early signs. During a Micro-Consultation, Dr. Bhushan may detect symptoms that indicate broader health issues, well before they become serious.
                </p>
                <p className="text-base sm:text-lg text-purple-700 mb-8 sm:mb-10">
                  This makes micro-dentistry not just about your teeth, but your total well-being.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenChatbot}
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center mx-auto text-sm sm:text-base"
                >
                  Book Your Health Assessment <FiArrowRight className="ml-2" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Discover the Power of <span className="text-purple-600">Precision Dentistry</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
                  Join the growing number of patients choosing minimally invasive, high-precision care. Experience dentistry that&apos;s gentler, smarter, and truly personalized.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {procedureSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 text-left"
                    >
                      <div className="text-purple-600 font-bold text-xl sm:text-2xl mb-2">{index + 1}.</div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenChatbot}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center mx-auto text-base sm:text-lg"
                >
                  Book Your Micro-Consultation Today <FiArrowRight className="ml-2" />
                </motion.button>
                <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base">
                  Because early detection is everything!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroscopeDentistryPage;