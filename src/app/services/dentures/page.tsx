'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatbot } from '@/components/chatbotContext';
import { Image } from '@imagekit/next';


export default function DenturesTreatment() {
    const { handleOpenChatbot } = useChatbot();
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('full');
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Image placeholder paths - replace with your actual images
  const images = {
    image1: 'hero/Services/dentures/premium-custom-dentures-oral-rehabilitation-prudentia-pune.jpg',
    image2: 'hero/Services/dentures/premiums-custom-dentures-oral-rehabilitation-prudentia-pune.jpg',
    image3: 'hero/Services/dentures/premium-customs-dentures-oral-rehabilitation-prudentia-pune.jpg',
    image4: 'hero/Services/dentures/premium-custom-denturess-oral-rehabilitation-prudentia-pune.jpg'
  };

  const dentureTypes = [
    {
      id: 'full',
      title: 'Traditional Full Dentures',
      content: 'Traditional dentures are made with a gum-colored base and artificial teeth designed to match your natural tooth enamel for a seamless and realistic look. These dentures fit securely over your gums and are held in place by suction and a dental adhesive. For the best results, traditional dentures should be removed at night for cleaning and to allow your gums to rest.'
    },
    {
      id: 'partial',
      title: 'Partial Dentures',
      content: 'When multiple teeth are missing but healthy teeth remain, partial dentures provide a solution. These dentures feature a gum-colored acrylic base and natural-looking artificial teeth. They are affixed to a metal base with small clasps that secure the denture to nearby healthy teeth, ensuring it stays in place. Partial dentures can be easily removed for cleaning and resting your gums during sleep.'
    },
    {
      id: 'implant',
      title: 'Implant-Supported Dentures',
      content: 'Implant-supported dentures are a more permanent solution, supported by dental implants rather than resting on your gums or relying on nearby teeth. This option involves a surgical procedure where small titanium implant posts are placed into your jawbone. Over 4-6 months, the implants bond with your jawbone through a process called osseointegration, offering unparalleled stability and strength. Implant-supported dentures provide superior comfort, longer-lasting results, and improved oral health by preventing bone loss, a common side effect of missing teeth.'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <Head>
        <title>Dentures Treatment | Prudentia Micro Dental Care</title>
        <meta name="description" content="Modern denture solutions including traditional and implant-supported options in Pimple Saudagar" />
      </Head>

      <main className="container mx-auto px-4 py-25">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Dentures at Prudentia Micro Dental Care: A Modern Solution for a Beautiful Smile
          </h1>
          
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={loaded ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
              src={images.image1}
              alt="Modern denture solutions"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
          >
            Dentures have been a time-tested solution for replacing missing teeth, and today, advancements in technology and design have made dentures even more convenient, comfortable, and natural-looking than ever before. At Prudentia Micro Dental Care, we offer both traditional and implant-supported dentures, ensuring that you can restore your smile and bite without the hassle or discomfort of older denture options.
          </motion.p>
        </motion.section>

        {/* Candidate Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-purple-800 mb-6">
                Are You a Candidate for Dentures?
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                If you&apos;re missing most or all of your teeth, dentures may be an ideal solution for you. For patients with sporadic tooth loss and a good amount of healthy remaining teeth, partial dentures might be a better choice. If you&apos;re seeking a more permanent and durable option, implant-supported dentures are also available.
              </p>
              <p className="text-gray-700 text-lg">
                During your consultation, we&apos;ll thoroughly evaluate your gums, jawbone, and remaining teeth to determine the best option for you. If issues like gum disease or tooth decay are present, we will address them before proceeding with denture treatment.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-80 w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                src={images.image2}
                alt="Denture candidate evaluation"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Types of Dentures */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">
            Types of Dentures
          </h2>
          
          <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-10">
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
              src={images.image3}
              alt="Types of dentures"
              fill
              className="object-contain"
            />
          </div>

          <div className="mb-10">
            <div className="flex border-b border-purple-200 mb-6">
              {dentureTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-6 py-3 font-medium text-lg transition-colors ${activeTab === type.id ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-500'}`}
                >
                  {type.title.split(' ')[0]}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  {dentureTypes.find(t => t.id === activeTab)?.title}
                </h3>
                <p className="text-gray-700">
                  {dentureTypes.find(t => t.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Implant Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            Why Choose Implant-Supported Dentures?
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
                  src={images.image4}
                  alt="Benefits of implant-supported dentures"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <ul className="space-y-4">
                {[
                  "Improved Support & Durability: Dental implants act like natural tooth roots, providing better functionality and durability.",
                  "Prevents Bone Loss: Unlike traditional dentures, implant-supported options help preserve your jawbone.",
                  "Better Comfort: With a more secure fit, implant-supported dentures are comfortable and stable.",
                  "Long-Term Results: Implants offer a longer-lasting solution, reducing the need for frequent adjustments or replacements."
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="inline-block bg-purple-100 text-purple-800 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Ready to Restore Your Smile?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Whether you&apos;re looking for traditional dentures, partial dentures, or a more permanent solution with implant-supported dentures, our team at Prudentia Micro Dental Care, Pimple Saudagar is here to guide you through the process. Contact us today at (9768048056) to schedule a consultation and learn more about the best tooth replacement options for your needs.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
                     <div className="flex justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05, backgroundColor: "#800080", color: " #ffff" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleOpenChatbot}
                          transition={{ duration: 0.2 }}
                          className="bg-transparent border-2 border-black text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-purple-900 transition duration-300"
                        >
                          Schedule your consultation today
                        </motion.button>
                          </div>
         
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}